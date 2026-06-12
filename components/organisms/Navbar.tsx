"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import NavItem from "@/components/molecules/NavItem";
import Button from "@/components/atoms/Button";
import Image from "next/image";

const navLinks = [
  { label: "Technology", href: "#technology" },
  { label: "Products", href: "#products" },
  { label: "Applications", href: "#applications" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(2,4,9,0.85)] backdrop-blur-xl border-b border-[var(--color-border)] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
           

<Image
  src="/images/B612_20260612_202517_732 (1).png"
  alt="logo"
  width={110}
  height={40}
/>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavItem key={link.href} label={link.label} href={link.href} />
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {}}
            >
              Contact
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowRight size={15} />}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[rgba(2,4,9,0.97)] backdrop-blur-xl flex flex-col pt-20 px-6 pb-10"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-display font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border-b border-[var(--color-border)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Button variant="secondary" size="lg" className="w-full justify-center">
                Contact Us
              </Button>
              <Button variant="primary" size="lg" icon={<ArrowRight size={16} />} className="w-full justify-center">
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
