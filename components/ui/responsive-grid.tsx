import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ResponsiveGrid({
  children,
  className,
  columns = "auto",
}: {
  children: ReactNode;
  className?: string;
  columns?: "auto" | "3";
}) {
  return (
    <div
      className={cn(
        "grid gap-4",
        columns === "3"
          ? "md:grid-cols-3"
          : "sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
