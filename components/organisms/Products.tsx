"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/molecules/SectionHeading";
import ProductCard from "@/components/molecules/ProductCard";

const products = [
  {
    name: "TM-Axial Series",
    tagline: "Ultra-high-density axial flux motors for EV and robotics",
    badge: "Flagship",
    imageSrc: "/images/motor-axial.webp",
    specs: [
      { label: "Peak Power", value: "250 kW" },
      { label: "Peak Torque", value: "4800 Nm" },
      { label: "Efficiency", value: "98.5%" },
      { label: "IP Rating", value: "IP67" },
    ],
  },
  {
    name: "TM-Drive Series",
    tagline: "Industrial-grade BLDC motors with integrated drives",
    badge: "Industrial",
    imageSrc: "/images/motor-blue.jpg",
    specs: [
      { label: "Power Range", value: "1–75 kW" },
      { label: "Max Speed", value: "6000 RPM" },
      { label: "Voltage", value: "48–800V" },
      { label: "Cooling", value: "Liquid / Air" },
    ],
  },
  {
    name: "TM-Family Pack",
    tagline: "Scalable motor + controller solutions for OEM integration",
    badge: "OEM",
    imageSrc: "/images/motor-family.jpg",
    specs: [
      { label: "Units", value: "3–24 pack" },
      { label: "Control", value: "CAN / EtherCAT" },
      { label: "Torque", value: "Up to 12 kNm" },
      { label: "Weight", value: "From 4.2 kg" },
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-28 bg-[var(--color-bg)] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(37,99,235,0.04)_0%,transparent_70%)] blur-[60px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-16">
          <SectionHeading
            badge="Product Line"
            title="Motors engineered for every frontier"
            subtitle="From precision robotics to heavy industrial drives, every Torus Motion product is built to operate at the edge of what's possible."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.name} {...product} index={i} />
            ))}
          </div>

          {/* Bottom banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 border border-[var(--color-border)] flex flex-col md:flex-row gap-6 items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-display font-semibold text-[var(--color-text-primary)] mb-1">
                Need a custom specification?
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Our engineering team designs bespoke motor solutions for unique applications.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 text-sm font-medium rounded-xl bg-[var(--color-brand-blue)] text-white hover:bg-[var(--color-brand-blue-dark)] transition-colors duration-200"
              >
                Contact Engineering
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
