import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { Section, PageHeader } from "@/components/ui/section";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, AI systems, digital cleanup, audits, content systems, and practical automation for local businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        intro="Practical help for local businesses that need cleaner systems, stronger websites, safer accounts, and useful automation."
      />
      <Section>
        <ResponsiveGrid>
          {services.map((service) => (
            <Card key={service.title} title={service.title}>
              {service.description}
            </Card>
          ))}
        </ResponsiveGrid>
      </Section>
    </>
  );
}
