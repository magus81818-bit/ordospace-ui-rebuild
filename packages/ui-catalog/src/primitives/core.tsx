import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

export const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>(({ className, ...props }, ref) => <AvatarPrimitive.Root ref={ref} className={cn("ordo-avatar", className)} {...props} />);
Avatar.displayName = "Avatar";
export const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>(({ className, ...props }, ref) => <AvatarPrimitive.Image ref={ref} className={cn("ordo-avatar__image", className)} {...props} />);
AvatarImage.displayName = "AvatarImage";
export const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>(({ className, ...props }, ref) => <AvatarPrimitive.Fallback ref={ref} className={cn("ordo-avatar__fallback", className)} {...props} />);
AvatarFallback.displayName = "AvatarFallback";

const badgeVariants = cva("ordo-badge", { variants: { variant: { neutral: "ordo-badge--neutral", accent: "ordo-badge--accent", outline: "ordo-badge--outline" } }, defaultVariants: { variant: "neutral" } });
export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;
export function Badge({ className, variant, ...props }: BadgeProps) { return <span className={cn(badgeVariants({ variant }), className)} {...props} />; }

const buttonVariants = cva("ordo-button", {
  variants: {
    variant: { primary: "ordo-button--primary", secondary: "ordo-button--secondary", outline: "ordo-button--outline", ghost: "ordo-button--ghost", destructive: "ordo-button--destructive", link: "ordo-button--link" },
    size: { sm: "ordo-button--sm", md: "ordo-button--md", lg: "ordo-button--lg", icon: "ordo-button--icon" },
  },
  defaultVariants: { variant: "primary", size: "md" },
});
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { loading?: boolean; }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, loading = false, disabled, children, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} disabled={disabled || loading} aria-busy={loading || undefined} {...props}>
    {loading && <span className="ordo-spinner" aria-hidden="true" />}<span className="ordo-button__label">{children}</span>
  </button>
));
Button.displayName = "Button";

const cardVariants = cva("ordo-card", { variants: { variant: { default: "", muted: "ordo-card--muted", elevated: "ordo-card--elevated", interactive: "ordo-card--interactive", selected: "ordo-card--selected" } }, defaultVariants: { variant: "default" } });
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}
export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, ...props }, ref) => <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props} />);
Card.displayName = "Card";
export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("ordo-card__header", className)} {...props} />);
CardHeader.displayName = "CardHeader";
export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h3 ref={ref} className={cn("ordo-card__title", className)} {...props} />);
CardTitle.displayName = "CardTitle";
export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => <p ref={ref} className={cn("ordo-card__description", className)} {...props} />);
CardDescription.displayName = "CardDescription";
export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("ordo-card__content", className)} {...props} />);
CardContent.displayName = "CardContent";
export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("ordo-card__footer", className)} {...props} />);
CardFooter.displayName = "CardFooter";

