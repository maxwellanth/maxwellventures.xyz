"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      className="grid max-w-2xl gap-5 rounded-md border border-soft-gray-green bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <label className="grid gap-2 text-sm font-semibold text-evergreen">
        Name
        <input
          className="rounded-sm border border-soft-gray-green px-3 py-3 text-base font-normal outline-none ring-warm-gold/40 transition focus:ring-4"
          name="name"
          type="text"
          autoComplete="name"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-evergreen">
        Email
        <input
          className="rounded-sm border border-soft-gray-green px-3 py-3 text-base font-normal outline-none ring-warm-gold/40 transition focus:ring-4"
          name="email"
          type="email"
          autoComplete="email"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-evergreen">
        Project notes
        <textarea
          className="min-h-36 rounded-sm border border-soft-gray-green px-3 py-3 text-base font-normal outline-none ring-warm-gold/40 transition focus:ring-4"
          name="message"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit">Prepare inquiry</Button>
        {submitted ? (
          <p className="text-sm text-forest-green">
            Draft prepared locally. Final intake routing is not connected yet.
          </p>
        ) : null}
      </div>
      <p className="text-sm leading-6 text-muted-bronze">
        Contact details pending final approval. No personal email or phone
        number is published here yet.
      </p>
    </form>
  );
}
