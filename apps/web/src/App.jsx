import { useMemo, useState } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { ActivityReviewPanel } from "./cards/ActivityReviewPanel.jsx";
import { AdminCreateModuleCardPanel } from "./cards/AdminCreateModuleCardPanel.jsx";
import { AdminReviewModuleCardPanel } from "./cards/AdminReviewModuleCardPanel.jsx";
import { ClientDecisionModuleCardPanel } from "./cards/ClientDecisionModuleCardPanel.jsx";
import { useModuleCardStore } from "./cards/ModuleCardStoreContext.jsx";
import { WorkerSubmitModuleCardPanel } from "./cards/WorkerSubmitModuleCardPanel.jsx";
import { WorkerUpdateModuleCardPanel } from "./cards/WorkerUpdateModuleCardPanel.jsx";
import { createActivityReview } from "./cards/module-card-activity-review.mjs";
import { mvpSeed } from "./data/mvp-seed.mjs";
import { ModuleCardDashboard } from "./components/dashboard/index.js";
import { AdminCardReviewPage, AdminOperationsPage } from "./features/admin/index.js";
import { ClientApprovalDetailPage, ClientApprovalPage } from "./features/client/index.js";
import { WorkerTaskDetailPage, WorkerWorkspacePage } from "./features/worker/index.js";
import {
  LIFECYCLE_STEPS,
  ROLES,
  getActivityForCard,
  getCardById,
  getCardsForRole,
  getCommentsForCard,
  getDisplayNameForUser,
  getRoleLabel,
  sortCardsByDueDate,
  summarizeModuleCards,
} from "./domain/module-card.model.mjs";
import { useSession } from "./session/SessionContext.jsx";
import {
  getSafePostLoginPath,
  getWorkspacePathForRole,
} from "./session/session.service.mjs";
import {
  AccountOption,
  AppButton,
  AppLink,
  DataPanel,
  MetricList,
  ModuleDetailPanel,
  NoticePanel,
  StatusCard,
  StatusGrid,
} from "./ui/index.js";

export function OverviewScreen() {
  const { isAuthenticated, currentUser } = useSession();
  const { moduleCards } = useModuleCardStore();
  const summary = summarizeModuleCards(moduleCards);
  const lifecycleRows = LIFECYCLE_STEPS.map((step) => {
    const count = step.statuses.reduce(
      (total, status) => total + (summary.byStatus[status] ?? 0),
      0,
    );

    return {
      id: step.id,
      label: step.label,
      value: formatCardCount(count),
    };
  });
  const workspacePath = currentUser
    ? getWorkspacePathForRole(currentUser.role)
    : "/auth";

  return (
    <section className="page-stack">
      <p className="eyebrow">Round 16 browser-verified flow</p>
      <h1>Local ModuleCard state powers role work.</h1>
      <p className="lead">
        Seed users can sign in locally, view role-filtered ModuleCards, and
        run admin create, worker progress, worker submit, and admin client
        review send, plus client approve or revision decisions in the current
        app session. ModuleCard changes now survive refresh through
        localStorage, with role-scoped activity review, form validation, and
        browser-smoked lifecycle checks.
      </p>

      <div className="action-row">
        <AppLink to={workspacePath}>
          {isAuthenticated ? "Open my workspace" : "Choose an account"}
        </AppLink>
        {isAuthenticated ? (
          <span className="inline-note">
            Signed in as {currentUser.name} - {getRoleLabel(currentUser.role)}
          </span>
        ) : null}
      </div>

      <StatusGrid ariaLabel="Round 16 checkpoints">
        <StatusCard
          title="ModuleCards"
          value={String(moduleCards.length)}
          meta={`${summary.averageProgress}% average progress`}
        />
        <StatusCard
          title="Session"
          value={isAuthenticated ? "Active" : "Required"}
          meta="Stored in localStorage"
        />
        <StatusCard
          title="ModuleCard store"
          value="Persistent"
          meta="Cards, comments, activities"
        />
        <StatusCard
          title="Protected roles"
          value="3"
          meta="Admin, worker, client"
        />
      </StatusGrid>

      <DataPanel>
        <h2>Lifecycle coverage</h2>
        <MetricList rows={lifecycleRows} />
      </DataPanel>
    </section>
  );
}

