import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-soft-gray-green/70 bg-pale-stone/96 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-2 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link className="flex items-center gap-3 text-evergreen" href="/">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-warm-gold/60 bg-white sm:h-12 sm:w-12">
            <Image
              alt=""
              className="h-9 w-9 object-contain sm:h-11 sm:w-11"
              height={44}
              src="/brand/logo-mark.webp"
              unoptimized
              width={44}
            />
          </span>
          <span className="font-display text-lg font-semibold leading-none tracking-wide sm:text-xl">
            {siteConfig.name}
          </span>
        </Link>
        <div className="flex items-center justify-between gap-3 lg:justify-end">
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-forest-green sm:gap-x-5">
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
          <ButtonLink className="shrink-0 px-3 sm:px-4" href="/contact" size="sm">
            Contact
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
