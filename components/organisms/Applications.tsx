"use client";

import { motion } from "framer-motion";
import { Car, Bot, Factory, Plane, Ship, Tractor } from "lucide-react";
import SectionHeading from "@/components/molecules/SectionHeading";

const applications = [
  {
    icon: <Car size={24} />,
    title: "Electric Vehicles",
    description:
      "Powertrain motors for EVs, e-bikes, and urban mobility vehicles requiring compact, high-torque propulsion.",
    tags: ["Passenger EV", "E-Bike", "Last-Mile"],
  },
  {
    icon: <Bot size={24} />,
    title: "Robotics & Automation",
    description:
      "Precision servo and joint motors enabling dexterous manipulation, locomotion, and high-force actuators.",
    tags: ["Humanoid", "Cobots", "AMRs"],
  },
  {
    icon: <Factory size={24} />,
    title: "Industrial Drives",
    description:
      "Reliable, high-duty-cycle motors for conveyors, pumps, compressors, and CNC spindle drives.",
    tags: ["CNC", "Conveyors", "Pumps"],
  },
  {
    icon: <Plane size={24} />,
    title: "Aerospace & UAV",
    description:
      "Lightweight motors meeting stringent aerospace reliability standards for UAVs, eVTOL, and actuators.",
    tags: ["eVTOL", "Drones", "Actuators"],
  },
  {
    icon: <Ship size={24} />,
    title: "Marine Propulsion",
    description:
      "Waterproof, corrosion-resistant motors designed for harsh marine environments and silent operation.",
    tags: ["E-Boats", "Submersibles", "Thrusters"],
  },
  {
    icon: <Tractor size={24} />,
    title: "AgriTech & Off-Road",
    description:
      "Rugged motors built for agricultural machinery, construction equipment, and harsh outdoor environments.",
    tags: ["Tractors", "Construction", "Mining"],
  },
];

export default function Applications() {
  return (
    <section
      id="applications"
      className="relative py-28 bg-[var(--color-bg-secondary)] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(37,99,235,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-16">
          <SectionHeading
            badge="Applications"
            title="Built for the machines of tomorrow"
            subtitle="Torus Motion powers innovation across industries where performance, reliability, and weight savings are non-negotiable."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, borderColor: "rgba(96,165,250,0.3)" }}
                className="glass-card rounded-2xl p-6 border border-[var(--color-border)] group cursor-default transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[rgba(37,99,235,0.1)] border border-[rgba(96,165,250,0.15)] flex items-center justify-center text-[var(--color-brand-blue-light)] mb-5 group-hover:bg-[rgba(37,99,235,0.18)] transition-colors duration-300">
                  {app.icon}
                </div>

                <h3 className="font-display font-semibold text-[var(--color-text-primary)] mb-2">
                  {app.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {app.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
