"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "./Ui";

const testimonials = [
  { img:"/imagenes/testimonio-1.svg", name:"Gerente de Planta", company:"Alimentos SA", text:"Redujeron tiempos muertos y estandarizaron cambios de formato. Comunicación clara y datos a la vista." },
  { img:"/imagenes/testimonio-2.svg", name:"Facilities Manager", company:"Hospital Central", text:"El BMS bajó consumo sin comprometer presión diferencial. Entrega documentada para auditoría." },
  { img:"/imagenes/testimonio-3.svg", name:"Director de Ingeniería", company:"Infraestructura XYZ", text:"Planificación por hitos y refuerzo estructural sin cerrar completamente la vía." }
];

export default function Testimonials(){
  const [idx, setIdx] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(()=>{
    timer.current = setInterval(()=> setIdx((p)=> (p+1)%testimonials.length), 5000);
    return ()=> { if(timer.current) clearInterval(timer.current); };
  },[]);

  return (
    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Testimonios" title="Lo que dicen nuestros clientes B2B" />
        <div className="card p-6 md:p-8">
          <div className="grid md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-1">
              <Image src={testimonials[idx].img} alt={`Retrato de ${testimonials[idx].name}`}
                width={96} height={96} className="rounded-full border border-border" />
            </div>
            <div className="md:col-span-4">
              <p className="text-lg mb-3">“{testimonials[idx].text}”</p>
              <p className="text-muted">{testimonials[idx].name} — {testimonials[idx].company}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            {testimonials.map((_,i)=>(
              <button key={i} aria-label={`Ir al testimonio ${i+1}`}
                onClick={()=>setIdx(i)}
                className={`h-2 w-8 rounded-full ${i===idx? "bg-primary":"bg-border"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
