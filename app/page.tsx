import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { Section } from "@/components/ui/section";
import { auditSteps, services, siteConfig } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-evergreen text-pale-stone">
        <div className="mx-auto grid min-h-[82vh] w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10 lg:py-20">
          <div className="relative z-10 min-w-0 max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-sage-mist">
              Maxwell Ventures
            </p>
            <h1 className="max-w-[12ch] break-words font-display text-4xl font-semibold leading-tight text-white sm:max-w-none sm:text-5xl lg:text-6xl">
              Heritage calm for modern business systems.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-soft-gray-green sm:text-lg">
              {siteConfig.description} Built for founders, local teams, and
              community organizations that need cleaner digital infrastructure
              without hype.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/local-business-audit">Request an audit</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View services
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -left-8 top-8 hidden h-64 w-64 border border-warm-gold/25 lg:block" />
            <div className="relative overflow-hidden rounded-md border border-warm-gold/45 bg-pale-stone p-4 shadow-2xl shadow-black/25">
              <Image
                alt="Maxwell Ventures team"
                className="aspect-[4/3] w-full object-contain"
                height={900}
                priority
                src="/images/team/team-group.webp"
                unoptimized
                width={900}
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["AI systems", "Websites", "Operations"].map((item) => (
                <div
                  className="border border-sage-mist/35 bg-forest-green/55 px-4 py-3 text-sm font-semibold text-soft-gray-green"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Core services"
        intro="A practical service model for the systems that make a local business easier to find, run, and maintain."
      >
        <ResponsiveGrid>
          {services.slice(0, 6).map((service) => (
            <Card key={service.title} title={service.title}>
              {service.description}
            </Card>
          ))}
        </ResponsiveGrid>
      </Section>

      <Section
        tone="evergreen"
        title="Start with the operating reality"
        intro="The first engagement is a focused review, then a scoped implementation path with honest recommendations, practical boundaries, and no unnecessary complexity."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {auditSteps.map((item, index) => (
            <div
              className="rounded-md border border-sage-mist/35 bg-white/8 p-5"
              key={item}
            >
              <p className="text-sm font-semibold text-warm-gold">
                Step {index + 1}
              </p>
              <p className="mt-3 text-sm leading-7 text-soft-gray-green">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="A calm public foundation"
        intro="The site reflects the Maxwell Ventures standard: clear language, practical service paths, real team visuals, and a restrained visual system."
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded-md border border-soft-gray-green bg-white p-6">
            <Image
              alt="Maxwell Ventures crest logo"
              className="mx-auto max-h-80 w-full object-contain"
              height={900}
              src="/brand/logo-primary.webp"
              unoptimized
              width={900}
            />
          </div>
          <div className="space-y-4 text-base leading-8 text-forest-green">
            <p>
              The public presence should make it easy for a business owner to
              understand what Maxwell Ventures reviews, what can be improved,
              and why the first step is usually a focused audit.
            </p>
            <p>
              The work stays practical: start with the visible friction, choose
              a useful implementation path, and keep human review in the loop
              for AI-assisted systems.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
