"use client";
export default function FinalCTA(){
  const wp = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "50760000000"}?text=${encodeURIComponent(
    "Hola IngeNova, quiero agendar una llamada."
  )}`;
  return (
    <section className="section">
      <div className="container">
        <div className="rounded-2xl border border-border bg-gradient-to-r from-secondary/20 to-primary/20 p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl mb-3">¿Listo para acelerar tu proyecto?</h3>
          <p className="text-muted mb-6">Conversemos 20 minutos para evaluar alcance, riesgos y tiempos.</p>
          <a href={wp} className="btn btn-primary">Agendar llamada</a>
        </div>
      </div>
    </section>
  );
}
