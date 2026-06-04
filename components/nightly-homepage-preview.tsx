"use client";

import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { Section } from "@/components/ui/section";
import { teamMembers } from "@/content/site";
import { cn } from "@/lib/utils";

const heroSignals = [
  "Websites",
  "AI workflows",
  "Search clarity",
  "Follow-up",
];

const serviceTracks = [
  {
    title: "Website and search clarity",
    eyebrow: "Public path",
    body: "Structure the homepage, service pages, metadata, and calls to action so customers can quickly understand what the business does and how to take the next step.",
    includes: ["Mobile-first page review", "Service copy cleanup", "Search-ready structure"],
  },
  {
    title: "Practical AI operations",
    eyebrow: "Internal workflow",
    body: "Turn one repeated task into a human-reviewed AI workflow with clear inputs, outputs, review points, and privacy boundaries.",
    includes: ["Task selection", "Prompt and process map", "Owner review checkpoints"],
  },
  {
    title: "Digital operations cleanup",
    eyebrow: "Back office",
    body: "Map the tools, files, accounts, handoffs, and follow-up paths that keep daily work moving, then clean up the first useful layer.",
    includes: ["Tool and file map", "Inquiry flow review", "Maintenance rhythm"],
  },
];

const diagnostics = [
  {
    id: "website",
    label: "Customers do not know what to do next",
    summary:
      "The offer, service area, proof points, or contact path are not clear enough on the first visit.",
    review:
      "Homepage hierarchy, mobile readability, service copy, calls to action, metadata, and contact flow.",
    outcome:
      "A prioritized cleanup plan for the pages and messages that need attention first.",
  },
  {
    id: "search",
    label: "The business is hard to find or understand online",
    summary:
      "Searchers can find fragments of the business, but the website is not acting like a clear public source of truth.",
    review:
      "Page titles, descriptions, internal links, sitemap, local-service language, and gaps that need owner confirmation.",
    outcome:
      "A practical search-foundation checklist without invented rankings or guaranteed outcomes.",
  },
  {
    id: "follow-up",
    label: "Inquiries and follow-up feel scattered",
    summary:
      "People reach out, but the next step depends on memory, manual tracking, or too many disconnected tools.",
    review:
      "Form prompts, inbox destination, lead handoff, reminders, response patterns, and recurring questions.",
    outcome:
      "A clear intake and follow-up map that shows where inquiries go and what should happen next.",
  },
  {
    id: "ai",
    label: "AI sounds useful but still feels vague",
    summary:
      "There are recurring tasks that could be easier, but the business needs a safe, practical starting point.",
    review:
      "Task frequency, sensitive information boundaries, examples, review steps, and where human judgment stays involved.",
    outcome:
      "One realistic AI workflow candidate with limits, review points, and next implementation steps.",
  },
];

const processSteps = [
  {
    title: "Start with the visible friction",
    body: "Name the specific issue first: unclear website, weak public structure, scattered follow-up, messy tools, or one repeatable task that needs help.",
  },
  {
    title: "Review the current system",
    body: "Look at the pages, tools, files, accounts, inquiry path, and workflow details before choosing a build or automation path.",
  },
  {
    title: "Prioritize the first useful fix",
    body: "Separate immediate cleanup from larger projects, and keep the recommendation practical enough for the business to maintain.",
  },
  {
    title: "Build with human review",
    body: "Improve the website, search foundation, AI workflow, or operations layer while keeping owner judgment in the loop.",
  },
];

const auditDeliverables = [
  "Plain-language review of what is working, unclear, or risky",
  "Priority list of the fixes that matter first",
  "Recommended first implementation path",
  "Boundaries for anything that needs more information",
  "Maintenance notes so the system does not scatter again",
];

const ownerFit = [
  "You run a local business, solo practice, or small team.",
  "The digital side works, but it takes too much attention to keep organized.",
  "You want practical help, not a pile of tools or vague AI promises.",
  "You want the first step to be reviewed by a person before anything is rebuilt.",
];

