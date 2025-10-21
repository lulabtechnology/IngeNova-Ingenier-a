"use client";
import Image from "next/image";
import { FadeIn, SectionTitle } from "./Ui";

const projects = [
  {
    img:"/imagenes/proyecto-planta.svg",
    title:"OEE en línea de envasado",
    challenge:"Disponibilidad irregular y cuellos de botella.",
    solution:"Monitoreo OT + ajustes de setpoints y SMED.",
    impact:"+12% OEE en 90 días, –18% downtime."
  },
  {
    img:"/imagenes/proyecto-puente.svg",
    title:"Refuerzo de estructura vial",
    challenge:"Fatiga en vigas y vibración lateral.",
    solution:"Modelado FEM y refuerzo con placas postensadas.",
    impact:"Vida útil +15 años; cierre de vía –40%."
  },
  {
    img:"/imagenes/proyecto-hvac.svg",
    title:"HVAC hospitalario con presión diferencial",
    challenge:"Cruce de flujos y consumo elevado.",
    solution:"BMS, válvulas VAV y lógica adaptativa.",
    impact:"–22% energía; cumplimiento ISO 14644."
  }
];

export default function Projects(){
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <SectionTitle eyebrow="Casos de éxito"
          title="Proyectos con reto, solución e impacto verificable" />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i)=>(
            <FadeIn key={i}>
              <article className="card overflow-hidden">
                <Image src={p.img} alt={p.title} width={640} height={420} className="w-full h-48 object-cover border-b border-border"/>
                <div className="p-6 space-y-2">
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="text-sm text-muted"><strong className="text-text">Reto:</strong> {p.challenge}</p>
                  <p className="text-sm text-muted"><strong className="text-text">Solución:</strong> {p.solution}</p>
                  <p className="text-sm text-muted"><strong className="text-text">Impacto:</strong> {p.impact}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
