import React from "react";

const pillars = [
  {
    title: "We Put Your Family First",
    text: "Every policy we write starts with understanding your family's situation. We don't push products. We listen, then recommend coverage that actually fits your life.",
  },
  {
    title: "Clear Guidance, No Pressure",
    text: "Insurance can be confusing. We walk you through your options in plain language so you can make confident decisions. No jargon, no high-pressure sales.",
  },
  {
    title: "Built on Trust",
    text: "TrueCover is rooted in community and faith. We treat every client like family because that's who we are. Your protection is personal to us.",
  },
];

export default function BrandValues() {
  return (
    <section className="bg-light-gray py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-navy">
            Why TrueCover
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col">
              <div className="mb-4" style={{ width: 40, height: 3, backgroundColor: "#10B981" }} />
              <h3 className="font-poppins font-semibold text-lg text-navy mb-3">
                {p.title}
              </h3>
              <p className="font-inter text-base text-navy/60 leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}