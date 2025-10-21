"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-accent">
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="container grid lg:grid-cols-2 gap-10 items-center relative">
        <div>
          <motion.h1
            className="font-display text-4xl md:text-6xl font-semibold leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ingeniería con <span className="text-primary">impacto medible</span> en operación
          </motion.h1>
          <motion.p
            className="mt-5 text-lg text-muted max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            OEE, MEP, SCADA y energía. Hitos claros, riesgos controlados y ROI en meses, no años.
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
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src="/imagenes/hero-ingenieria.svg"
            alt="Equipo de ingeniería con cascos revisando planos, tableros y maquinaria"
            width={960}
            height={700}
            priority
            className="w-full h-auto rounded-2xl border border-border shadow-glow"
          />
        </motion.div>
      </div>
    </section>
  );
}
