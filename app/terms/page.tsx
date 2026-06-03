import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service foundation for Maxwell Ventures.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        intro="Terms draft for review before launch."
      />
      <Section>
        <div className="max-w-3xl space-y-6 text-base leading-8 text-forest-green">
          <p>
            Website content is provided for general information about Maxwell
            Ventures services. Specific service agreements, scopes, timelines,
            and payment terms should be documented separately for each client.
          </p>
          <p>
            The final terms should be updated with approved business contact
            information, jurisdiction, service limitations, and any required
            legal language before publication.
          </p>
        </div>
      </Section>
    </>
  );
}
