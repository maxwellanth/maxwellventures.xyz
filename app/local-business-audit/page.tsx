import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { PageHeader, Section } from "@/components/ui/section";
import { auditDeliverables, auditReviewAreas, auditSteps } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Local Business Audit",
  description:
    "A human-reviewed first step for improving a business website, tools, inquiry paths, and digital operations.",
  path: "/local-business-audit",
});

export default function LocalBusinessAuditPage() {
  return (
    <>
      <PageHeader
        title="Local Business Audit"
        intro="A focused first step for businesses that know their digital operation needs attention but do not yet need a full rebuild."
      >
        <ButtonLink href="/contact">Request an audit</ButtonLink>
      </PageHeader>
      <Section
        title="How the audit works"
        intro="This is a human-reviewed business and website review, not an automated scan or a guaranteed ranking report."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {auditSteps.map((step, index) => (
            <Card key={step} title={`Step ${index + 1}`}>
              {step}
            </Card>
          ))}
        </div>
      </Section>
      <Section
        title="What the audit reviews"
        intro="The review looks across the public website and the operational details behind it so recommendations stay practical."
      >
        <ResponsiveGrid>
          {auditReviewAreas.map((area) => (
            <Card key={area}>{area}</Card>
          ))}
        </ResponsiveGrid>
      </Section>
      <Section
        tone="evergreen"
        title="What the client receives"
        intro="The output is a clear priority map, not a vague transformation deck."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {auditDeliverables.map((item) => (
            <div
              className="rounded-md border border-sage-mist/35 bg-white/8 p-5 text-sm leading-7 text-soft-gray-green"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/contact">Start with an audit inquiry</ButtonLink>
        </div>
      </Section>
    </>
  );
}
