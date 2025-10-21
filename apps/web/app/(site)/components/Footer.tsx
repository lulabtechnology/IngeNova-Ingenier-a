"use client";
export default function Footer(){
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="container py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-display text-xl font-semibold">IngeNova <span className="text-primary">Ingeniería</span></div>
          <p className="text-muted mt-2 text-sm">Ingeniería con foco en resultados medibles.</p>
        </div>
        <div>
          <div className="font-medium mb-3">Navegación</div>
          <ul className="space-y-2 text-muted">
            {["Servicios","Proyectos","Industrias","Nosotros","Blog","Contacto"].map((i)=>(<li key={i}><a href={`#${i.toLowerCase()}`}>{i}</a></li>))}
          </ul>
        </div>
        <div id="contacto">
          <div className="font-medium mb-3">Contacto</div>
          <ul className="text-muted space-y-2">
            <li>Panamá, Ciudad de Panamá</li>
            <li><a href="mailto:contacto@ingenova.demo">contacto@ingenova.demo</a></li>
            <li><a href="tel:+50760000000">+507 6000 0000</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Newsletter</div>
          <form
            onSubmit={(e)=>{e.preventDefault(); alert("¡Gracias! Te hemos suscrito (simulado).");}}
            aria-label="Formulario newsletter"
            className="flex gap-2"
          >
            <input className="flex-1 bg-bg border border-border rounded-xl px-3 py-2" type="email" required placeholder="tu@correo.com" aria-label="Correo electrónico"/>
            <button className="btn btn-secondary" type="submit">Suscribirme</button>
          </form>
          <p className="text-xs text-muted mt-3">Al suscribirte aceptas nuestro aviso legal.</p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted">© {new Date().getFullYear()} IngeNova Ingeniería — Todos los derechos reservados.</div>
    </footer>
  );
}
