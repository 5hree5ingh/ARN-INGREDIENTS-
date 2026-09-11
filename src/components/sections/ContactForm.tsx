"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

const fieldClass =
  "w-full border-b border-ink/20 bg-transparent px-0 py-3 text-base font-light text-ink transition-colors duration-300 outline-none placeholder:text-ink-faint/70 focus:border-gold";

const labelClass = "tracked block text-[0.56rem] font-medium text-gold-deep";

// PLACEHOLDER: no backend is wired. Submitting opens the visitor's mail client.
// Replace with a form service (Formspree, Resend, or a route handler) before launch.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Product of interest: ${data.get("product")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Enquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={`mt-3 ${fieldClass}`}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={`mt-3 ${fieldClass}`}
          />
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`mt-3 ${fieldClass}`}
          />
        </div>
        <div>
          <label htmlFor="product" className={labelClass}>
            Product of Interest
          </label>
          <input
            id="product"
            name="product"
            placeholder="e.g. Curcumin 95%"
            className={`mt-3 ${fieldClass}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Requirement
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Target assay, annual volume and destination market"
          className={`mt-3 ${fieldClass} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <Button type="submit">Send Enquiry</Button>
        {sent && (
          <p role="status" className="text-sm font-light text-ink-soft">
            Your mail client should now be open with the enquiry drafted.
          </p>
        )}
      </div>
    </form>
  );
}
