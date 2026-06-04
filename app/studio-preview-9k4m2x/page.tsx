import type { Metadata } from "next";
import { NightlyHomepagePreview } from "@/components/nightly-homepage-preview";

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
      <section className="border-b border-warm-gold/35 bg-forest-green px-6 py-3 text-pale-stone sm:px-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 text-sm leading-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-white">Private review preview</p>
          <p className="text-soft-gray-green">
            Not linked, not indexed, and not approved as the public homepage.
          </p>
        </div>
      </section>
      <NightlyHomepagePreview />
    </>
  );
}
