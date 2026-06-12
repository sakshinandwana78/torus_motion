"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";


const footerLinks = {
  Products: [
    "TM-Axial Series",
    "TM-Drive Series",
    "Motor Controllers",
    "Custom Solutions",
    "OEM Program",
  ],
  Technology: [
    "Axial Flux",
    "BLDC Motors",
    "Thermal Management",
    "Motor Control",
    "Test & Validation",
  ],
  Company: [
    "About Us",
    "Careers",
    "Press & Media",
    "Investors",
    "Contact",
  ],
  Support: [
    "Documentation",
    "Technical Support",
    "Warranty",
    "Distributors",
    "FAQs",
  ],
};

const socialLinks = [
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
  { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
  { icon: <Youtube size={18} />, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-6">
            
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
              Engineering the world&apos;s most advanced electric motors for the
              machines defining the next era of mobility and automation.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5">
              {[
                { icon: <Mail size={14} />, text: "engineering@torusmotion.com" },
                { icon: <Phone size={14} />, text: "+1 (800) 867-5309" },
                { icon: <MapPin size={14} />, text: "San Jose, CA 95112" },
              ].map((contact) => (
                <div
                  key={contact.text}
                  className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]"
                >
                  <span className="text-[var(--color-brand-blue-light)] flex-shrink-0">
                    {contact.icon}
                  </span>
                  {contact.text}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-bright)] transition-all duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4 className="text-xs font-mono font-semibold text-[var(--color-text-primary)] uppercase tracking-widest">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)] font-mono">
            © {new Date().getFullYear()} Torus Motion Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
