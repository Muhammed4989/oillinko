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
      const result = await res.json();
      if (!res.ok || (result.success !== true && result.success !== "true")) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setFile(null);
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded border border-line bg-oil-900 px-3 py-2.5 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none";

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

      <div className="rounded-lg border-2 border-dashed border-line bg-oil-800 p-5">
        <label htmlFor="rfq-attachment" className="mb-1.5 block text-sm font-medium">
          Equipment list / BOQ file
        </label>
        <input
          id="rfq-attachment"
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="rfq-name" className="mb-1.5 block text-sm font-medium">Full name *</label>
          <input required id="rfq-name" name="name" type="text" className={input} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="rfq-company" className="mb-1.5 block text-sm font-medium">Company *</label>
          <input required id="rfq-company" name="company" type="text" className={input} placeholder="Company name" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="rfq-email" className="mb-1.5 block text-sm font-medium">Email *</label>
          <input required id="rfq-email" name="email" type="email" className={input} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="rfq-phone" className="mb-1.5 block text-sm font-medium">Phone</label>
          <input id="rfq-phone" name="phone" type="tel" className={input} placeholder="+90 ..." />
        </div>
      </div>

      <div>
        <label htmlFor="rfq-country" className="mb-1.5 block text-sm font-medium">Country</label>
        <input id="rfq-country" name="country" type="text" className={input} placeholder="Your country" />
      </div>

      <div>
        <label htmlFor="rfq-category" className="mb-1.5 block text-sm font-medium">Equipment category</label>
        <select id="rfq-category" name="category" className={input} defaultValue="Multiple / full BOQ">
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
        <label htmlFor="rfq-message" className="mb-1.5 block text-sm font-medium">{file ? "Additional details (optional)" : "Equipment requirements *"}</label>
        <textarea
          required={!file}
          id="rfq-message"
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
        <p className="rounded border border-green-700 bg-green-50 px-4 py-3 text-sm text-green-800">
          Thank you — your request has been sent. We aim to reply within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="rounded border border-red-800 bg-red-50 px-4 py-3 text-sm text-red-800">
          Something went wrong. Please email us directly at{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      )}
    </form>
  );
}
