import React from "react";
import { CheckCircle2 } from "lucide-react";

const OFFER_IMG = "https://media.base44.com/images/public/6a062eb19564fba54ebe0ce6/0d4e2a909_image.png";

const benefits = [
  "Up to $5,000,000 in coverage",
  "No personal premium payments",
  "Living benefits included",
  "Flexible policy structure",
  "Estate planning built in",
];

export default function FlagshipOffer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="font-inter text-xs font-medium tracking-widest uppercase text-green">
              Our Flagship Offer
            </span>
            <h2 className="mt-4 font-poppins font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-tight">
              $5,000,000 in Life Insurance Coverage. No Out-of-Pocket Cost.
            </h2>
            <p className="mt-6 font-inter text-base md:text-lg text-white/75 leading-relaxed">
              Through our Prepaid Life Insurance Funding Program, qualified individuals and business owners can secure significant life insurance protection with no personal premium payments. Our program uses a proven structure to fund your coverage through your business, so you stay protected without tying up your cash.
            </p>

            <ul className="mt-8 space-y-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green shrink-0" />
                  <span className="font-inter text-base text-white/90">{b}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollTo("#get-covered")}
              className="mt-10 inline-flex font-inter font-semibold text-base bg-green text-white px-8 py-4 rounded-lg hover:bg-green/90 transition-colors shadow-lg shadow-green/20"
            >
              Get Started
            </button>
            <p className="mt-3 font-inter text-xs text-white/40">
              Subject to underwriting approval. Contact us for full details.
            </p>
          </div>

          {/* Image */}
          <div className="order-first md:order-last">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img
                src={OFFER_IMG}
                alt="Couple reviewing their insurance coverage together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}