export function AuthScreen() {
  const { session, currentUser, isAuthenticated, signIn, signOut } = useSession();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedUserId, setSelectedUserId] = useState(
    session?.userId ?? mvpSeed.users[0].id,
  );
  const selectedUser = useMemo(
    () => mvpSeed.users.find((user) => user.id === selectedUserId),
    [selectedUserId],
  );

  function handleSubmit(event) {
    event.preventDefault();
    const nextSession = signIn(selectedUserId);
    const nextPath = getSafePostLoginPath(
      searchParams.get("next"),
      nextSession.role,
    );
    navigate(nextPath, { replace: true });
  }

  function handleSignOut() {
    signOut();
    setSelectedUserId(mvpSeed.users[0].id);
  }

  return (
    <section className="page-stack">
      <p className="eyebrow">Local session</p>
      <h1>Choose a seed account to enter the MVP.</h1>
      <p className="lead">
        This is a local MVP login. It stores the selected seed account in
        localStorage so refresh keeps the same role.
      </p>

      {isAuthenticated ? (
        <NoticePanel
          actions={
            <>
              <AppLink to={getWorkspacePathForRole(currentUser.role)}>
                Open workspace
              </AppLink>
              <AppButton variant="secondary" onClick={handleSignOut}>
                Log out
              </AppButton>
            </>
          }
        >
          <strong>{currentUser.name} is signed in.</strong>
          <span>
            {getRoleLabel(currentUser.role)} session - {currentUser.email}
          </span>
        </NoticePanel>
      ) : null}

      <form className="data-panel login-panel" onSubmit={handleSubmit}>
        <h2>Seed accounts</h2>
        <div className="account-grid" role="radiogroup" aria-label="Seed accounts">
          {mvpSeed.users.map((user) => (
            <AccountOption
              checked={selectedUserId === user.id}
              key={user.id}
              onChange={() => setSelectedUserId(user.id)}
              user={user}
            />
          ))}
        </div>

        <AppButton type="submit">
          Sign in as {selectedUser?.name ?? "selected user"}
        </AppButton>
      </form>
    </section>
  );
}

export function WorkspaceRedirectScreen() {
  const { session, isAuthenticated } = useSession();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        replace
        to={`/auth?next=${encodeURIComponent(location.pathname)}`}
      />
    );
  }

  return <Navigate replace to={getWorkspacePathForRole(session.role)} />;
}

export function RequireRole({ children, role }) {
  const { session, isAuthenticated } = useSession();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        replace
        to={`/auth?next=${encodeURIComponent(location.pathname)}`}
      />
    );
  }

  if (session.role !== role) {
    return <Navigate replace to={getWorkspacePathForRole(session.role)} />;
  }

  return children;
}

export function RoleWorkspaceScreen({ role }) {
  const { currentUser } = useSession();
  const { activities, createAssignedModuleCard, moduleCards } =
    useModuleCardStore();
  const visibleCards = sortCardsByDueDate(
    getCardsForRole(moduleCards, role, currentUser?.id),
  );
  const activityReview = createActivityReview({
    activities,
    cards: moduleCards,
    role,
    userId: currentUser?.id,
    users: mvpSeed.users,
  });
  const workers = useMemo(
    () => mvpSeed.users.filter((user) => user.role === ROLES.WORKER),
    [],
  );

  return (
    <section className="role-workspace-stack">
      {role === ROLES.ADMIN ? (
        <AdminOperationsPage
          cards={visibleCards}
          createPanel={
            <AdminCreateModuleCardPanel
              currentUser={currentUser}
              onCreate={(input) => createAssignedModuleCard(input, currentUser.id)}
              workers={workers}
            />
          }
          users={mvpSeed.users}
        />
      ) : role === ROLES.CLIENT ? (
        <ClientApprovalPage cards={visibleCards} users={mvpSeed.users} />
      ) : role === ROLES.WORKER ? (
        <WorkerWorkspacePage cards={visibleCards} currentUser={currentUser} users={mvpSeed.users} />
      ) : (
        <ModuleCardDashboard cards={visibleCards} role={role} users={mvpSeed.users} />
      )}

      <ActivityReviewPanel review={activityReview} role={role} />
    </section>
  );
}

