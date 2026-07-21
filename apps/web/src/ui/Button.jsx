import { Link } from "react-router-dom";
import { Button } from "@ordospace/ui-catalog";

const buttonVariants = {
  primary: "primary",
  secondary: "secondary",
  text: "link",
};

const linkClasses = {
  primary: "primary-link",
  secondary: "secondary-button",
  text: "text-button as-link",
};

export function AppButton({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}) {
  return (
    <Button
      className={className}
      type={type}
      variant={buttonVariants[variant]}
      {...props}
    >
      {children}
    </Button>
  );
}

export function AppLink({ children, className = "", to, variant = "primary", ...props }) {
  return (
    <Link
      className={joinClassNames(linkClasses[variant], className)}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

function joinClassNames(...values) {
  return values.filter(Boolean).join(" ");
}
