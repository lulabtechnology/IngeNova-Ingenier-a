"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#industrias", label: "Industrias" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const wp = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "50760000000"}?text=${encodeURIComponent(
    "Hola IngeNova, me gustaría agendar una llamada."
  )}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-bg/80 border-b border-border">
      <div className="container flex items-center h-16">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight">
          IngeNova <span className="text-primary">Ingeniería</span>
        </Link>

        <nav className="ml-auto hidden md:flex items-center gap-6" aria-label="Principal">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-primary transition-colors">
              {i.label}
            </a>
          ))}
          <a href={wp} className="btn btn-primary" aria-label="Agendar llamada por WhatsApp">Agendar llamada</a>
        </nav>

        <button
          aria-label="Abrir menú"
          className="ml-auto md:hidden p-2 rounded-xl border border-border"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <nav className="container py-4 grid gap-3">
            {nav.map((i) => (
              <a key={i.href} href={i.href} className="py-2" onClick={() => setOpen(false)}>{i.label}</a>
            ))}
            <a href={wp} className="btn btn-primary w-full text-center" onClick={() => setOpen(false)}>
              Agendar llamada
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