export function ModuleCardDetailScreen({ role }) {
  const { cardId } = useParams();
  const { currentUser } = useSession();
  const {
    activities,
    comments,
    decideClientModuleCard,
    moduleCards,
    sendAdminModuleCardToClientReview,
    submitWorkerModuleCard,
    updateWorkerModuleCard,
  } = useModuleCardStore();
  const visibleCards = getCardsForRole(moduleCards, role, currentUser?.id);
  const card = getCardById(visibleCards, cardId);

  if (!card) {
    return (
      <section className="page-stack">
        <p className="eyebrow">Card unavailable</p>
        <h1>This ModuleCard is not available for your role.</h1>
        <p className="lead">
          Return to your workspace to choose a card from the role-filtered list.
        </p>
        <AppLink to={getWorkspacePathForRole(role)}>Back to workspace</AppLink>
      </section>
    );
  }

  if (role === ROLES.ADMIN) {
    const assigneeName = getDisplayNameForUser(mvpSeed.users, card.assigneeId);
    const clientName = getDisplayNameForUser(mvpSeed.users, card.clientId);
    return (
      <AdminCardReviewPage
        assigneeName={assigneeName}
        card={card}
        clientName={clientName}
        detailPanel={
          <ModuleDetailPanel
            activities={getActivityForCard(activities, card.id)}
            assigneeName={assigneeName}
            card={card}
            clientName={clientName}
            comments={getCommentsForCard(comments, card.id)}
            role={role}
          />
        }
      >
        <AdminReviewModuleCardPanel
          card={card}
          currentUser={currentUser}
          onSend={(input) => sendAdminModuleCardToClientReview(card.id, input, currentUser.id)}
        />
      </AdminCardReviewPage>
    );
  }

  if (role === ROLES.CLIENT) {
    return (
      <ClientApprovalDetailPage
        activities={getActivityForCard(activities, card.id)}
        card={card}
        comments={getCommentsForCard(comments, card.id)}
        currentUser={currentUser}
      >
        <ClientDecisionModuleCardPanel
          card={card}
          currentUser={currentUser}
          onDecide={(input) => decideClientModuleCard(card.id, input, currentUser.id)}
        />
      </ClientApprovalDetailPage>
    );
  }

  if (role === ROLES.WORKER) {
    return (
      <WorkerTaskDetailPage
        activities={getActivityForCard(activities, card.id)}
        card={card}
        comments={getCommentsForCard(comments, card.id)}
        currentUser={currentUser}
        submissionPanel={<WorkerSubmitModuleCardPanel card={card} currentUser={currentUser} onSubmit={(input) => submitWorkerModuleCard(card.id, input, currentUser.id)} />}
        updatePanel={<WorkerUpdateModuleCardPanel card={card} currentUser={currentUser} onUpdate={(input) => updateWorkerModuleCard(card.id, input, currentUser.id)} />}
      />
    );
  }

  return (
    <section className="page-stack">
      <p className="eyebrow">{role} card detail</p>
      <h1>{card.title}</h1>
      <p className="lead">
        Detail view for {currentUser.name}. Lifecycle actions use local state,
        validation, and role-specific visibility.
      </p>

      <div className="action-row">
        <AppLink to={getWorkspacePathForRole(role)} variant="secondary">
          Back to list
        </AppLink>
      </div>

      <ModuleDetailPanel
        activities={getActivityForCard(activities, card.id)}
        assigneeName={getDisplayNameForUser(mvpSeed.users, card.assigneeId)}
        card={card}
        clientName={getDisplayNameForUser(mvpSeed.users, card.clientId)}
        comments={getCommentsForCard(comments, card.id)}
        role={role}
      />
    </section>
  );
}

export function NotFoundScreen() {
  return (
    <section className="page-stack">
      <p className="eyebrow">Route fallback</p>
      <h1>This React MVP route does not exist yet.</h1>
      <p className="lead">
        Use the navigation to return to a connected MVP checkpoint route.
      </p>
      <AppLink to="/">Back to overview</AppLink>
    </section>
  );
}

function formatCardCount(count) {
  return `${count} ${count === 1 ? "card" : "cards"}`;
}
