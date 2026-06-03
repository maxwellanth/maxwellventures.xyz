import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-warm-gold/35 bg-evergreen text-pale-stone">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 text-sm sm:px-8 lg:px-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-warm-gold/60 bg-white">
              <Image
                alt=""
                className="h-14 w-14 object-contain"
                height={56}
                src="/brand/logo-mark.webp"
                unoptimized
                width={56}
              />
            </span>
            <div>
            <p className="font-display text-2xl font-semibold text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xl leading-6 text-soft-gray-green">
              {siteConfig.description}
            </p>
            </div>
          </div>
          <p className="text-warm-gold">{siteConfig.domain}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-soft-gray-green">
          {siteConfig.footerNav.map((item) => (
            <Link className="hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
