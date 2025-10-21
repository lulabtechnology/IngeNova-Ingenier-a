"use client";
import { useState } from "react";
import { SectionTitle } from "./Ui";

const faqs = [
  { q:"¿Cómo inician un proyecto?", a:"Diagnóstico en 10 días, roadmap y quick wins." },
  { q:"¿Qué modalidad de contratación usan?", a:"Llave en mano o por hitos, con KPIs y cronograma." },
  { q:"¿Trabajan con proveedores existentes?", a:"Sí, integramos equipos y estandarizamos interfaces." },
  { q:"¿Cómo gestionan la seguridad?", a:"Permisos, bloqueo-etiquetado y matrices de riesgo." },
  { q:"¿Qué entregables recibo?", a:"Planos, documentación, lista de materiales, manuales y capacitación." },
  { q:"¿Cómo es el soporte post-entrega?", a:"Mesa de ayuda 30–90 días según alcance." },
  { q:"¿Pueden trabajar en planta en operación?", a:"Sí, planificamos ventanas y pruebas para minimizar paradas." },
  { q:"¿Pueden firmar NDA?", a:"Sí, manejamos información sensible con protocolos." }
];

export default function FAQ(){
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="FAQ" title="Preguntas frecuentes" />
        <div className="card divide-y divide-border">
          {faqs.map((f, i)=>(
            <div key={i} className="accordion-item">
              <button
                aria-expanded={open===i}
                aria-controls={`faq-panel-${i}`}
                className="accordion-button"
                onClick={()=> setOpen(open===i ? null : i)}
              >
                <span className="font-medium">{f.q}</span>
                <span>{open===i? "–":"+"}</span>
              </button>
              {open===i && <div role="region" id={`faq-panel-${i}`} className="accordion-panel">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
