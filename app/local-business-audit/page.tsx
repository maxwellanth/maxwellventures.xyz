import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { PageHeader, Section } from "@/components/ui/section";
import { auditSteps } from "@/content/site";

export const metadata: Metadata = {
  title: "Local Business Audit",
  description:
    "A focused review of website, tools, customer communication, and digital operations for local businesses.",
};

const auditAreas = [
  "Website structure, mobile usability, and launch blockers",
  "Customer communication paths and follow-up gaps",
  "Files, tools, automations, and recurring manual work",
  "Content systems for campaigns, updates, and local search",
  "Practical AI opportunities that fit the business",
  "Immediate cleanup tasks and next-step priorities",
];

export default function LocalBusinessAuditPage() {
  return (
    <>
      <PageHeader
        title="Local Business Audit"
        intro="A focused first pass for finding high-leverage digital improvements without turning the work into a vague transformation project."
      >
        <ButtonLink href="/contact">Start an inquiry</ButtonLink>
      </PageHeader>
      <Section title="Audit sequence" intro="A straightforward path from current-state review to practical next actions.">
        <div className="grid gap-4 md:grid-cols-3">
          {auditSteps.map((step, index) => (
            <Card key={step} title={`Step ${index + 1}`}>
              {step}
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Audit focus areas">
        <ResponsiveGrid>
          {auditAreas.map((area) => (
            <Card key={area}>{area}</Card>
          ))}
        </ResponsiveGrid>
      </Section>
    </>
  );
}
