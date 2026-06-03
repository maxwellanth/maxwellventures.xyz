import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHeader, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Maxwell Ventures for a website, AI, or digital operations inquiry.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        intro="Start a conversation about websites, AI systems, audits, cleanup, or ongoing digital operations. Final contact routing is pending approval."
      />
      <Section>
        <ContactForm />
      </Section>
    </>
  );
}
