"use client";

import Image, { getImageProps } from "next/image";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { auditDeliverables, auditReviewAreas, services, teamMembers } from "@/content/site";
import { cn } from "@/lib/utils";

const previewAssets = {
  heroDesktop: "/images/studio-preview-next/next-hero-coast-compass.webp",
  heroMobile: "/images/studio-preview-next/next-mobile-hero-coast.webp",
  drafting: "/images/studio-preview-next/next-drafting-service-field.webp",
  audit: "/images/studio-preview-next/next-audit-cockpit-map.webp",
  auditMobile: "/images/studio-preview-next/next-mobile-audit-map.webp",
  systemMobile: "/images/studio-preview-next/next-mobile-system-card.webp",
  team: "/images/studio-preview-next/next-team-atelier.webp",
  route: "/images/studio-preview-next/next-process-route-map.webp",
  contact: "/images/studio-preview-next/next-contact-lighthouse.webp",
};

const serviceDeck = [
  {
    shortTitle: "AI operations",
    serviceTitle: "AI business systems",
    imageLabel: "Human-reviewed workflow",
    accent: "bg-[#b84e3d]",
  },
  {
    shortTitle: "Web presence",
    serviceTitle: "Websites & SEO",
    imageLabel: "Clear public surface",
    accent: "bg-warm-gold",
  },
  {
    shortTitle: "Cleanup",
    serviceTitle: "Operations cleanup",
    imageLabel: "Order from sprawl",
    accent: "bg-[#5f8790]",
  },
  {
    shortTitle: "Audit",
    serviceTitle: "Business audits",
    imageLabel: "Practical first map",
    accent: "bg-muted-bronze",
  },
];

const auditTabs = [
  {
    label: "Signal",
    title: "What can a visitor understand before they contact you?",
    body: "Page structure, mobile clarity, service copy, metadata, and the practical path from interest to inquiry.",
    detail: auditReviewAreas[0],
  },
  {
    label: "Flow",
    title: "Where does daily work slow down?",
    body: "Files, tools, handoffs, repeated drafting, follow-up steps, and the operating details that create drag.",
    detail: auditReviewAreas[3],
  },
  {
    label: "Trust",
    title: "What needs tighter ownership?",
    body: "Account hygiene, permissions, contact paths, human review points, and calmer ways to handle sensitive work.",
    detail: auditReviewAreas[5],
  },
  {
    label: "Launch",
    title: "What should happen first?",
    body: "A plain-language priority path with clear next actions and boundaries for what should wait.",
    detail: auditDeliverables[2],
  },
];

const processSteps = [
  {
    title: "Survey",
    body: "Review the current site, tools, files, and inquiry path.",
  },
  {
    title: "Map",
    body: "Separate urgent friction from work that can wait.",
  },
  {
    title: "Shape",
    body: "Turn the first path into pages, workflows, or cleanup tasks.",
  },
  {
    title: "Build",
    body: "Implement with human review and practical handoff.",
  },
  {
    title: "Steward",
    body: "Keep the system understandable after launch.",
  },
];

const studioNotes = [
  "Custom visual language",
  "Pacific Northwest atmosphere",
  "Mobile-first review route",
];

const {
  props: { srcSet: heroDesktopSrcSet },
} = getImageProps({
  alt: "Maxwell Ventures coastal compass brand world",
  fetchPriority: "high",
  height: 1100,
  loading: "eager",
  quality: 75,
  sizes: "100vw",
  src: previewAssets.heroDesktop,
  width: 1600,
});

const {
  props: { srcSet: heroMobileSrcSet, ...heroImageProps },
} = getImageProps({
  alt: "Maxwell Ventures coastal compass brand world",
  fetchPriority: "high",
  height: 1400,
  loading: "eager",
  quality: 75,
  sizes: "100vw",
  src: previewAssets.heroMobile,
  width: 790,
});

