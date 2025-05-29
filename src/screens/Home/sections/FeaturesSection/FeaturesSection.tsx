import React from "react";
import { Link, useLocation } from "react-router-dom";

// Navigation menu items data
const navItems = [
  { label: "Home", target: "home" },
  { label: "Features", target: "features" },
  { label: "Reviews", target: "reviews" },
  { label: "FAQ", target: "faq" },
];

export const FeaturesSection = (): JSX.Element => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-start py-[18px] px-12 w-full bg-[#06020d] z-50">
      <div className="flex items-center gap-[50px]">
        {/* Logo */}
        <Link to="/" className="flex h-8 items-center gap-1">
          <img
            className="w-[28.79px] h-[26.82px]"
            alt="Logo"
            src="https://c.animaapp.com/mb7omhnwJF9a09/img/logo.svg"
          />
          <div className="[font-family:'Sen',Helvetica] font-bold text-[#8244ff] text-[28px] tracking-[-1.12px] leading-7">
            TalkNow
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center">
          <ul className="flex gap-9">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.target.startsWith("/") ? (
                  <Link
                    to={item.target}
                    className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[15px] text-[#dcd7e4] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button 
                    onClick={() => scrollToSection(item.target)}
                    className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[15px] text-[#dcd7e4] hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
