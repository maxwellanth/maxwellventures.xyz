import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Maxwell Ventures helps local businesses improve websites, AI systems, and digital operations.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Maxwell Ventures"
        intro="Maxwell Ventures helps local businesses, founders, and community organizations build useful digital systems that make everyday operations easier to manage."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-3xl space-y-6 text-base leading-8 text-forest-green">
          <p>
            The work centers on websites, AI systems, digital cleanup, business
            tech audits, content systems, customer communication systems,
            practical automation, and ongoing digital operations.
          </p>
          <p>
            Draft 2 uses the approved Maxwell Ventures crest and team visuals.
            Final biographies, contact routing, and legal details should still
            be reviewed before launch.
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
