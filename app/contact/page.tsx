import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHeader, Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Maxwell Ventures about a website, practical AI, local business audit, cleanup, or digital operations inquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        intro="Share the situation, the website if there is one, and what needs to feel more organized. Maxwell Ventures can review whether an audit, cleanup, or implementation path is the right first step."
      />
      <Section>
        <ContactForm />
      </Section>
    </>
  );
}
