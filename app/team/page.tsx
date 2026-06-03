import Image from "next/image";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { PageHeader, Section } from "@/components/ui/section";
import { teamMembers } from "@/content/site";

export const metadata: Metadata = {
  title: "Team",
  description: "The Maxwell Ventures team page foundation.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Team"
        intro="Approved team visuals are now in place. Final biographies and role details are pending approval before launch."
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
                <p className="mt-3 text-sm leading-7 text-forest-green">
                  {member.status}
                </p>
              </div>
            </Card>
          ))}
        </ResponsiveGrid>
      </Section>
      <Section tone="evergreen" title="Launch note" intro="No fake roles, credentials, testimonials, or client proof have been added. Team copy remains intentionally conservative until final details are approved.">
        <div className="rounded-md border border-sage-mist/35 bg-white/8 p-5 text-sm leading-7 text-soft-gray-green">
          Contact details and individual bios are pending final approval.
        </div>
      </Section>
    </>
  );
}
