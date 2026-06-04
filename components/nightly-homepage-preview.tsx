"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { teamMembers } from "@/content/site";
import { cn } from "@/lib/utils";

const heroNotes = [
  "Pacific Northwest",
  "Heritage modern",
  "Human reviewed",
];

const visualPrinciples = [
  {
    title: "Lead with atmosphere",
    body: "The brand should feel established before a visitor reads the service list: dark evergreen, gold relief, stone, fog, coastline, timber, and quiet confidence.",
  },
  {
    title: "Use proof as material",
    body: "Team portraits, generated campaign art, and working website mockups should carry the page instead of decorative boxes or generic service icons.",
  },
  {
    title: "Keep the promise grounded",
    body: "The copy stays practical and conservative while the image system does the emotional work: clarity, stewardship, calm systems, and better public presence.",
  },
];

const serviceLines = [
  {
    title: "Public presence",
    body: "Website, search, and content structure that makes the business easier to understand before anyone talks to a sales person.",
  },
  {
    title: "Practical AI operations",
    body: "Human-reviewed workflows for repeated work, messy handoffs, research, drafting, and internal follow-through.",
  },
  {
    title: "Digital cleanup",
    body: "Files, tools, inquiry paths, account sprawl, and the operating details that quietly slow a small team down.",
  },
];

const visualStudies = [
  {
    id: "coast",
    title: "Coastal crest",
    caption: "A dark, cinematic Pacific Northwest hero language.",
    image: "/images/brand-world/mv-coastal-crest-hero.webp",
  },
  {
    id: "banner",
    title: "Stone wordmark",
    caption: "Marble, gold type, and quiet institutional polish.",
    image: "/images/brand-world/mv-coastal-wordmark-banner.webp",
  },
  {
    id: "forest",
    title: "Mist forest",
    caption: "Evergreen terrain, shield language, and campaign art.",
    image: "/images/brand-world/mv-mist-forest-poster.webp",
  },
  {
    id: "system",
    title: "Website system",
    caption: "The generated mobile and desktop language that should inform the build.",
    image: "/images/brand-world/mv-website-system-mockup.webp",
  },
];

const studioFrames = [
  {
    title: "Campaign art",
    image: "/images/brand-world/mv-vertical-coastal-poster.webp",
    alt: "Maxwell Ventures generated coastal campaign artwork",
    imageClass: "aspect-[4/5] w-full object-cover",
  },
  {
    title: "Mist forest",
    image: "/images/brand-world/mv-mist-forest-poster.webp",
    alt: "Maxwell Ventures generated mist forest campaign poster",
    imageClass: "aspect-[4/5] w-full object-cover",
  },
  {
    title: "Storm coast",
    image: "/images/brand-world/mv-storm-coast-poster.webp",
    alt: "Maxwell Ventures generated storm coast poster",
    imageClass: "aspect-[4/5] w-full object-cover",
  },
];

const assetCounts = [
  ["72", "labeled candidate previews"],
  ["9", "curated public preview assets"],
  ["6", "large SVG source exports"],
];

const publicSignals = [
  ["Premium", "visual standard"],
  ["Practical", "AI systems"],
  ["Human", "review"],
];

