import React from "react";

const steps = [
  {
    num: "01",
    title: "Reach Out",
    desc: "Fill out our short intake form or give us a call. We'll learn about your situation and what kind of coverage makes sense for you.",
  },
  {
    num: "02",
    title: "Get Matched",
    desc: "We review your needs and match you with the right coverage options. No pressure, no pushy sales tactics. Just clear guidance.",
  },
  {
    num: "03",
    title: "Get Covered",
    desc: "Once you're comfortable, we handle the paperwork and get your policy in place. You're protected, and your family's future is secured.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <style>{`
        @keyframes dashFlow {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        .animated-dash {
          animation: dashFlow 25s linear infinite;
        }
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) rotate(4deg); }
          50% { transform: translateY(-14px) rotate(-4deg); }
        }
        .shield-float-a { animation: floatA 34s ease-in-out infinite; }
        .shield-float-b { animation: floatB 41s ease-in-out infinite; }
      `}</style>

      {/* Ambient shield monograms */}
      <img src="https://media.base44.com/images/public/6a062eb19564fba54ebe0ce6/88f01a108_truecoversquarelogo.png" alt="" aria-hidden="true"
        className="shield-float-a absolute pointer-events-none select-none"
        style={{ width: 260, height: 260, opacity: 0.035, top: "10%", right: "-3%", filter: "hue-rotate(140deg) saturate(2)" }} />
      <img src="https://media.base44.com/images/public/6a062eb19564fba54ebe0ce6/88f01a108_truecoversquarelogo.png" alt="" aria-hidden="true"
        className="shield-float-b absolute pointer-events-none select-none"
        style={{ width: 200, height: 200, opacity: 0.03, bottom: "8%", left: "-2%", filter: "hue-rotate(140deg) saturate(2)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-navy">
            How It Works
          </h2>
          <p className="mt-4 font-inter text-base md:text-lg text-navy/60">
            Getting covered is simple. Here's what to expect.
          </p>
        </div>

        {/* Steps with SVG connector (desktop only) */}
        <div className="relative">
          {/* Animated SVG dashed wave line — desktop only */}
          <div className="hidden md:block absolute left-0 right-0 pointer-events-none" style={{ top: "16px", height: 40 }}>
            <svg
              viewBox="0 0 800 40"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Wave from step 01 to 02: symmetric gaps, equal length */}
              <path
                d="M 158 20 C 230 5, 303 35, 375 20"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray="8 6"
                strokeLinecap="round"
                className="animated-dash"
              />
              {/* Wave from step 02 to 03: symmetric gaps, equal length */}
              <path
                d="M 425 20 C 497 5, 570 35, 642 20"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray="8 6"
                strokeLinecap="round"
                className="animated-dash"
                style={{ animationDelay: "-12.5s" }}
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green/10 mb-6">
                  <span className="font-poppins font-bold text-2xl text-green">{step.num}</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-navy mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-base text-navy/60 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}