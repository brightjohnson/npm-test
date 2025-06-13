"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "../lib/utils";

const LabelContainer = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    ref={ref}
    {...props}
  />
));
LabelContainer.displayName = LabelPrimitive.Root.displayName;

const Label = (
  props: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
) => <LabelContainer {...props} />;

export default Label;