function serviceFor(title: string) {
  return services.find((service) => service.title === title) || services[0];
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 64 64"
    >
      <circle cx="32" cy="32" r="25" stroke="currentColor" strokeWidth="2" />
      <path
        d="M39.8 18.3 34.7 36 18.9 45.6 28.2 28z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M32 9v8M32 47v8M9 32h8M47 32h8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function RouteIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 64 64"
    >
      <path
        d="M16 48c8-20 25 2 32-26"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <circle cx="15" cy="49" fill="currentColor" r="5" />
      <circle cx="49" cy="20" fill="currentColor" r="5" />
      <path d="M20 19h15M20 27h9" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

function DraftIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 64 64"
    >
      <path d="M14 50h36M18 14h28v28H18z" stroke="currentColor" strokeWidth="3" />
      <path d="M18 29h28M32 14v28M22 47l7-7M42 47l-7-7" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function StudioNextPreview() {
  const [activeService, setActiveService] = useState(serviceDeck[0].serviceTitle);
  const [activeAudit, setActiveAudit] = useState(auditTabs[0].label);

  const selectedService = useMemo(() => serviceFor(activeService), [activeService]);
  const selectedAudit = useMemo(
    () => auditTabs.find((tab) => tab.label === activeAudit) || auditTabs[0],
    [activeAudit],
  );

  return (
    <main className="bg-[#111713] text-pale-stone">
      <section className="relative isolate overflow-hidden">
        <picture className="absolute inset-0 -z-30 block">
          <source media="(min-width: 768px)" srcSet={heroDesktopSrcSet} />
          <source media="(max-width: 767px)" srcSet={heroMobileSrcSet} />
          <img
            {...heroImageProps}
            alt="Maxwell Ventures coastal compass brand world"
            className="h-full w-full object-cover"
          />
        </picture>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,18,14,0.46)_0%,rgba(10,18,14,0.78)_48%,rgba(10,18,14,0.98)_100%)] md:bg-[linear-gradient(90deg,rgba(10,18,14,0.95)_0%,rgba(10,18,14,0.78)_42%,rgba(10,18,14,0.2)_76%,rgba(10,18,14,0.7)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#111713] to-transparent"
        />

        <div className="mx-auto flex min-h-[92svh] w-full max-w-7xl flex-col justify-between px-5 pb-8 pt-10 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-warm-gold/35 pb-4">
            <div className="flex items-center gap-3 text-sm font-semibold text-warm-gold">
              <CompassIcon className="h-7 w-7" />
              <span>Private demo slot</span>
            </div>
            <span className="rounded-full border border-pale-stone/25 bg-pale-stone/10 px-4 py-2 text-sm text-[#dce4d8] backdrop-blur">
              Owner review only
            </span>
          </div>

          <div className="grid gap-9 py-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold text-[#f1d59c]">
                Pacific Northwest systems studio
              </p>
              <h1 className="font-display text-[3.15rem] font-semibold leading-[0.92] text-white sm:text-[5rem] md:text-[6.2rem] lg:text-[7.2rem]">
                Maxwell Ventures
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#e2e5d8] sm:text-xl sm:leading-9">
                A fuller visual direction for practical AI operations,
                websites, audits, and digital cleanup: coastal atmosphere,
                brass mapwork, real team presence, and grounded execution.
              </p>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <ButtonLink className="w-full sm:w-auto" href="#studio-services">
                  Explore the work
                </ButtonLink>
                <ButtonLink className="w-full sm:w-auto" href="#studio-contact" variant="secondary">
                  Start with an audit
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3 lg:self-end">
              {studioNotes.map((note, index) => (
                <div
                  className={cn(
                    "min-h-28 border border-pale-stone/18 bg-[#16231d]/72 p-4 shadow-2xl shadow-black/20 backdrop-blur",
                    index === 1 && "bg-[#243425]/76",
                    index === 2 && "bg-[#28312f]/76",
                  )}
                  key={note}
                >
                  <div className="mb-4 h-1 w-10 bg-warm-gold" />
                  <p className="text-base font-semibold leading-6 text-white">{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-3">
              {serviceDeck.map((item) => (
                <a
                  className="inline-flex min-h-12 items-center gap-3 border border-warm-gold/35 bg-[#111713]/75 px-4 text-sm font-semibold text-pale-stone backdrop-blur transition hover:border-pale-stone/50"
                  href="#studio-services"
                  key={item.serviceTitle}
                >
                  <span className={cn("h-2.5 w-2.5 rounded-full", item.accent)} />
                  {item.shortTitle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#111713] px-5 py-14 sm:px-8 lg:px-10"
        id="studio-services"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="text-sm font-semibold text-warm-gold">The work, made visible</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                A service page that feels built, not templated.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#cfd6c9]">
                The preview keeps the offer honest while giving each service a
                tangible scene: drafting table, route markers, review notes,
                and a visual field that feels specific to Maxwell Ventures.
              </p>
            </div>

            <div className="grid gap-3">
              {serviceDeck.map((item) => {
                const service = serviceFor(item.serviceTitle);
                const isActive = activeService === item.serviceTitle;

                return (
                  <button
                    className={cn(
                      "group flex min-h-20 w-full items-center justify-between gap-4 border px-4 py-4 text-left transition",
                      isActive
                        ? "border-warm-gold bg-pale-stone text-evergreen shadow-xl shadow-black/20"
                        : "border-pale-stone/15 bg-[#17211c] text-pale-stone hover:border-warm-gold/55",
                    )}
                    key={item.serviceTitle}
                    onClick={() => setActiveService(item.serviceTitle)}
                    type="button"
                  >
                    <span>
                      <span className="block text-base font-semibold">{item.shortTitle}</span>
                      <span
                        className={cn(
                          "mt-1 block text-sm leading-6",
                          isActive ? "text-forest-green" : "text-[#bfc8bb]",
                        )}
                      >
                        {service.title}
                      </span>
                    </span>
                    <span className={cn("h-3 w-3 rounded-full", item.accent)} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[36rem] overflow-hidden border border-warm-gold/35 bg-[#1b241f] shadow-2xl shadow-black/30">
            <Image
              alt="Maxwell Ventures drafting table service field"
              className="absolute inset-0 h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              src={previewAssets.drafting}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,19,15,0.12)_0%,rgba(12,19,15,0.42)_48%,rgba(12,19,15,0.92)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="max-w-2xl border border-pale-stone/20 bg-[#101711]/78 p-5 backdrop-blur-md sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <DraftIcon className="h-8 w-8 text-warm-gold" />
                  <p className="text-sm font-semibold text-warm-gold">
                    {serviceDeck.find((item) => item.serviceTitle === activeService)?.imageLabel}
                  </p>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {selectedService.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-[#e3e7dc]">
                  {selectedService.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ece8dc] px-5 py-14 text-evergreen sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden border border-[#d0bd95] bg-[#151c18] shadow-2xl shadow-[#796945]/20">
            <picture>
              <source media="(max-width: 767px)" srcSet={previewAssets.auditMobile} />
              <Image
                alt="Maxwell Ventures audit cockpit map"
                className="aspect-[4/5] w-full object-cover md:aspect-[16/11]"
                height={1150}
                sizes="(min-width: 1024px) 54vw, 100vw"
                src={previewAssets.audit}
                width={1600}
              />
            </picture>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101711]/90 to-transparent p-5 md:hidden">
              <p className="text-base font-semibold text-white">Audit cockpit</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted-bronze">Audit cockpit</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-evergreen sm:text-5xl">
              The first engagement becomes a map of what matters.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#36473d]">
              The audit should feel like a calm control room, not a generic
              checklist. Visitors can see how Maxwell Ventures thinks before
              they decide whether to start.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {auditTabs.map((tab) => {
                const isActive = selectedAudit.label === tab.label;

                return (
                  <button
                    className={cn(
                      "min-h-12 border px-3 text-sm font-semibold transition",
                      isActive
                        ? "border-evergreen bg-evergreen text-pale-stone"
                        : "border-[#c8b890] bg-white/45 text-evergreen hover:border-muted-bronze",
                    )}
                    key={tab.label}
                    onClick={() => setActiveAudit(tab.label)}
                    type="button"
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 border border-[#c8b890] bg-[#fbf7ec] p-5 shadow-xl shadow-[#a08d6b]/15 sm:p-6">
              <p className="text-sm font-semibold text-muted-bronze">{selectedAudit.detail}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-evergreen">
                {selectedAudit.title}
              </h3>
              <p className="mt-3 text-base leading-8 text-[#3c4b42]">{selectedAudit.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#17231e] px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold text-warm-gold">Mobile world</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                The phone view gets its own sense of depth.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#cfd6c9]">
                The demo uses separate mobile compositions so the smallest
                screen still carries the coastline, the system card, and the
                working-map energy of the desktop preview.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
              <div className="overflow-hidden border border-warm-gold/35 bg-[#0f1713] p-3 shadow-2xl shadow-black/30">
                <Image
                  alt="Maxwell Ventures mobile coastline preview"
                  className="aspect-[9/16] w-full object-cover"
                  height={1400}
                  sizes="(min-width: 768px) 28vw, 80vw"
                  src={previewAssets.heroMobile}
                  width={790}
                />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden border border-pale-stone/15 bg-[#0f1713] p-3">
                  <Image
                    alt="Maxwell Ventures mobile system card"
                    className="aspect-[4/3] w-full object-cover"
                    height={900}
                    sizes="(min-width: 768px) 36vw, 100vw"
                    src={previewAssets.systemMobile}
                    width={1200}
                  />
                </div>
                <div className="border border-pale-stone/15 bg-[#22342c] p-5">
                  <RouteIcon className="mb-4 h-9 w-9 text-warm-gold" />
                  <h3 className="font-display text-2xl font-semibold text-white">
                    Smaller screen, same brand gravity.
                  </h3>
                  <p className="mt-3 text-base leading-8 text-[#d7ddd2]">
                    Thumb-sized controls, shorter reading widths, fixed image
                    ratios, and horizontal service cues keep the demo polished
                    without flattening the art.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pale-stone px-5 py-14 text-evergreen sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-muted-bronze">The studio</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Real team presence, treated like part of the brand world.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#3c4b42]">
              The page should feel human without becoming casual. The team
              section keeps the roles practical and uses the atelier scene to
              connect the people, craft, and systems work.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  className="min-h-36 border border-[#cfbd94] bg-[#fbf7ec] p-4 shadow-lg shadow-[#9d8c6b]/10"
                  key={member.name}
                >
                  <p className="font-display text-xl font-semibold leading-7 text-evergreen">
                    {member.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#536459]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border border-[#d0bd95] bg-[#111713] p-3 shadow-2xl shadow-[#8d7d60]/25">
            <Image
              alt="Maxwell Ventures team atelier scene"
              className="aspect-[4/5] w-full object-cover"
              height={1400}
              sizes="(min-width: 1024px) 40vw, 100vw"
              src={previewAssets.team}
              width={1120}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#111713] px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-warm-gold">Route of work</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                A process that feels like navigation, not bureaucracy.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#cfd6c9]">
                This preview turns the process into a route map: every step
                stays plain, visible, and connected to the next decision.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
              <div className="overflow-hidden border border-warm-gold/35 bg-[#1a241f] p-3">
                <Image
                  alt="Maxwell Ventures process route map"
                  className="aspect-[16/10] w-full object-cover"
                  height={1000}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  src={previewAssets.route}
                  width={1600}
                />
              </div>
              <div className="grid gap-3">
                {processSteps.map((step, index) => (
                  <div
                    className="grid min-h-24 grid-cols-[2.5rem_1fr] gap-3 border border-pale-stone/15 bg-[#19251f] p-4"
                    key={step.title}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-gold text-sm font-bold text-evergreen">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-display text-xl font-semibold text-white">
                        {step.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[#cbd4c7]">
                        {step.body}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden px-5 py-16 text-pale-stone sm:px-8 lg:px-10"
        id="studio-contact"
      >
        <Image
          alt="Maxwell Ventures lighthouse contact scene"
          className="absolute inset-0 -z-30 h-full w-full object-cover"
          fill
          sizes="100vw"
          src={previewAssets.contact}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(10,18,14,0.94)_0%,rgba(10,18,14,0.76)_54%,rgba(10,18,14,0.4)_100%)]"
        />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-warm-gold">First step</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Start with a clear audit before building more.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#e1e6da]">
              The page can stay premium and still be direct: review the current
              website, systems, inquiry path, and recurring friction, then
              choose the first practical implementation path.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <ButtonLink className="w-full sm:w-auto" href="/local-business-audit">
                Request an audit
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" href="/services" variant="secondary">
                See services
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {auditDeliverables.slice(0, 4).map((deliverable) => (
              <div
                className="min-h-28 border border-pale-stone/18 bg-[#101711]/76 p-4 backdrop-blur"
                key={deliverable}
              >
                <div className="mb-3 h-1 w-10 bg-warm-gold" />
                <p className="text-sm leading-6 text-[#e3e8dc]">{deliverable}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
