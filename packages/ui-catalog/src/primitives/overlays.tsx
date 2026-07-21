import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../utils/cn";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>>(({ className, sideOffset = 6, children, ...props }, ref) => (
  <TooltipPrimitive.Portal><TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("ordo-tooltip", className)} {...props}>{children}<TooltipPrimitive.Arrow className="ordo-tooltip__arrow" /></TooltipPrimitive.Content></TooltipPrimitive.Portal>
));
TooltipContent.displayName = "TooltipContent";

export const DropdownMenu = DropdownPrimitive.Root;
export const DropdownMenuTrigger = DropdownPrimitive.Trigger;
export const DropdownMenuCheckboxItem = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.CheckboxItem>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem>>(({ className, children, ...props }, ref) => <DropdownPrimitive.CheckboxItem ref={ref} className={cn("ordo-dropdown__item", className)} {...props}><DropdownPrimitive.ItemIndicator aria-hidden="true">✓</DropdownPrimitive.ItemIndicator>{children}</DropdownPrimitive.CheckboxItem>);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
export const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Item>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> & { destructive?: boolean }>(({ className, destructive, ...props }, ref) => <DropdownPrimitive.Item ref={ref} className={cn("ordo-dropdown__item", destructive && "ordo-dropdown__item--destructive", className)} {...props} />);
DropdownMenuItem.displayName = "DropdownMenuItem";
export const DropdownMenuSeparator = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>>(({ className, ...props }, ref) => <DropdownPrimitive.Separator ref={ref} className={cn("ordo-dropdown__separator", className)} {...props} />);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
export const DropdownMenuContent = React.forwardRef<React.ElementRef<typeof DropdownPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>>(({ className, sideOffset = 6, ...props }, ref) => <DropdownPrimitive.Portal><DropdownPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("ordo-dropdown__content", className)} {...props} /></DropdownPrimitive.Portal>);
DropdownMenuContent.displayName = "DropdownMenuContent";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => <DialogPrimitive.Title ref={ref} className={cn("ordo-sheet__title", className)} {...props} />);
SheetTitle.displayName = "SheetTitle";
export const SheetDescription = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => <DialogPrimitive.Description ref={ref} className={cn("ordo-sheet__description", className)} {...props} />);
SheetDescription.displayName = "SheetDescription";
export const SheetContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { side?: "left" | "right" }>(({ className, side = "right", children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="ordo-sheet__overlay" />
    <DialogPrimitive.Content ref={ref} className={cn("ordo-sheet__content", `ordo-sheet__content--${side}`, className)} {...props}>
      {children}<DialogPrimitive.Close className="ordo-sheet__close" aria-label="패널 닫기">×</DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
SheetContent.displayName = "SheetContent";
