import type { Metadata } from "next";
import { StudioNextPreview } from "@/components/studio-next-preview";

export const metadata: Metadata = {
  title: "Private Review Preview",
  description:
    "Unlisted Maxwell Ventures website preview for owner review before production promotion.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function StudioPreviewPage() {
  return (
    <>
      <section className="border-b border-warm-gold/35 bg-forest-green px-5 py-2.5 text-pale-stone sm:px-8 sm:py-3 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 text-xs leading-5 sm:text-sm sm:leading-6">
          <p className="font-semibold text-white">Private review preview</p>
          <p className="text-right text-soft-gray-green">
            <span className="sm:hidden">Unlisted and not public.</span>
            <span className="hidden sm:inline">
            Not linked, not indexed, and not approved as the public homepage.
            </span>
          </p>
        </div>
      </section>
      <StudioNextPreview />
    </>
  );
}
