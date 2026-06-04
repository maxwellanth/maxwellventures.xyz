import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "General website terms for Maxwell Ventures services and public site use.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        intro="These terms describe general use of the Maxwell Ventures website."
      />
      <Section>
        <div className="max-w-3xl space-y-8 text-base leading-8 text-forest-green">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-bronze">
            Last updated: June 3, 2026
          </p>
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-evergreen">
              Website Information
            </h2>
            <p>
              This website provides general information about Maxwell Ventures
              services. It does not create a client relationship, guarantee a
              business outcome, or replace a written scope of work.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-evergreen">
              Services and Engagements
            </h2>
            <p>
              Specific services, deliverables, timelines, fees,
              confidentiality terms, intellectual property terms, and
              responsibilities should be documented separately for each
              engagement. If a service agreement conflicts with these website
              terms, the service agreement controls that project.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-evergreen">
              No Guaranteed Outcomes
            </h2>
            <p>
              Maxwell Ventures may provide strategy, website, AI workflow,
              digital operations, privacy, security, and cleanup support, but
              public website content does not guarantee search rankings,
              revenue, security, compliance, or any specific result.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-evergreen">
              Acceptable Use
            </h2>
            <p>
              Visitors should not misuse the website, attempt to disrupt it,
              submit unlawful or harmful material, or use Maxwell Ventures
              materials in a misleading way.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-evergreen">
              Project Materials
            </h2>
            <p>
              Client materials, private business information, AI-assisted work,
              and implementation details should be handled under the relevant
              project agreement or written scope.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
