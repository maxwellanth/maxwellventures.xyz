import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-soft-gray-green/70 bg-pale-stone/96 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link className="flex items-center gap-3 text-evergreen" href="/">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-warm-gold/60 bg-white">
            <Image
              alt=""
              className="h-11 w-11 object-contain"
              height={44}
              src="/brand/logo-mark.webp"
              unoptimized
              width={44}
            />
          </span>
          <span className="font-display text-xl font-semibold leading-none tracking-wide">
            {siteConfig.name}
          </span>
        </Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-forest-green">
            {siteConfig.mainNav.map((item) => (
              <Link
                className="transition hover:text-evergreen"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink className="w-full sm:w-auto" href="/contact" size="sm">
            Contact
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
