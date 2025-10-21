"use client";
import Image from "next/image";
import { FadeIn, SectionTitle } from "./Ui";

const services = [
  { img:"/imagenes/servicio-oee.svg", title:"Optimización OEE", points:["–18% downtime","+12% OEE","ROI < 8 meses"] },
  { img:"/imagenes/servicio-mep.svg", title:"Automatización MEP", points:["BMS + sensores","HVAC inteligente","Ahorro energético"] },
  { img:"/imagenes/servicio-civil.svg", title:"Ingeniería Civil", points:["Planos y cálculo","Supervisión de obra","Control de costos"] },
  { img:"/imagenes/servicio-energia.svg", title:"Energía y Potencia", points:["Subestaciones","Power quality","Protecciones"] },
  { img:"/imagenes/servicio-qa.svg", title:"Validación y QA", points:["IQ/OQ/PQ","Procedimientos","Trazabilidad"] },
  { img:"/imagenes/servicio-scada.svg", title:"Data & SCADA", points:["Dashboards en tiempo real","Alarmas y historiales","Integración PLC/OT"] }
];

export default function Services(){
  return (
    <section id="servicios" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Servicios"
          title="Soluciones de ingeniería orientadas a desempeño"
          subtitle="Implementamos mejoras con impacto en seguridad, disponibilidad y costo total de operación."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <FadeIn key={idx}>
              <article className="card p-6 h-full">
                <Image src={s.img} alt={s.title} width={480} height={320} className="w-full h-40 object-cover rounded-xl mb-4 border border-border" />
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <ul className="text-muted space-y-1">
                  {s.points.map((p,i)=>(<li key={i}>• {p}</li>))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
