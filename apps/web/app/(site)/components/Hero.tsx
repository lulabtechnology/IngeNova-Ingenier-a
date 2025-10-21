"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center gradient-accent overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="font-display text-4xl md:text-6xl font-semibold leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ingeniería para <span className="text-primary">resultados medibles</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-muted max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Integramos automatización, OEE y MEP con ejecución ágil y control de calidad. Menos riesgo, más productividad.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <a className="btn btn-primary" href="#contacto">Solicitar propuesta</a>
            <a className="btn btn-secondary" href="#proyectos">Ver proyectos</a>
          </motion.div>

          <p className="sr-only">CTAs principales: Solicitar propuesta y Ver proyectos</p>
        </div>

        <div className="relative">
          <Image
            src="/imagenes/hero-ingnov.svg"
            alt="Equipo de ingeniería revisando planos en planta moderna"
            width={880}
            height={640}
            priority
            className="w-full h-auto rounded-2xl border border-border shadow-card"
          />
        </div>
      </div>
    </section>
  );
}
