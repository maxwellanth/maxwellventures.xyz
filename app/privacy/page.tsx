import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy notice for the Maxwell Ventures website and inquiry process.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        intro="This notice explains how Maxwell Ventures handles information submitted through the website."
      />
      <Section>
        <div className="max-w-3xl space-y-8 text-base leading-8 text-forest-green">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-bronze">
            Last updated: June 3, 2026
          </p>
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-evergreen">
              Information Collected
            </h2>
            <p>
              Maxwell Ventures collects information a visitor chooses to
              provide, such as name, email address, business context, website
              links, and project notes submitted through an inquiry form or an
              approved contact method.
            </p>
            <p>
              The website may also receive ordinary technical information from
              browsers and hosting systems, such as device, log, and security
              data needed to operate the site.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-evergreen">
              How Information Is Used
            </h2>
            <p>
              Information is used to respond to inquiries, evaluate fit, provide
              requested services, maintain business records, protect the site,
              and improve Maxwell Ventures operations.
            </p>
            <p>
              Private inquiry details are not published as public proof,
              testimonials, case studies, or client materials without approval.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-evergreen">
              Service Providers
            </h2>
            <p>
              Maxwell Ventures may use service providers for hosting, website
              delivery, inquiry routing, email, documents, scheduling, analytics
              if added, and other business operations. Those providers may
              process information only as needed to support those services.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-evergreen">
              Retention and Requests
            </h2>
            <p>
              Information is kept only as long as needed for the business
              purposes described here, unless a longer period is required for
              legal, security, accounting, or legitimate recordkeeping reasons.
            </p>
            <p>
              Visitors may ask Maxwell Ventures to review, correct, or delete
              information they provided, subject to reasonable verification and
              lawful recordkeeping needs.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-evergreen">
              Security and Project Agreements
            </h2>
            <p>
              Maxwell Ventures takes reasonable steps to protect submitted
              information, but no website or online transmission can be
              guaranteed secure. Service-specific agreements or statements of
              work control the handling of client project materials.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
