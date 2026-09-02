"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { categories } from "@/lib/equipment";

type Status = "idle" | "sending" | "success" | "error";

export default function RfqForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${site.email}`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        },
      );
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setFile(null);
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded border border-line bg-oil-900 px-3 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New RFQ from oillinko.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Full name *</label>
          <input required name="name" type="text" className={input} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Company *</label>
          <input required name="company" type="text" className={input} placeholder="Company name" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Email *</label>
          <input required name="email" type="email" className={input} placeholder="you@company.com" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Phone</label>
          <input name="phone" type="tel" className={input} placeholder="+90 ..." />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Country</label>
        <input name="country" type="text" className={input} placeholder="Your country" />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Equipment category *</label>
        <select required name="category" className={input} defaultValue="">
          <option value="" disabled>
            Select a category
          </option>
          <option value="Multiple / full BOQ">Multiple categories / full BOQ</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
          <option value="Other">Other / not listed</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">
          Equipment list / BOQ file
        </label>
        <input
          name="attachment"
          type="file"
          accept=".pdf,.xlsx,.xls,.docx,.doc,.csv,.zip"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="w-full rounded border border-line bg-oil-900 px-3 py-2.5 text-sm text-muted file:mr-3 file:rounded file:border-0 file:bg-oil-700 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-foreground hover:file:bg-oil-600"
        />
        <p className="mt-1.5 text-xs text-muted">
          {file ? `Attached: ${file.name}` : "Excel, PDF or Word — your BOQ or equipment list (optional)"}
        </p>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Message *</label>
        <textarea
          required
          name="message"
          rows={5}
          className={input}
          placeholder="Describe your requirement — items, quantities, sizes, classes, required standards, target delivery..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded bg-accent px-6 py-3 font-semibold text-black transition-colors hover:bg-accent-hi disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Submit Request"}
      </button>

      {status === "success" && (
        <p className="rounded border border-green-700 bg-green-950/40 px-4 py-3 text-sm text-green-400">
          Thank you — your request has been sent. We will reply within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="rounded border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-400">
          Something went wrong. Please email us directly at{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      )}
    </form>
  );
}
