import React from "react";
import { ShieldCheck, DollarSign, Users, TrendingUp } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "State of Massachusetts Licensed" },
  { icon: DollarSign, label: "No-Cost Coverage Options Available" },
  { icon: Users, label: "Family & Individual Plans" },
  { icon: TrendingUp, label: "Personalized Financial Guidance" },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon className="w-5 h-5 text-green shrink-0" />
              <span className="font-inter text-sm text-navy/70">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}