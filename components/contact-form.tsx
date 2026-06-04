"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

type SubmissionState = "idle" | "submitting" | "sent" | "error" | "unconfigured";

export function ContactForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          message: formData.get("message"),
          name: formData.get("name"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as {
        code?: string;
        message?: string;
        ok?: boolean;
      };

      if (response.ok && result.ok) {
        setSubmissionState("sent");
        setStatusMessage("Inquiry sent. Maxwell Ventures will review it.");
        form.reset();
        return;
      }

      if (response.status === 503 || result.code === "unconfigured") {
        setSubmissionState("unconfigured");
        setStatusMessage(
          "The approved inquiry destination is not configured yet. No message was sent.",
        );
        return;
      }

      setSubmissionState("error");
      setStatusMessage(result.message || "The inquiry could not be sent.");
    } catch {
      setSubmissionState("error");
      setStatusMessage("The inquiry could not be sent.");
    }
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
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-evergreen">
        Email
        <input
          className="rounded-sm border border-soft-gray-green px-3 py-3 text-base font-normal outline-none ring-warm-gold/40 transition focus:ring-4"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-evergreen">
        Website or business link
        <input
          className="rounded-sm border border-soft-gray-green px-3 py-3 text-base font-normal outline-none ring-warm-gold/40 transition focus:ring-4"
          name="website"
          type="url"
          autoComplete="url"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-evergreen">
        Project notes
        <textarea
          className="min-h-36 rounded-sm border border-soft-gray-green px-3 py-3 text-base font-normal outline-none ring-warm-gold/40 transition focus:ring-4"
          name="message"
          required
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button disabled={submissionState === "submitting"} type="submit">
          {submissionState === "submitting" ? "Sending..." : "Send inquiry"}
        </Button>
        {statusMessage ? (
          <p
            className={
              submissionState === "sent"
                ? "text-sm text-forest-green"
                : "text-sm text-muted-bronze"
            }
            role="status"
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
      <p className="text-sm leading-6 text-muted-bronze">
        The form only confirms delivery after the approved intake destination
        accepts the inquiry.
      </p>
    </form>
  );
}
