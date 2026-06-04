"use client";

import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ResponsiveGrid } from "@/components/ui/responsive-grid";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const operatingSignals = [
  "Website clarity",
  "Search path",
  "Tools and files",
  "Follow-up",
  "Practical AI",
];

const painPoints = [
  "The website is unclear, outdated, or hard to use on mobile.",
  "Customers cannot easily find the business or understand what to do next.",
  "The same customer questions keep getting answered manually.",
  "Files, tools, accounts, and follow-up tasks are spread across too many places.",
  "AI seems useful, but there is no practical workflow for using it safely.",
  "The inquiry and follow-up process is not organized enough to maintain.",
];

const diagnostics = [
  {
    id: "unclear-website",
    label: "Unclear website",
    problem:
      "Visitors land on the site, but the offer, next step, or reason to trust the business is not obvious.",
    reviews:
      "Page hierarchy, mobile layout, service copy, calls to action, contact paths, and the first-screen message.",
    receives:
      "A cleaner page priority list with specific copy, layout, and contact-flow fixes.",
    nextStep:
      "Start with a website and mobile clarity review before choosing design or rebuild work.",
  },
  {
    id: "weak-search",
    label: "Weak search presence",
    problem:
      "People may search for the business or service, but the public website is not giving search engines enough clear, trustworthy structure.",
    reviews:
      "Metadata, page titles, internal links, sitemap, robots, local service language, and search-readiness gaps.",
    receives:
      "A search foundation checklist that separates immediate cleanup from claims that cannot be guaranteed.",
    nextStep:
      "Clean up the public structure and metadata, then decide whether deeper local SEO work is needed.",
  },
  {
    id: "scattered-tools",
    label: "Scattered tools",
    problem:
      "Files, accounts, tools, and ownership details are spread out enough that routine work takes longer than it should.",
    reviews:
      "Tool inventory, file locations, access ownership, repeated manual work, and practical cleanup priorities.",
    receives:
      "A plain operating map of what exists, what is risky or unclear, and what should be organized first.",
    nextStep:
      "Choose one area to clean up before adding new software or automation.",
  },
  {
    id: "customer-questions",
    label: "Repeated questions",
    problem:
      "The same questions keep coming through calls, messages, or emails because the website and follow-up path do not answer them clearly.",
    reviews:
      "Common questions, service explanations, form prompts, response patterns, and reusable content opportunities.",
    receives:
      "A practical FAQ/content plan and follow-up notes that reduce repetitive owner time.",
    nextStep:
      "Turn the most repeated questions into clear page copy and a simple response workflow.",
  },
  {
    id: "messy-follow-up",
    label: "Messy follow-up",
    problem:
      "Inquiries arrive, but the business does not have a reliable place to track them or a clear next-action rhythm.",
    reviews:
      "Contact forms, inbox flow, handoff steps, lead tracking, reminders, and the first reply path.",
    receives:
      "A lead-capture and follow-up map that shows where inquiries go and what should happen after submission.",
    nextStep:
      "Confirm the approved delivery destination, then tighten the inquiry and response process.",
  },
  {
    id: "practical-ai",
    label: "Practical AI workflow",
    problem:
      "AI seems useful, but the business does not know which task is safe, repeatable, and worth improving first.",
    reviews:
      "Recurring tasks, sensitive information boundaries, review steps, prompt patterns, and where human judgment must stay involved.",
    receives:
      "One practical AI workflow candidate with clear inputs, outputs, review points, and limits.",
    nextStep:
      "Pick a recurring task and define a small human-reviewed workflow before automating anything.",
  },
];

const systemSteps = [
  {
    title: "Problem",
    body: "Start with the friction the owner can actually feel: unclear website, weak search path, scattered tools, repeated questions, or messy follow-up.",
  },
  {
    title: "Audit",
    body: "Review the public pages, tools, files, contact path, and practical AI opportunities before choosing a build path.",
  },
  {
    title: "Cleanup plan",
    body: "Turn the findings into a priority map with immediate fixes, implementation options, and what should wait.",
  },
  {
    title: "Build path",
    body: "Improve the website, search foundation, content process, AI workflow, or digital operations layer that matters first.",
  },
  {
    title: "Ongoing improvement",
    body: "Keep the useful pieces maintained with a simple rhythm instead of letting the system scatter again.",
  },
];

