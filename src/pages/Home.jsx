import React from "react";
import Navbar from "../components/truecover/Navbar";
import Hero from "../components/truecover/Hero";
import TrustBar from "../components/truecover/TrustBar";
import ServicesSection from "../components/truecover/ServicesSection";
import FlagshipOffer from "../components/truecover/FlagshipOffer";
import HowItWorks from "../components/truecover/HowItWorks";
import BrandValues from "../components/truecover/BrandValues";
import AboutFounder from "../components/truecover/AboutFounder";
import IntakeForm from "../components/truecover/IntakeForm";
import ContactSection from "../components/truecover/ContactSection";
import Footer from "../components/truecover/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <FlagshipOffer />
        <HowItWorks />
        <BrandValues />
        <AboutFounder />
        <IntakeForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}