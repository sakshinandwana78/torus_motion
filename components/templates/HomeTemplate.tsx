import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/organisms/Hero";
import Stats from "@/components/organisms/Stats";
import Technology from "@/components/organisms/Technology";
import Products from "@/components/organisms/Products";
import Applications from "@/components/organisms/Applications";
import WhyChooseUs from "@/components/organisms/WhyChooseUs";
import CTA from "@/components/organisms/CTA";
import Footer from "@/components/organisms/Footer";

export default function HomeTemplate() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <Technology />
      <Products />
      <Applications />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  );
}
