import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-md border border-soft-gray-green/80 bg-white p-5 shadow-sm",
        className,
      )}
    >
      {title ? (
        <h3 className="font-display text-xl font-semibold leading-snug text-evergreen">
          {title}
        </h3>
      ) : null}
      <div className={cn("text-sm leading-7 text-forest-green", title && "mt-3")}>
        {children}
      </div>
    </article>
  );
}
