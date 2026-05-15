import React from "react";
import { Phone, Mail, Globe } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Call Us", value: "(833) 878-5233", href: "tel:8338785233" },
  { icon: Mail, label: "Email Us", value: "hello@truecover.com", href: "mailto:hello@truecover.com" },
  { icon: Globe, label: "Visit Us Online", value: "truecover.com", href: "https://truecover.com" },
];

// Chevron/parallelogram clip path for each segment
// Left: flat left, angled right
// Middle: angled both sides
// Right: angled left, flat right
const clipPaths = [
  "polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%)",
  "polygon(6% 0%, 94% 0%, 100% 50%, 94% 100%, 6% 100%, 0% 50%)",
  "polygon(12% 0%, 100% 0%, 100% 100%, 12% 100%, 0% 50%)",
];

const bgColors = [
  { base: "bg-navy", hover: "hover:bg-navy/90" },
  { base: "bg-green", hover: "hover:bg-green/90" },
  { base: "bg-navy", hover: "hover:bg-navy/90" },
];

const textColors = [
  { label: "text-white/60", value: "text-white", icon: "text-green" },
  { label: "text-white/80", value: "text-white", icon: "text-white" },
  { label: "text-white/60", value: "text-white", icon: "text-green" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <style>{`
        @keyframes floatC {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-16px) rotate(-5deg); }
        }
        .shield-float-c { animation: floatC 38s ease-in-out infinite; }
      `}</style>

      {/* Ambient shield monogram */}
      <img src="https://media.base44.com/images/public/6a062eb19564fba54ebe0ce6/88f01a108_truecoversquarelogo.png" alt="" aria-hidden="true"
        className="shield-float-c absolute pointer-events-none select-none"
        style={{ width: 280, height: 280, opacity: 0.035, top: "5%", left: "-4%", filter: "hue-rotate(140deg) saturate(2)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-navy">
            Get In Touch
          </h2>
        </div>

        {/* Chevron chain — desktop */}
        <div className="hidden sm:flex items-stretch max-w-4xl mx-auto" style={{ height: 160 }}>
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`relative flex-1 flex flex-col items-center justify-center text-center transition-opacity duration-200 hover:opacity-90 ${bgColors[i].base} ${bgColors[i].hover}`}
              style={{
                clipPath: clipPaths[i],
                marginLeft: i > 0 ? "-2.5%" : "0",
                zIndex: i === 1 ? 2 : i === 0 ? 1 : 3,
              }}
            >
              {/* Indent content for middle/right so text isn't hidden under clip */}
              <div
                className="flex flex-col items-center"
                style={{
                  paddingLeft: i === 2 ? "14%" : i === 1 ? "8%" : "4%",
                  paddingRight: i === 0 ? "14%" : i === 1 ? "8%" : "4%",
                }}
              >
                <c.icon className={`w-7 h-7 mb-2 ${textColors[i].icon}`} />
                <p className={`font-inter text-xs font-medium uppercase tracking-widest mb-1 ${textColors[i].label}`}>
                  {c.label}
                </p>
                <p className={`font-inter text-sm font-semibold ${textColors[i].value}`}>
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile fallback — stacked cards */}
        <div className="sm:hidden flex flex-col gap-4 max-w-sm mx-auto">
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-4 px-6 py-5 rounded-xl ${bgColors[i].base} transition-opacity hover:opacity-90`}
            >
              <c.icon className={`w-6 h-6 shrink-0 ${textColors[i].icon}`} />
              <div>
                <p className={`font-inter text-xs font-medium uppercase tracking-widest ${textColors[i].label}`}>
                  {c.label}
                </p>
                <p className={`font-inter text-sm font-semibold ${textColors[i].value}`}>
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}