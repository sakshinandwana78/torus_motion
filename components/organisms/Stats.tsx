"use client";

import StatCard from "@/components/molecules/StatCard";

const stats = [
  { value: "98", suffix: "%", label: "Peak Efficiency", description: "Industry-leading motor efficiency" },
  { value: "50", suffix: "k+", label: "Units Deployed", description: "Across global customers" },
  { value: "30", suffix: "+", label: "Countries", description: "Worldwide distribution" },
  { value: "250", suffix: " kW", label: "Max Power Output", description: "Single motor peak" },
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Full-bleed gradient strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)] via-[rgba(37,99,235,0.08)] to-[var(--color-surface)]" />
      <div className="absolute inset-0 border-y border-[var(--color-border)]" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              <StatCard {...stat} index={i} />
              {/* Divider */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[var(--color-border)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
