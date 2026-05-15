import React from "react";

const LOGO = "https://media.base44.com/images/public/6a062eb19564fba54ebe0ce6/e91e0fd20_truecoverlogo.png";

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with copyright and links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-inter text-xs text-white/50">
            © 2026 TrueCover Assurance Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-inter text-xs text-white/50 hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="font-inter text-xs text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-xs text-white/50 hover:text-white transition-colors">
              Disclaimers
            </a>
          </div>
        </div>

        {/* Bottom bar with powered by */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="font-inter text-xs text-white/50">
            Powered by{" "}
            <a
              href="https://koviacreative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors"
              style={{ "--hover-color": "#b38966" }}
              onMouseEnter={(e) => e.target.style.color = "#b38966"}
              onMouseLeave={(e) => e.target.style.color = "white"}
            >
              KOVIA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}