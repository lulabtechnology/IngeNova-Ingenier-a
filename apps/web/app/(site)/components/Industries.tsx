"use client";
import { SectionTitle } from "./Ui";

const chips = ["Alimentos y Bebidas", "Energía", "Farmacéutica", "Hospitalario", "Manufactura", "Infraestructura"];

export default function Industries(){
  return (
    <section id="industrias" className="section">
      <div className="container">
        <SectionTitle eyebrow="Industrias" title="Experiencia multisectorial" />
        <div className="flex flex-wrap gap-3">
          {chips.map((c)=>(<span key={c} className="px-4 py-2 rounded-full border border-border bg-surface/70">{c}</span>))}
        </div>
      </div>
    </section>
  );
}
