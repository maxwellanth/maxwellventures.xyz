import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { Section, PageHeader } from "@/components/ui/section";
import { services } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Practical consulting for websites, local visibility, AI-assisted operations, content systems, and digital cleanup.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        intro="Practical consulting for businesses that need clearer websites, cleaner systems, safer accounts, and useful AI-assisted workflows."
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
      <Section
        tone="evergreen"
        title="How service work starts"
        intro="Most engagements begin with a focused audit so the first implementation path is based on the actual website, tools, files, customer communication, and maintenance needs."
      />
    </>
  );
}
