"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/molecules/SectionHeading";
import FeatureCard from "@/components/molecules/FeatureCard";
import { Microscope, FlaskConical, Handshake, Award } from "lucide-react";

const reasons = [
  {
    icon: <Microscope size={18} />,
    title: "In-house R&D",
    description:
      "Our 40-strong engineering team designs, simulates, and tests every motor in-house — zero design compromises.",
  },
  {
    icon: <FlaskConical size={18} />,
    title: "Proven in the Field",
    description:
      "Over 50,000 units deployed globally across EV, aerospace, and industrial customers in 30+ countries.",
  },
  {
    icon: <Handshake size={18} />,
    title: "OEM Partnership",
    description:
      "We work as a true engineering partner — from feasibility to production-ready integration support.",
  },
  {
    icon: <Award size={18} />,
    title: "ISO 9001 & CE Certified",
    description:
      "Full quality management system certification with rigorous in-line testing on every unit shipped.",
  },
];

const differentiators = [
  "Lightest motors in class — up to 40% weight reduction",
  "Custom winding configurations on request",
  "24/7 engineering support for critical applications",
  "Global supply chain with 12-week lead times",
  "ITAR-compliant manufacturing available",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 bg-[var(--color-bg)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_70%)] blur-[80px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-16">
          <SectionHeading
            badge="Why Torus Motion"
            title="Where precision engineering meets production scale"
            subtitle="From a single prototype motor to 10,000-unit runs, we deliver without compromising on the details that matter."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((reason, i) => (
              <FeatureCard key={reason.title} {...reason} index={i} />
            ))}
          </div>

          {/* Bottom split section */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* List */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-display font-semibold text-[var(--color-text-primary)]">
                What sets us apart
              </h3>
              <div className="flex flex-col gap-3">
                {differentiators.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[var(--color-brand-blue-light)] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-[var(--color-surface)]"
            >
              <Image
                src="/images/motor-axial.webp"
                alt="Torus Motion precision axial flux motor engineering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,4,9,0.5)] to-transparent" />

              {/* Overlay stat */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-card rounded-xl p-4 border border-[var(--color-border-bright)] flex gap-6">
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-wider">
                      Units Shipped
                    </p>
                    <p className="text-2xl font-display font-bold gradient-text">50,000+</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-wider">
                      Countries
                    </p>
                    <p className="text-2xl font-display font-bold gradient-text">30+</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-wider">
                      Years
                    </p>
                    <p className="text-2xl font-display font-bold gradient-text">15+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
