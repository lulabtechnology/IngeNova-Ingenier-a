"use client";
import Image from "next/image";
import { FadeIn, SectionTitle } from "./Ui";

const services = [
  { img:"/imagenes/servicio-oee-pro.svg", title:"Optimización OEE", points:["–18% downtime","+12% OEE","ROI < 8 meses"] },
  { img:"/imagenes/servicio-mep-pro.svg", title:"Automatización MEP", points:["BMS + sensores","HVAC inteligente","Ahorro energético"] },
  { img:"/imagenes/servicio-civil-pro.svg", title:"Ingeniería Civil", points:["Modelos estructurales","Supervisión de obra","Control de costos"] },
  { img:"/imagenes/servicio-energia-pro.svg", title:"Energía y Potencia", points:["Subestaciones","Power quality","Protecciones"] },
  { img:"/imagenes/servicio-qa-pro.svg", title:"Validación y QA", points:["IQ/OQ/PQ","Procedimientos","Trazabilidad"] },
  { img:"/imagenes/servicio-scada-pro.svg", title:"Data & SCADA", points:["Dashboards tiempo real","Alarmas e historiales","Integración PLC/OT"] }
];

export default function Services(){
  return (
    <section id="servicios" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Servicios"
          title="Soluciones de ingeniería con entrega verificable"
          subtitle="Diseño, implementación y validación para resultados que se pueden medir."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <FadeIn key={idx}>
              <article className="card p-6 h-full hover:shadow-glow transition">
                <Image src={s.img} alt={s.title} width={880} height={560}
                  className="w-full h-44 object-cover rounded-xl mb-4 border border-border" />
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