export const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(({ className, ...props }, ref) => <LabelPrimitive.Root ref={ref} className={cn("ordo-label", className)} {...props} />);
Label.displayName = "Label";
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, "aria-invalid": invalid, ...props }, ref) => <input ref={ref} className={cn("ordo-input", className)} aria-invalid={invalid} {...props} />);
Input.displayName = "Input";
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, "aria-invalid": invalid, ...props }, ref) => <textarea ref={ref} className={cn("ordo-input ordo-textarea", className)} aria-invalid={invalid} {...props} />);
Textarea.displayName = "Textarea";
export function Field({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("ordo-field", className)} {...props} />; }
export function FieldDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) { return <p className={cn("ordo-field__description", className)} {...props} />; }
export function FieldError({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) { return <p role="alert" className={cn("ordo-field__error", className)} {...props} />; }

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;
export const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(({ className, children, ...props }, ref) => <SelectPrimitive.Trigger ref={ref} className={cn("ordo-select__trigger", className)} {...props}>{children}<SelectPrimitive.Icon aria-hidden="true">⌄</SelectPrimitive.Icon></SelectPrimitive.Trigger>);
SelectTrigger.displayName = "SelectTrigger";
export const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(({ className, children, position = "popper", ...props }, ref) => <SelectPrimitive.Portal><SelectPrimitive.Content ref={ref} className={cn("ordo-select__content", className)} position={position} {...props}><SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport></SelectPrimitive.Content></SelectPrimitive.Portal>);
SelectContent.displayName = "SelectContent";
export const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(({ className, children, ...props }, ref) => <SelectPrimitive.Item ref={ref} className={cn("ordo-select__item", className)} {...props}><SelectPrimitive.ItemIndicator aria-hidden="true">✓</SelectPrimitive.ItemIndicator><SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText></SelectPrimitive.Item>);
SelectItem.displayName = "SelectItem";

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>>(({ className, ...props }, ref) => <SwitchPrimitive.Root ref={ref} className={cn("ordo-switch", className)} {...props}><SwitchPrimitive.Thumb className="ordo-switch__thumb" /></SwitchPrimitive.Root>);
Switch.displayName = "Switch";

export const Tabs = TabsPrimitive.Root;
export const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({ className, ...props }, ref) => <TabsPrimitive.List ref={ref} className={cn("ordo-tabs__list", className)} {...props} />);
TabsList.displayName = "TabsList";
export const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({ className, ...props }, ref) => <TabsPrimitive.Trigger ref={ref} className={cn("ordo-tabs__trigger", className)} {...props} />);
TabsTrigger.displayName = "TabsTrigger";
export const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({ className, ...props }, ref) => <TabsPrimitive.Content ref={ref} className={cn("ordo-tabs__content", className)} {...props} />);
TabsContent.displayName = "TabsContent";

export const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => <SeparatorPrimitive.Root ref={ref} className={cn("ordo-separator", className)} orientation={orientation} decorative={decorative} {...props} />);
Separator.displayName = "Separator";

export const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>>(({ className, children, ...props }, ref) => <ScrollAreaPrimitive.Root ref={ref} className={cn("ordo-scroll-area", className)} {...props}><ScrollAreaPrimitive.Viewport className="ordo-scroll-area__viewport">{children}</ScrollAreaPrimitive.Viewport><ScrollAreaPrimitive.Scrollbar className="ordo-scroll-area__bar" orientation="vertical"><ScrollAreaPrimitive.Thumb className="ordo-scroll-area__thumb" /></ScrollAreaPrimitive.Scrollbar><ScrollAreaPrimitive.Corner /></ScrollAreaPrimitive.Root>);
ScrollArea.displayName = "ScrollArea";

export type SkeletonVariant = "text" | "avatar" | "card" | "table-row";
export function Skeleton({ className, variant = "text", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: SkeletonVariant }) { return <div className={cn("ordo-skeleton", `ordo-skeleton--${variant}`, className)} aria-hidden="true" {...props} />; }

export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) { return <div className="ordo-table-wrap" tabIndex={0} aria-label="가로로 스크롤 가능한 표"><table className={cn("ordo-table", className)} {...props} /></div>; }
export const TableHeader = (props: React.HTMLAttributes<HTMLTableSectionElement>) => <thead {...props} />;
export const TableBody = (props: React.HTMLAttributes<HTMLTableSectionElement>) => <tbody {...props} />;
export const TableFooter = (props: React.HTMLAttributes<HTMLTableSectionElement>) => <tfoot {...props} />;
export const TableRow = ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => <tr className={cn("ordo-table__row", className)} {...props} />;
export const TableHead = ({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => <th className={cn("ordo-table__head", className)} {...props} />;
export const TableCell = ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => <td className={cn("ordo-table__cell", className)} {...props} />;
export const TableCaption = ({ className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) => <caption className={cn("ordo-table__caption", className)} {...props} />;

export const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>(({ className, value = 0, ...props }, ref) => <ProgressPrimitive.Root ref={ref} className={cn("ordo-progress", className)} value={value} {...props}><ProgressPrimitive.Indicator className="ordo-progress__indicator" style={{ transform: `translateX(-${100 - (value || 0)}%)` }} /></ProgressPrimitive.Root>);
Progress.displayName = "Progress";