const serviceOffers = [
  {
    title: "Local Business Digital Audit",
    summary:
      "When the digital side of the business feels messy, this finds what is unclear and what should be fixed first.",
    firstStep: "Request an audit and share the main issue, website, and context.",
  },
  {
    title: "Website + Search Foundation",
    summary:
      "When customers land on the site and still do not know what to do, this cleans up the public path.",
    firstStep: "Start with a website and search review.",
  },
  {
    title: "AI Operations Setup",
    summary:
      "When AI sounds useful but vague, this turns one recurring task into a practical workflow with human review.",
    firstStep: "Identify one recurring workflow that needs cleanup.",
  },
  {
    title: "Content and Marketing Systems",
    summary:
      "When updates keep slipping or every post starts from scratch, this creates a repeatable content process.",
    firstStep:
      "Review current channels and choose the first repeatable content workflow.",
  },
  {
    title: "Digital Cleanup and Account Hygiene",
    summary:
      "When files, tools, passwords, and account ownership are scattered, this creates a cleaner map of what exists and what needs attention.",
    firstStep: "Share the biggest source of digital friction or access confusion.",
  },
  {
    title: "Ongoing Digital Operations",
    summary:
      "When the first cleanup is done but the business still needs help keeping things current, this creates a maintenance rhythm.",
    firstStep: "Start with an audit or defined maintenance need.",
  },
];

const auditSteps = [
  "Review the current website, search presence, tools, files, and customer communication paths.",
  "Identify high-leverage cleanup, automation, privacy, or website improvements.",
  "Prioritize a practical implementation plan with clear next actions and maintenance needs.",
  "Choose the first implementation path if Maxwell Ventures is the right fit for the work.",
];

const reviewAreas = [
  "Website clarity, page structure, and mobile usability",
  "Search presence and local discovery basics",
  "Contact, inquiry, and customer follow-up flow",
];

const deliverables = [
  "Plain-language review of what is working and what is unclear",
  "Priority list of practical fixes and cleanup opportunities",
  "Recommended first implementation path",
  "Notes on what should wait until more information is confirmed",
  "Maintenance and follow-up considerations",
];

const proofPoints = [
  "Honest recommendations and practical boundaries.",
  "Clear public pages before complex effects.",
  "Practical systems that a business can maintain.",
  "A website used as the first proof of the Maxwell Ventures standard.",
];

