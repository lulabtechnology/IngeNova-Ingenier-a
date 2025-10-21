"use client";
import Image from "next/image";

const logos = [
  "logo-alpha","logo-beta","logo-gamma","logo-delta","logo-epsilon","logo-zeta","logo-eta","logo-theta"
];

export default function LogosMarquee(){
  return (
    <section aria-label="Clientes tipo" className="section">
      <div className="container">
        <div className="overflow-hidden border border-border rounded-2xl py-6 bg-surface/80">
          <div className="marquee">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="opacity-70 hover:opacity-100 transition">
                <Image src={`/imagenes/${l}.svg`} alt={`Logo ficticio ${l}`}
                  width={140} height={48} className="w-[140px] h-[48px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
