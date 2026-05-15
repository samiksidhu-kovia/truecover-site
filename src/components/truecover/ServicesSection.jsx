import React from "react";
import { HeartHandshake, Home, LineChart } from "lucide-react";

const services = [
  {
    icon: HeartHandshake,
    title: "Life Insurance",
    description:
      "Protect your family's financial future with coverage options designed to fit your life. Ask about our no-cost policy with up to $5,000,000 in coverage and living benefits.",
  },
  {
    icon: Home,
    title: "Property & Casualty",
    description:
      "From your home to your vehicle, we help you find the right coverage to protect the things that matter. Comprehensive policies tailored to your situation.",
  },
  {
    icon: LineChart,
    title: "Financial Planning",
    description:
      "Build a stronger financial foundation for your family. We help individuals and families create a plan to grow wealth, manage risk, and prepare for the future.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-light-gray py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-navy">
            What We Offer
          </h2>
          <p className="mt-4 font-inter text-base md:text-lg text-navy/60">
            Comprehensive coverage and financial guidance tailored to your family's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-lg border-l-[3px] border-l-gray-200 border border-gray-100 p-8 lg:p-10 transition-all duration-300 group hover:border-l-green"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <svc.icon className="w-5 h-5 text-green shrink-0" />
                <h3 className="font-poppins font-semibold text-xl text-navy">
                  {svc.title}
                </h3>
              </div>
              <p className="font-inter text-base text-navy/60 leading-relaxed mb-4">
                {svc.description}
              </p>
              <button
                onClick={() => {
                  const el = document.querySelector("#get-covered");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-inter text-sm font-medium text-green hover:text-green/80 transition-colors"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}