export function NightlyHomepagePreview() {
  return (
    <>
      <section className="ambient-grid relative overflow-hidden bg-evergreen text-pale-stone">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-warm-gold/55"
        />
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-8 sm:min-h-[64vh] sm:px-8 sm:py-10 lg:min-h-[66vh] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10 lg:py-14">
          <div className="relative z-10 min-w-0 max-w-3xl">
            <h1 className="max-w-[13ch] break-words font-display text-[2rem] font-semibold leading-[1.08] text-white sm:max-w-none sm:text-5xl sm:leading-tight lg:text-6xl">
              When the digital side of your business feels scattered, we help
              make it clear.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-soft-gray-green sm:mt-6 sm:text-lg sm:leading-8">
              If customers cannot find you online, your website is confusing,
              your files and accounts are spread out, or you know AI could help
              but do not know where to start, Maxwell Ventures helps turn the
              mess into a practical operating plan.
            </p>
            <div className="mt-7 flex flex-row flex-wrap gap-3">
              <ButtonLink
                className="flex-1 sm:flex-none"
                href="#preview-audit"
              >
                Request an audit
              </ButtonLink>
              <ButtonLink
                className="flex-1 sm:flex-none"
                href="#preview-services"
                variant="secondary"
              >
                View services
              </ButtonLink>
            </div>
            <div className="mt-8 hidden gap-3 sm:grid sm:grid-cols-3">
              {["Audit first", "Human review", "Preview before publish"].map(
                (item) => (
                  <div
                    className="rounded-sm border border-sage-mist/35 bg-forest-green/55 px-4 py-3 text-sm font-semibold text-soft-gray-green transition duration-300 hover:border-warm-gold/65 hover:text-white"
                    key={item}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <HeroOperatingPanel />
        </div>
      </section>

      <Section
        title="Choose the problem you recognize"
        intro="The site should help a business owner name the friction before choosing a service. This diagnostic is not an automated scan; it is a practical map of what Maxwell Ventures would review."
      >
        <PreviewDiagnostic />
      </Section>

      <Section
        className="pt-0"
        title="From scattered problem to maintained system"
        intro="The work should move in a clear order: understand the problem, review the current setup, clean up the first useful layer, then maintain what matters."
      >
        <SystemMap />
      </Section>

      <Section
        tone="evergreen"
        title="What usually needs cleanup"
        intro="Most local business websites are not weak because of design alone. The website, search presence, follow-up process, tools, and content system often need to be cleaned up together."
      >
        <ResponsiveGrid>
          {painPoints.map((point) => (
            <div
              className="rounded-md border border-sage-mist/35 bg-white/8 p-5 text-sm leading-7 text-soft-gray-green shadow-sm transition duration-300 hover:border-warm-gold/70 motion-safe:hover:-translate-y-1"
              key={point}
            >
              {point}
            </div>
          ))}
        </ResponsiveGrid>
      </Section>

      <Section
        title="Services built around practical next steps"
        intro="The point is not to sell a tool first. The point is to find what is slowing the business down, fix the first useful layer, and leave behind something the owner can understand."
      >
        <div id="preview-services" className="scroll-mt-28">
          <ResponsiveGrid>
            {serviceOffers.map((service) => (
              <Card key={service.title} title={service.title}>
                <p>{service.summary}</p>
                <p className="mt-3">
                  <span className="font-semibold text-evergreen">
                    Next step:
                  </span>{" "}
                  {service.firstStep}
                </p>
              </Card>
            ))}
          </ResponsiveGrid>
        </div>
      </Section>

      <Section
        title="How the audit works"
        intro="The audit is the main first step. It turns scattered website, search, tool, and follow-up problems into a practical priority list."
      >
        <div id="preview-audit" className="scroll-mt-28">
          <div className="grid gap-4 md:grid-cols-4">
            {auditSteps.map((item, index) => (
              <div
                className="group rounded-md border border-soft-gray-green bg-white p-5 shadow-sm transition duration-300 hover:border-warm-gold/75 hover:shadow-lg motion-safe:hover:-translate-y-1"
                key={item}
              >
                <p className="text-sm font-semibold text-warm-gold">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-sm leading-7 text-forest-green">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="What the client receives"
        intro="The goal is not a vague report. The audit should leave a business owner with clear next actions and honest boundaries."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ResponsiveGrid className="lg:grid-cols-1">
            {reviewAreas.map((area) => (
              <Card key={area}>{area}</Card>
            ))}
          </ResponsiveGrid>
          <div className="rounded-md border border-soft-gray-green bg-white p-6">
            <h3 className="font-display text-2xl font-semibold text-evergreen">
              Clear output and practical boundaries
            </h3>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-forest-green">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <div
                  className="rounded-sm border border-soft-gray-green/80 bg-pale-stone px-4 py-3 text-sm font-semibold text-evergreen"
                  key={point}
                >
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <ButtonLink href="#preview-audit">Review audit path</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function HeroOperatingPanel() {
  return (
    <div className="relative hidden min-w-0 lg:block">
      <div
        aria-hidden="true"
        className="absolute -left-5 top-6 hidden h-72 w-28 border border-warm-gold/25 lg:block"
      />
      <div className="relative overflow-hidden rounded-md border border-warm-gold/45 bg-pale-stone p-4 shadow-2xl shadow-black/25">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-sm border border-soft-gray-green bg-white">
            <Image
              alt="Maxwell Ventures team"
              className="aspect-[4/5] h-full w-full object-cover object-top"
              height={900}
              priority
              src="/images/team/team-group.webp"
              unoptimized
              width={900}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-evergreen/90 to-transparent p-4">
              <p className="text-sm font-semibold text-white">
                Human-reviewed systems
              </p>
              <p className="mt-1 text-xs leading-5 text-soft-gray-green">
                Websites, AI workflows, and operations support stay tied to
                real business context.
              </p>
            </div>
          </div>

          <div className="grid content-between gap-3">
            <div className="rounded-sm border border-soft-gray-green bg-white p-4">
              <p className="font-display text-2xl font-semibold text-evergreen">
                Operating map
              </p>
              <p className="mt-2 text-sm leading-6 text-forest-green">
                Start with the visible friction, then decide which layer needs
                the first practical fix.
              </p>
            </div>
            <div className="grid gap-2">
              {operatingSignals.map((signal, index) => (
                <div
                  className="group flex items-center gap-3 rounded-sm border border-soft-gray-green/85 bg-white px-3 py-2 transition duration-300 hover:border-warm-gold hover:bg-pale-stone"
                  key={signal}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-warm-gold shadow-[0_0_0_4px_rgba(201,160,90,0.16)]" />
                  <span className="text-sm font-semibold text-evergreen">
                    {signal}
                  </span>
                  <span className="ml-auto text-xs font-semibold text-muted-bronze">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
      <div aria-label="Common digital problem areas" className="grid gap-3">
        {diagnostics.map((item, index) => {
          const isSelected = item.id === selected.id;

          return (
            <button
              aria-pressed={isSelected}
              className={cn(
                "group flex min-h-16 w-full items-center gap-4 rounded-md border px-4 py-3 text-left transition duration-300 focus:outline-none focus:ring-4 focus:ring-warm-gold/35 motion-safe:hover:-translate-y-0.5",
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
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border text-xs font-semibold transition",
                  isSelected
                    ? "border-warm-gold bg-warm-gold text-evergreen"
                    : "border-soft-gray-green/80 text-muted-bronze group-hover:border-warm-gold",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-sm font-semibold">
                  {item.label}
                </span>
                <span
                  className={cn(
                    "mt-1 block text-xs leading-5",
                    isSelected ? "text-soft-gray-green" : "text-muted-bronze",
                  )}
                >
                  {item.nextStep}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        aria-live="polite"
        className="relative overflow-hidden rounded-md border border-soft-gray-green bg-white p-6 shadow-sm md:p-8"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-warm-gold" />
        <div
          aria-hidden="true"
          className="absolute right-5 top-5 hidden h-24 w-24 border border-warm-gold/25 md:block"
        />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-bronze">
          Selected diagnostic
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-evergreen sm:text-3xl">
          {selected.label}
        </h3>
        <div className="mt-6 grid gap-4">
          <DiagnosticRow label="Problem" value={selected.problem} />
          <DiagnosticRow
            label="What Maxwell Ventures reviews"
            value={selected.reviews}
          />
          <DiagnosticRow
            label="What the client receives"
            value={selected.receives}
          />
          <DiagnosticRow label="What happens next" value={selected.nextStep} />
        </div>
      </div>
    </div>
  );
}

function DiagnosticRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm border border-soft-gray-green/80 bg-pale-stone px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-bronze">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-forest-green">{value}</p>
    </div>
  );
}

function SystemMap() {
  return (
    <div className="grid gap-4 lg:grid-cols-5 lg:items-stretch">
      {systemSteps.map((step, index) => (
        <article
          className="group relative min-h-48 rounded-md border border-soft-gray-green bg-white p-5 shadow-sm transition duration-300 hover:border-warm-gold/70 hover:shadow-lg motion-safe:hover:-translate-y-1"
          key={step.title}
        >
          {index < systemSteps.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute -right-3 top-8 hidden h-px w-6 bg-muted-bronze/45 lg:block"
            />
          ) : null}
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-warm-gold/70 bg-pale-stone text-xs font-semibold text-evergreen">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-evergreen">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-forest-green">
            {step.body}
          </p>
        </article>
      ))}
    </div>
  );
}