export function NightlyHomepagePreview() {
  return (
    <>
      <section className="relative overflow-hidden bg-evergreen text-pale-stone">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-warm-gold/60" />
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:min-h-[68vh] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10 lg:py-16">
          <div className="relative z-10 min-w-0 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-warm-gold">
              Maxwell Ventures
            </p>
            <h1 className="mt-5 max-w-[12ch] break-words font-display text-[2.35rem] font-semibold leading-[1.04] text-white sm:max-w-[13ch] sm:text-6xl lg:text-7xl">
              Clearer digital systems for local business.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-soft-gray-green sm:text-lg sm:leading-8">
              Maxwell Ventures helps business owners clean up the practical
              digital layers that customers and teams feel every day: websites,
              search structure, inquiry follow-up, files, tools, and useful AI
              workflows.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#preview-audit">Start with an audit</ButtonLink>
              <ButtonLink href="#preview-services" variant="secondary">
                Review services
              </ButtonLink>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroSignals.map((signal) => (
                <div
                  className="border border-sage-mist/35 bg-forest-green/60 px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-soft-gray-green"
                  key={signal}
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>

          <HeroSystemCard />
        </div>
      </section>

      <Section
        title="Start where the friction is visible"
        intro="The first step is not guessing which tool to buy or which page to rebuild. It is understanding the practical problem that is already costing time, clarity, or customer confidence."
      >
        <PreviewDiagnostic />
      </Section>

      <Section
        className="pt-0"
        title="Built around practical next steps"
        intro="Each service path starts with review, prioritization, and owner context before implementation."
      >
        <div id="preview-services" className="scroll-mt-28">
          <ResponsiveGrid>
            {serviceTracks.map((service) => (
              <Card
                className="flex min-h-full flex-col border-soft-gray-green bg-white"
                key={service.title}
                title={service.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-bronze">
                  {service.eyebrow}
                </p>
                <p className="mt-3">{service.body}</p>
                <ul className="mt-5 space-y-2">
                  {service.includes.map((item) => (
                    <li className="flex gap-2" key={item}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </ResponsiveGrid>
        </div>
      </Section>

      <Section tone="evergreen" title="A calm operating path" intro="The work stays grounded in the business context. Review first, then fix the layer that will make the next week easier to run.">
        <div className="grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              className="relative min-h-56 border border-sage-mist/35 bg-white/8 p-5 shadow-sm transition duration-300 hover:border-warm-gold/70 motion-safe:hover:-translate-y-1"
              key={step.title}
            >
              <p className="text-sm font-semibold text-warm-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-soft-gray-green">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="The audit is the clean first step"
        intro="A local business audit gives the owner a reviewed map before committing to a larger website, AI, marketing, or operations build."
      >
        <div
          id="preview-audit"
          className="grid scroll-mt-28 gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch"
        >
          <div className="border border-soft-gray-green bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-bronze">
              What you receive
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-evergreen">
              A practical priority map, not a generic report.
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-forest-green">
              {auditDeliverables.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 h-2 w-2 shrink-0 bg-warm-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request an audit</ButtonLink>
              <ButtonLink href="/local-business-audit" variant="secondary">
                View audit page
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ownerFit.map((item) => (
              <div
                className="border border-soft-gray-green bg-pale-stone p-5 text-sm leading-7 text-forest-green shadow-sm"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="pt-0"
        title="A small team with a practical standard"
        intro="The site uses the real Maxwell Ventures team assets and keeps the public promise conservative: useful systems, clear boundaries, and human review."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              className="overflow-hidden border border-soft-gray-green bg-white shadow-sm"
              key={member.name}
            >
              <div className="relative aspect-[4/5] bg-pale-stone">
                <Image
                  alt={member.name}
                  className="object-cover object-top"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={member.fullBody}
                  unoptimized
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-evergreen">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-bronze">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-forest-green">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-evergreen px-6 py-16 text-pale-stone sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 border border-warm-gold/45 bg-forest-green/60 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warm-gold">
              First step
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Start with the clearest problem, then build the right system.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-soft-gray-green">
              Share the website, the situation, and what feels scattered.
              Maxwell Ventures can review whether an audit, cleanup, or
              implementation path is the right first move.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/contact">Request an audit</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              See services
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroSystemCard() {
  return (
    <div className="relative min-w-0">
      <div
        aria-hidden="true"
        className="absolute -left-4 top-8 hidden h-64 w-32 border border-warm-gold/25 lg:block"
      />
      <div className="relative overflow-hidden border border-warm-gold/45 bg-pale-stone p-4 shadow-2xl shadow-black/25">
        <div className="relative overflow-hidden bg-white">
          <Image
            alt="Maxwell Ventures team"
            className="aspect-[16/11] w-full object-cover object-top"
            height={900}
            priority
            src="/images/team/team-group.webp"
            unoptimized
            width={1200}
          />
        </div>
        <div className="grid gap-3 pt-4 sm:grid-cols-3">
          {[
            ["01", "Review first"],
            ["02", "Prioritize clearly"],
            ["03", "Build practically"],
          ].map(([number, label]) => (
            <div
              className="border border-soft-gray-green bg-white px-4 py-3"
              key={label}
            >
              <p className="text-xs font-semibold text-muted-bronze">
                {number}
              </p>
              <p className="mt-1 text-sm font-semibold text-evergreen">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewDiagnostic() {
  const [selectedId, setSelectedId] = useState(diagnostics[0].id);
  const selected =
    diagnostics.find((item) => item.id === selectedId) || diagnostics[0];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
      <div aria-label="Common digital problem areas" className="grid gap-3">
        {diagnostics.map((item, index) => {
          const isSelected = item.id === selected.id;

          return (
            <button
              aria-pressed={isSelected}
              className={cn(
                "group flex min-h-20 w-full items-start gap-4 border px-4 py-4 text-left transition duration-300 focus:outline-none focus:ring-4 focus:ring-warm-gold/35 motion-safe:hover:-translate-y-0.5",
                "border-soft-gray-green bg-white text-forest-green shadow-sm hover:border-warm-gold/70 hover:shadow-md",
                isSelected &&
                  "border-warm-gold bg-evergreen text-white shadow-lg shadow-evergreen/15",
              )}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              type="button"
            >
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center border text-xs font-semibold transition",
                  isSelected
                    ? "border-warm-gold bg-warm-gold text-evergreen"
                    : "border-soft-gray-green/80 text-muted-bronze group-hover:border-warm-gold",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold leading-6">
                  {item.label}
                </span>
                <span
                  className={cn(
                    "mt-1 block text-xs leading-5",
                    isSelected ? "text-soft-gray-green" : "text-muted-bronze",
                  )}
                >
                  {item.summary}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        aria-live="polite"
        className="relative overflow-hidden border border-soft-gray-green bg-white p-6 shadow-sm md:p-8"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-warm-gold" />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-bronze">
          Selected starting point
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-evergreen sm:text-3xl">
          {selected.label}
        </h3>
        <div className="mt-6 grid gap-4">
          <DiagnosticRow label="What is happening" value={selected.summary} />
          <DiagnosticRow label="What gets reviewed" value={selected.review} />
          <DiagnosticRow label="What the audit produces" value={selected.outcome} />
        </div>
        <div className="mt-7">
          <ButtonLink href="#preview-audit">See audit output</ButtonLink>
        </div>
      </div>
    </div>
  );
}

function DiagnosticRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-soft-gray-green/80 bg-pale-stone px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-bronze">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-forest-green">{value}</p>
    </div>
  );
}
