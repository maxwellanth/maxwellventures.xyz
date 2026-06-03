import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy foundation for Maxwell Ventures.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        intro="Privacy policy draft for review before launch."
      />
      <Section>
        <div className="max-w-3xl space-y-6 text-base leading-8 text-forest-green">
          <p>
            Maxwell Ventures will collect only the information needed to respond
            to inquiries, deliver requested services, and maintain business
            records.
          </p>
          <p>
            The final policy should be updated with confirmed contact methods,
            analytics tools, form providers, data retention practices, and any
            third-party systems used on the launched website.
          </p>
          <p>
            Contact details are pending final approval and should be added only
            after they are confirmed for public use.
          </p>
        </div>
      </Section>
    </>
  );
}