export function NightlyHomepagePreview({
  surface = "preview",
}: {
  surface?: "preview" | "public";
}) {
  const isPreview = surface === "preview";
  const [selectedStudyId, setSelectedStudyId] = useState(visualStudies[0].id);
  const selectedStudy = useMemo(
    () =>
      visualStudies.find((study) => study.id === selectedStudyId) ||
      visualStudies[0],
    [selectedStudyId],
  );

  return (
    <div className="bg-[#101711] text-pale-stone">
      <section className="relative isolate min-h-[82svh] overflow-hidden">
        <Image
          alt="Maxwell Ventures generated Pacific Northwest coastal brand artwork"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/brand-world/mv-dual-coastal-hero-study.webp"
          unoptimized
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,17,12,0.94)_0%,rgba(10,17,12,0.82)_36%,rgba(10,17,12,0.24)_72%,rgba(10,17,12,0.7)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#101711] to-transparent"
        />

        <div className="mx-auto flex min-h-[82svh] w-full max-w-7xl flex-col justify-between px-6 py-10 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-5 border-b border-warm-gold/35 pb-4 text-xs font-semibold uppercase tracking-[0.22em] text-warm-gold">
            <span>
              {isPreview ? "Owner review" : "Pacific Northwest studio"}
            </span>
            <span className="hidden text-right text-sage-mist sm:block">
              {isPreview ? "Preview route only" : "Human-centered digital systems"}
            </span>
          </div>

          <div className="grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-8 h-px w-28 bg-warm-gold" />
              <h1 className="font-display text-[3.8rem] font-semibold leading-[0.9] text-white sm:text-[5.8rem] lg:text-[7.8rem]">
                Maxwell Ventures
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d9dccf] sm:text-xl sm:leading-9">
                A premium, human-centered AI operations and digital systems
                studio with a Pacific Northwest visual standard: evergreen,
                gold, stone, coastline, real team presence, and practical
                clarity.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {isPreview ? (
                  <>
                    <ButtonLink href="#visual-standard">See the visual system</ButtonLink>
                    <ButtonLink href="#preview-contact" variant="secondary">
                      Review the first step
                    </ButtonLink>
                  </>
                ) : (
                  <>
                    <ButtonLink href="/local-business-audit">
                      Request an audit
                    </ButtonLink>
                    <ButtonLink href="/services" variant="secondary">
                      See services
                    </ButtonLink>
                  </>
                )}
              </div>
            </div>

            <div className="relative hidden min-h-[34rem] lg:block">
              <div className="absolute right-0 top-0 w-[74%] border border-warm-gold/45 bg-[#101711]/50 p-3 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <Image
                  alt="Maxwell Ventures team in generated brand environment"
                  className="aspect-[16/9] w-full object-cover"
                  height={907}
                  priority
                  sizes="42vw"
                  src="/images/brand-world/mv-team-studio-wall.webp"
                  unoptimized
                  width={1733}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[52%] border border-warm-gold/40 bg-pale-stone p-3 shadow-2xl shadow-black/45">
                <Image
                  alt="Maxwell Ventures generated website system mockup"
                  className="aspect-[4/3] w-full object-cover"
                  height={1086}
                  priority
                  sizes="28vw"
                  src="/images/brand-world/mv-website-system-mockup.webp"
                  unoptimized
                  width={1448}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-warm-gold/30 bg-warm-gold/30 sm:grid-cols-3">
            {heroNotes.map((note) => (
              <div
                className="bg-[#101711]/86 px-4 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#d9dccf] backdrop-blur-sm"
                key={note}
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="visual-standard"
        className="relative overflow-hidden bg-[#101711] px-6 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-warm-gold">
              Visual standard
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {isPreview
                ? "Bring the generated brand world into the actual page."
                : "A richer public surface for practical digital systems."}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#c7ccbd]">
              {isPreview
                ? "The recent reference images have a stronger point of view than the current site: cinematic coastline, gold relief marks, marble fields, premium team scenes, and compact mobile layouts. This preview moves the page toward that world first."
                : "Maxwell Ventures pairs a premium Northwest visual standard with practical AI operations, websites, search clarity, and digital cleanup for small teams that need calm execution without hype."}
            </p>
          </div>
          <div className="overflow-hidden border border-warm-gold/35 bg-pale-stone p-3 shadow-2xl shadow-black/30">
            <Image
              alt="Maxwell Ventures generated stone and gold wordmark banner"
              className="aspect-[21/9] w-full object-cover"
              height={771}
              sizes="(min-width: 1024px) 58vw, 100vw"
              src="/images/brand-world/mv-coastal-wordmark-banner.webp"
              unoptimized
              width={1800}
            />
          </div>
        </div>
      </section>

      <section className="bg-pale-stone px-6 py-16 text-evergreen sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="grid gap-4">
            {visualPrinciples.map((principle, index) => (
              <article
                className="grid gap-5 border border-[#c8b882] bg-white p-5 shadow-sm sm:grid-cols-[4rem_1fr] sm:p-6"
                key={principle.title}
              >
                <p className="font-display text-4xl font-semibold text-warm-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-semibold leading-tight">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-forest-green">
                    {principle.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="sticky top-28 border border-evergreen/20 bg-[#f7f4ea] p-4 shadow-xl shadow-evergreen/10">
            <Image
              alt="Maxwell Ventures generated Pacific Northwest campaign poster"
              className="aspect-[4/5] w-full object-cover"
              height={1402}
              sizes="(min-width: 1024px) 36vw, 100vw"
              src="/images/brand-world/mv-mist-forest-poster.webp"
              unoptimized
              width={1122}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#18241c] px-6 py-16 text-pale-stone sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-warm-gold">
              Reference studies
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {isPreview
                ? "The new page should feel image-led, not card-led."
                : "Image-led, grounded, and built around the real studio."}
            </h2>
            <div className="mt-8 grid gap-3">
              {visualStudies.map((study) => {
                const isSelected = selectedStudy.id === study.id;

                return (
                  <button
                    aria-pressed={isSelected}
                    className={cn(
                      "w-full border px-4 py-4 text-left transition focus:outline-none focus:ring-4 focus:ring-warm-gold/35",
                      isSelected
                        ? "border-warm-gold bg-warm-gold text-evergreen"
                        : "border-sage-mist/30 bg-white/5 text-[#d9dccf] hover:border-warm-gold/70",
                    )}
                    key={study.id}
                    onClick={() => setSelectedStudyId(study.id)}
                    type="button"
                  >
                    <span className="block text-sm font-semibold uppercase tracking-[0.14em]">
                      {study.title}
                    </span>
                    <span
                      className={cn(
                        "mt-2 block text-sm leading-6",
                        isSelected ? "text-forest-green" : "text-soft-gray-green",
                      )}
                    >
                      {study.caption}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="min-w-0 border border-warm-gold/35 bg-[#0d140f] p-3 shadow-2xl shadow-black/35">
            <Image
              alt={selectedStudy.title}
              className="aspect-[16/10] w-full object-cover"
              height={1086}
              loading="eager"
              sizes="(min-width: 1024px) 62vw, 100vw"
              src={selectedStudy.image}
              unoptimized
              width={1448}
            />
            <div className="flex flex-col gap-2 border-t border-warm-gold/25 px-2 py-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {selectedStudy.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-soft-gray-green">
                  {selectedStudy.caption}
                </p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-gold">
                {isPreview ? "Owner-review asset" : "Brand study"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pale-stone px-6 py-16 text-evergreen sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-bronze">
                The offer stays practical
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                A richer look without inventing a louder company.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-forest-green">
                {isPreview
                  ? "Function is deliberately quiet in this pass. The site still needs to say what Maxwell Ventures does, but the first job is to make the public surface match the quality of the imagery."
                  : "The public offer stays conservative: clear websites, practical AI workflows, search-ready structure, and digital operations support with human review at the center."}
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-evergreen/20 bg-evergreen/20 sm:grid-cols-3">
              {(isPreview ? assetCounts : publicSignals).map(([count, label]) => (
                <div className="bg-white p-5" key={label}>
                  <p className="font-display text-4xl font-semibold text-warm-gold">
                    {count}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-forest-green">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {serviceLines.map((line) => (
              <article
                className="border border-[#c8b882] bg-white p-6 shadow-sm"
                key={line.title}
              >
                <h3 className="font-display text-2xl font-semibold leading-tight">
                  {line.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-forest-green">
                  {line.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101711] px-6 py-16 text-pale-stone sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
          <div className="overflow-hidden border border-warm-gold/35 bg-pale-stone p-3">
            <div className="relative aspect-[3/1] overflow-hidden">
              <Image
                alt="Generated Maxwell Ventures team and brand wall"
                className="object-cover object-top"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                src="/images/brand-world/mv-team-studio-wall.webp"
                unoptimized
              />
            </div>
          </div>
          <div className="flex flex-col justify-between border border-warm-gold/35 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-warm-gold">
                Real team presence
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-white">
                Keep the people visible.
              </h2>
              <p className="mt-5 text-base leading-8 text-soft-gray-green">
                The reference art works because it makes Maxwell Ventures feel
                like a real studio, not an anonymous AI service. The team should
                appear as part of the brand world, not as an afterthought at the
                bottom of the page.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {teamMembers.map((member) => (
                <div className="min-w-0" key={member.name}>
                  <div className="relative aspect-[4/5] overflow-hidden border border-warm-gold/30 bg-pale-stone">
                    <Image
                      alt={member.name}
                      className="object-cover object-top"
                      fill
                      sizes="12vw"
                      src={member.image}
                      unoptimized
                    />
                  </div>
                  <p className="mt-2 text-xs font-semibold leading-4 text-[#d9dccf]">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pale-stone px-6 py-16 text-evergreen sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {studioFrames.map((frame) => (
            <article
              className="overflow-hidden border border-evergreen/20 bg-white shadow-sm"
              key={frame.title}
            >
              <Image
                alt={frame.alt}
                className={frame.imageClass}
                height={1402}
                sizes="(min-width: 768px) 33vw, 100vw"
                src={frame.image}
                unoptimized
                width={1122}
              />
              <div className="border-t border-[#c8b882] p-5">
                <h3 className="font-display text-2xl font-semibold">
                  {frame.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="preview-contact"
        className="relative isolate overflow-hidden bg-[#101711] px-6 py-16 text-pale-stone sm:px-8 lg:px-10"
      >
        <Image
          alt="Maxwell Ventures generated mountain wordmark panorama"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fill
          sizes="100vw"
          src="/images/brand-world/mv-mountain-wordmark-panorama.webp"
          unoptimized
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[#101711]/86"
        />
        <div className="mx-auto grid max-w-7xl gap-8 border border-warm-gold/35 bg-[#101711]/72 p-6 backdrop-blur-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {isPreview
                ? "Review the aesthetic first. Promote only after approval."
                : "Start with the clearest digital problem, then build the right system."}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-soft-gray-green">
              {isPreview
                ? "This route is still private, unlisted, and noindexed. It is a design candidate, not the approved public homepage and not a claim that contact delivery or production launch is complete."
                : "Share the website, the messy workflow, or the system that feels scattered. Maxwell Ventures can review the first useful path without pretending every problem needs a bigger platform."}
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
    </div>
  );
}
