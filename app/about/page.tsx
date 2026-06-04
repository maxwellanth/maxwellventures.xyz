import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Learn how Maxwell Ventures helps businesses bring order to websites, practical AI workflows, customer communication, and digital operations.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Maxwell Ventures"
        intro="Maxwell Ventures is a Pacific Northwest-influenced consulting studio helping businesses bring order to websites, practical AI workflows, customer communication, and digital operations."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-3xl space-y-6 text-base leading-8 text-forest-green">
          <p>
            The work centers on the places where strategy meets daily
            execution: the public website, the tools behind it, the content
            that needs to stay current, and the operational details that make a
            business easier to run.
          </p>
          <p>
            The approach is calm, practical, and human-reviewed. Maxwell
            Ventures helps turn scattered digital work into clear systems that
            can be understood, maintained, and improved over time.
          </p>
        </div>
        <div className="rounded-md border border-warm-gold/50 bg-white p-5">
          <Image
            alt="Maxwell Ventures team"
            className="aspect-[4/3] w-full object-contain"
            height={900}
            src="/images/team/team-group.webp"
            unoptimized
            width={900}
          />
        </div>
        </div>
      </Section>
    </>
  );
}
