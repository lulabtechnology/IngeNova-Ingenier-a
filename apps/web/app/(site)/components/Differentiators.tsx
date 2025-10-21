"use client";
import Image from "next/image";
import { SectionTitle, FadeIn } from "./Ui";

const difs = [
  { img:"/imagenes/pictos-metodologia.svg", title:"Metodología", desc:"Diagnóstico → pruebas → piloto → despliegue. Hitos claros y control de cambios." },
  { img:"/imagenes/pictos-qa.svg", title:"Calidad", desc:"Procedimientos IQ/OQ/PQ y validación documental para auditorías." },
  { img:"/imagenes/pictos-tiempo.svg", title:"Tiempos", desc:"Ruta crítica protegida y ventanas coordinadas con operación." },
  { img:"/imagenes/pictos-compliance.svg", title:"Compliance", desc:"Seguridad eléctrica, GMP, ISO, normativas locales." }
];

export default function Differentiators(){
  return (
    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Por qué IngeNova"
          title="Diferenciadores que reducen riesgos"
          subtitle="Procesos y estándares para entregar a tiempo y con calidad." />
        <div className="grid md:grid-cols-4 gap-6">
          {difs.map((d, i)=>(
            <FadeIn key={i}>
              <article className="card p-6 text-center h-full">
                <Image src={d.img} alt={d.title} width={88} height={88} className="mx-auto mb-3"/>
                <h3 className="font-display mb-1">{d.title}</h3>
                <p className="text-muted text-sm">{d.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
