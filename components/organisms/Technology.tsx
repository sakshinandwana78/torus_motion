"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Thermometer, Radio, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/molecules/SectionHeading";

const techPoints = [
  {
    icon: <Layers size={18} />,
    title: "Axial Flux Architecture",
    description:
      "Disc-shaped rotor-stator geometry delivers 3× higher power density than radial-flux designs, enabling lighter, more compact motor assemblies.",
  },
  {
    icon: <Thermometer size={18} />,
    title: "Advanced Thermal Management",
    description:
      "Integrated liquid cooling channels maintain optimal operating temperature even under sustained high-load conditions.",
  },
  {
    icon: <Radio size={18} />,
    title: "Precision Magnetic Design",
    description:
      "Halbach array permanent magnets minimize cogging torque and maximize flux density for silky-smooth power delivery.",
  },
  {
    icon: <BarChart3 size={18} />,
    title: "Adaptive Vector Control",
    description:
      "Real-time field-oriented control algorithms optimize torque response across the entire RPM range with millisecond precision.",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative py-28 bg-[var(--color-bg-secondary)] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.07)_0%,transparent_70%)] blur-[80px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="relative rounded-3xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] p-2">
              <div className="rounded-2xl overflow-hidden bg-[var(--color-surface-raised)] aspect-[4/3] relative">
                <Image
                  src="/images/motor-blue.jpg"
                  alt="Torus Motion motor internal cutaway view showing axial flux technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(2,4,9,0.4)] to-transparent" />
              </div>

              {/* Label overlay */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="glass-card rounded-xl px-4 py-3 border border-[var(--color-border-bright)]">
                  <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-1">
                    Cross-Section View
                  </p>
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">
                    Axial Flux Permanent Magnet Motor
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative corner markers */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[var(--color-brand-blue)] rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[var(--color-brand-blue)] rounded-br-lg" />
          </motion.div>

          {/* Right — Content */}
          <div className="flex flex-col gap-10">
            <SectionHeading
              badge="Core Technology"
              title="Engineering at the frontier of electric propulsion"
              align="left"
            />

            <div className="flex flex-col gap-6">
              {techPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-brand-blue-light)] group-hover:border-[var(--color-brand-blue)] transition-colors duration-200 mt-0.5">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-semibold text-[var(--color-text-primary)] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom metric strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 flex-wrap"
            >
              {[
                { value: "98.5%", label: "Peak Efficiency" },
                { value: "3×", label: "Power Density" },
                { value: "< 5ms", label: "Torque Response" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex-1 min-w-[100px] glass-card rounded-2xl px-4 py-3 text-center border border-[var(--color-border)]"
                >
                  <div className="text-xl font-display font-bold gradient-text">
                    {m.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-0.5 font-mono uppercase tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
