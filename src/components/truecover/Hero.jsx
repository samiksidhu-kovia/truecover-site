import React from "react";

const HERO_IMG = "https://media.base44.com/images/public/6a062eb19564fba54ebe0ce6/128a29270_generated_image.png";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Happy family in front of their home"
          className="w-full h-full object-cover"
          style={{ objectPosition: "70% center" }}
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-32 md:py-0 flex items-center">
        <div className="max-w-2xl pl-4 sm:pl-6 lg:pl-8" style={{ marginLeft: "5%" }}>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Your Family's Future, Covered.
          </h1>
          <p className="mt-6 font-inter text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
            TrueCover Assurance Agency helps families and individuals protect what matters most with no-cost life insurance options, property coverage, and personalized financial planning.
          </p>
          <button
            onClick={() => scrollTo("#get-covered")}
            className="mt-8 inline-flex font-inter font-semibold text-base bg-green text-white px-8 py-4 rounded-lg hover:bg-green/90 transition-colors shadow-lg shadow-green/25"
          >
            Ask About Our No-Cost Policy
          </button>
          <p className="mt-4 font-inter text-sm text-white/70 italic">
            Up to $5,000,000 in coverage. No out-of-pocket premiums.
          </p>
        </div>
      </div>
    </section>
  );
}