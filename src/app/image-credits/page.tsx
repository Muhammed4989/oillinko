import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Image credits",
  alternates: { canonical: "/image-credits" },
};

export default function ImageCreditsPage() {
  return <>
    <PageHeader title="Image credits" subtitle="Equipment photographs illustrate product categories; they do not indicate current stock or manufacturer representation." />
    <section className="mx-auto max-w-6xl space-y-6 px-4 py-12 text-muted">
      <p><a className="text-accent underline" href="https://commons.wikimedia.org/wiki/File:KSB_09_Etanorm_mit_Motor_und_Frequenzumrichter.jpg">KSB Etanorm pump and motor</a> by KSB Aktiengesellschaft, Frankenthal, licensed under <a className="text-accent underline" href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</p>
      <p><a className="text-accent underline" href="https://commons.wikimedia.org/wiki/File:Pressure_gauge.jpg">Pressure gauge</a> by Omnibus-Trip, licensed under <a className="text-accent underline" href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</p>
      <p><a className="text-accent underline" href="https://commons.wikimedia.org/wiki/File:Fire_hose.jpg">Fire hose</a> by Antoine Letarte, licensed under <a className="text-accent underline" href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</p>
      <p>Images are resized and may be cropped to fit responsive layouts. Adapted presentations of CC BY-SA images are licensed under the same CC BY-SA 3.0 terms. No endorsement by the photographers or manufacturers is implied.</p>
      <p><a className="text-accent underline" href="https://commons.wikimedia.org/wiki/File:Globe-valve.JPG">Flanged globe valve</a> by Heather Smith / The Alloy Valve Stockist, licensed under <a className="text-accent underline" href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Displayed at responsive sizes; framing may vary.</p>
    </section>
  </>;
}
