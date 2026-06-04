import Image from "next/image";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { PageHeader, Section } from "@/components/ui/section";
import { teamMembers } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Team",
  description:
    "Meet the Maxwell Ventures team supporting practical AI operations, website clarity, and digital systems work.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Team"
        intro="Maxwell Ventures is a small, hands-on studio built around practical judgment, careful communication, and long-term stewardship."
      />
      <Section>
        <ResponsiveGrid columns="3">
          {teamMembers.map((member) => (
            <Card className="overflow-hidden p-0" key={member.name}>
              <Image
                alt={member.name}
                className="aspect-square w-full bg-white object-cover"
                height={900}
                loading="eager"
                src={member.image}
                unoptimized
                width={900}
              />
              <div className="p-5">
                <h2 className="font-display text-xl font-semibold text-evergreen">
                  {member.name}
                </h2>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-bronze">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-forest-green">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </ResponsiveGrid>
      </Section>
      <Section
        tone="evergreen"
        title="How the studio works"
        intro="The team keeps recommendations grounded in real business context, plain language, and implementation paths a client can understand."
      />
    </>
  );
}
