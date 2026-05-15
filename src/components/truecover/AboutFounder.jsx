import React from "react";
import { Shield } from "lucide-react";

export default function AboutFounder() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="w-full max-w-md aspect-[3/4] bg-light-gray rounded-2xl flex flex-col items-center justify-center">
              <Shield className="w-20 h-20 text-navy/20" strokeWidth={1.2} />
              <span className="mt-3 font-poppins font-bold text-navy/30 text-lg tracking-tight">TrueCover</span>
            </div>
            <p className="font-inter text-sm text-navy/40 italic">Photo coming soon.</p>
          </div>

          {/* Text */}
          <div>
            <span className="font-inter text-xs font-medium tracking-widest uppercase text-green">
              Meet the Founder
            </span>
            <h2 className="mt-3 font-poppins font-semibold text-3xl md:text-4xl text-navy">
              Nahshon Cole
            </h2>
            <p className="mt-2 font-inter text-base font-medium text-navy/50">
              Founder & Principal, TrueCover Assurance Agency
            </p>
            <p className="mt-6 font-inter text-base text-navy/70 leading-relaxed">
              TrueCover Assurance Agency was founded with a simple mission: make sure every family has access to the protection they deserve. Nahshon Cole brings a personal, hands-on approach to insurance, treating every client like family. Whether you're looking for life coverage, property protection, or help building a financial plan, Nahshon and the TrueCover team are here to walk you through every step.
            </p>
            <p className="mt-4 font-inter text-base text-navy/70 leading-relaxed">
              TrueCover operates as a branch of Yasharahla Ministries Inc., a network dedicated to empowering lives through faith, education, and financial support. Every policy we write is rooted in the belief that protecting your family is one of the most important things you can do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}