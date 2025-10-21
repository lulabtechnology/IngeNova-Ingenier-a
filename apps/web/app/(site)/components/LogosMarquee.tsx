"use client";
import Image from "next/image";

const logos = [
  "logo-1","logo-2","logo-3","logo-4","logo-5","logo-6","logo-7","logo-8"
];

export default function LogosMarquee(){
  return (
    <section aria-label="Clientes tipo" className="section">
      <div className="container">
        <div className="overflow-hidden border border-border rounded-2xl py-6 bg-surface">
          <div className="marquee">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="opacity-70 hover:opacity-100 transition">
                <Image src="/imagenes/textura-blueprint.svg" alt={`Logo ficticio ${i+1}`}
                  width={140} height={48} className="w-[140px] h-[48px] object-contain mix-blend-luminosity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
