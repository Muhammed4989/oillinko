"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { site } from "@/lib/site";
import { categories } from "@/lib/equipment";
import { originCountries, sectors } from "@/lib/catalogue";

type Status = "idle" | "sending" | "success" | "error";
const subscribeOrigin = (callback: () => void) => { window.addEventListener("popstate",callback); return () => window.removeEventListener("popstate",callback); };
const originSnapshot = () => new URLSearchParams(window.location.search).get("origin")?.slice(0,100) ?? "";
const emptyOrigin = () => "";

export default function RfqForm({ initialCategory = "Multiple / full BOQ", initialItem = "", initialKind = "", initialOrigin = "", sourcePage = "/rfq" }: { initialCategory?: string; initialItem?: string; initialKind?: string; initialOrigin?: string; sourcePage?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const pending = useRef(false);
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState(initialCategory);
  const [item, setItem] = useState(initialItem);
  const [kind, setKind] = useState(initialKind);
  const requestedOrigin = useSyncExternalStore(subscribeOrigin,originSnapshot,emptyOrigin);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending.current || status === "success") return;
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    pending.current = true;
    setStatus("sending");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 30000);

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${site.email}`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
          signal: controller.signal,
        },
      );
      const result = await res.json();
      if (!res.ok || (result?.success !== true && result?.success !== "true")) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      pending.current = false;
    }
  }

  const input =
    "w-full rounded border border-line bg-oil-900 px-3 py-2.5 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none";

  return (
    <>
    <p id="rfq-status" role="status" aria-live="polite" aria-atomic="true" className="sr-only">{status === "sending" ? "Sending your request." : status === "success" ? "The form service accepted your request for processing. This does not confirm delivery to the team’s inbox. Your entries remain in the form." : ""}</p>
    <form onSubmit={handleSubmit} className="space-y-5" aria-busy={status === "sending"}>
      <fieldset disabled={status === "sending" || status === "success"} className="min-w-0 space-y-5">
      <legend className="sr-only">Your request for quotation</legend>
      <input type="hidden" name="_subject" value="New RFQ from oillinko.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="source_page" value={sourcePage} />
      <p className="rounded-lg border border-line bg-white p-4 text-sm text-muted">Your enquiry goes to the Oillinko team. We review your requirements and coordinate sourcing with you.</p>
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="rounded-lg border-2 border-dashed border-line bg-oil-800 p-5">
        <label htmlFor="rfq-attachment" className="mb-1.5 block text-sm font-medium">
          Equipment list / BOQ / service scope
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
          {file ? `Attached: ${file.name}` : "Excel, PDF or Word — your BOQ, specification or service scope (optional)"}
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
        <label htmlFor="rfq-country" className="mb-1.5 block text-sm font-medium">Delivery country / service location</label>
        <input id="rfq-country" name="delivery_country" type="text" className={input} placeholder="Where is the equipment or service needed?" />
      </div>

      <div>
        <label htmlFor="rfq-category" className="mb-1.5 block text-sm font-medium">Equipment / service category</label>
        <select id="rfq-category" name="category" className={input} value={category} onChange={e => { setCategory(e.target.value); setItem(""); setKind(""); }}>
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
        <label htmlFor="rfq-kind" className="mb-1.5 block text-sm font-medium">What does your request include?</label>
        <select id="rfq-kind" name="requirement_type" value={kind} onChange={e => setKind(e.target.value)} className={input}>
          <option value="">Select if applicable</option><option value="Equipment">Equipment / materials supply</option><option value="Service">Service / field execution</option><option value="Software">Software licensing / support</option><option value="Mixed">Mixed equipment and services</option>
        </select>
      </div>
      <div>
        <label htmlFor="rfq-item" className="mb-1.5 block text-sm font-medium">Equipment / service / model reference</label>
        <input id="rfq-item" name="equipment_or_service" value={item} onChange={e => setItem(e.target.value)} className={input} placeholder="Selected equipment, service, model or part number" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="rfq-origin" className="mb-1.5 block text-sm font-medium">Required country of origin</label><input key={initialOrigin || requestedOrigin} id="rfq-origin" name="required_manufacturing_origin" list="origin-countries" defaultValue={initialOrigin || requestedOrigin} className={input} placeholder="No preference, or specify a country" /><datalist id="origin-countries">{originCountries.map(c=><option key={c} value={c}/>)}</datalist><p className="mt-2 text-xs text-muted">Product manufacturing origin, separate from delivery country. Subject to confirmation.</p></div>
        <div><label htmlFor="rfq-origins-excluded" className="mb-1.5 block text-sm font-medium">Excluded origins / alternatives</label><input id="rfq-origins-excluded" name="origin_restrictions" className={input} placeholder="Specify restrictions or acceptable alternatives" /></div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="rfq-sector" className="mb-1.5 block text-sm font-medium">Industry sector</label><select id="rfq-sector" name="industry_sector" className={input} defaultValue=""><option value="">Select if applicable</option>{sectors.map(s=><option key={s.id}>{s.name}</option>)}</select></div>
        <div><label htmlFor="rfq-date" className="mb-1.5 block text-sm font-medium">Required delivery / service date</label><input id="rfq-date" name="required_date" type="date" className={input}/></div>
      </div>
      <div>
        <label htmlFor="rfq-message" className="mb-1.5 block text-sm font-medium">{file ? "Additional details (optional)" : "Equipment or service requirements *"}</label>
        <textarea
          required={!file}
          id="rfq-message"
          name="message"
          rows={5}
          className={input}
          placeholder="Equipment: items, quantities and specifications. Services: asset, work scope, site, dates, responsibilities and required deliverables."
        />
      </div>

      <button
        type="submit" aria-describedby={status === "error" ? "rfq-error" : undefined}
        disabled={status === "sending" || status === "success"}
        className="w-full rounded bg-accent px-6 py-3 font-semibold text-black transition-colors hover:bg-accent-hi disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : status === "success" ? "Request accepted" : "Submit Request"}
      </button>
      </fieldset>

      {status === "success" && (
        <div className="rounded border border-green-700 bg-green-50 px-4 py-3 text-sm text-green-800">
          <p>The form service accepted your request for processing. This does not confirm delivery to the team&apos;s inbox. Your entries remain in the form so you can keep a copy until the team replies.</p>
          <button type="button" className="mt-3 font-semibold underline" onClick={(event) => {
            event.currentTarget.form?.reset();
            setFile(null);
            setCategory(initialCategory);
            setItem(initialItem);
            setKind(initialKind);
            setStatus("idle");
          }}>Start another request</button>
        </div>
      )}
      {status === "error" && (
        <p id="rfq-error" role="alert" className="rounded border border-red-800 bg-red-50 px-4 py-3 text-sm text-red-800">
          We could not confirm that your request was accepted. Your entries and attachment are still here. Resending may create a duplicate. You can contact us directly at{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      )}
    </form>
    </>
  );
}
