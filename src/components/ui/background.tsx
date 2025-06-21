"use client";

import { cn } from "../../lib/utils";

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Background({ className, ...props }: BackgroundProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-50 h-full w-full bg-background dark:bg-black",
        "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]",
        "before:absolute before:inset-0 before:bg-gradient-to-b before:from-background/50 before:to-background dark:before:from-black/50 dark:before:to-black",
        className
      )}
      {...props}
    />
  );
} 