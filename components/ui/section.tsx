import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  intro,
  title,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  intro?: string;
  title?: string;
  tone?: "light" | "evergreen";
}) {
  return (
    <section
      className={cn(
        "px-6 py-16 sm:px-8 lg:px-10",
        tone === "evergreen"
          ? "bg-evergreen text-pale-stone"
          : "bg-pale-stone text-evergreen",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        {title || intro ? (
          <div className="mb-8 max-w-3xl">
            {title ? (
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p
                className={cn(
                  "mt-4 text-base leading-8",
                  tone === "evergreen" ? "text-soft-gray-green" : "text-forest-green",
                )}
              >
                {intro}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function PageHeader({
  children,
  intro,
  title,
}: {
  children?: ReactNode;
  intro: string;
  title: string;
}) {
  return (
    <header className="bg-evergreen px-6 py-16 text-pale-stone sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-8 text-soft-gray-green sm:text-lg">
            {intro}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </header>
  );
}
