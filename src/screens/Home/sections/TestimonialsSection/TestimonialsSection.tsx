import React from "react";
import { Separator } from "../../../../components/ui/separator";
import { Link } from "react-router-dom";

export const TestimonialsSection = (): JSX.Element => {
  // Footer link data for mapping
  const footerSections = [
    {
      title: "Download",
      links: ["App Store", "Google Play"],
    },
    {
      title: "Contact",
      links: ["Support", "Privacy Policy", "Terms of Service"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers"],
    },
  ];

  return (
    <footer className="flex flex-col items-start gap-7 pt-24 pb-[50px] px-0 bg-[#06020d] w-full">
      <Separator
        className="w-full h-[1.5px] bg-contain"
        style={{
          backgroundImage:
            "url(https://c.animaapp.com/mb7omhnwJF9a09/img/frame.svg)",
        }}
      />

      <div className="flex items-start gap-[50px] w-full">
        {/* Logo section */}
        <div className="flex flex-col items-start justify-between flex-1 self-stretch">
          <div className="inline-flex h-8 items-center gap-1">
            <img
              className="w-[28.79px] h-[26.82px]"
              alt="Logo"
              src="https://c.animaapp.com/mb7omhnwJF9a09/img/logo.svg"
            />
            <div className="[font-family:'Sen',Helvetica] font-bold text-[#8244ff] text-[28px] tracking-[-1.12px] leading-7">
              TalkNow
            </div>
          </div>
        </div>

        {/* Footer link sections */}
        {footerSections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col w-[200px] items-start justify-center gap-2"
          >
            <div className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#dbd7e4] text-[15px] leading-5 mt-[-1.00px]">
              {section.title}
            </div>

            {section.links.map((link, linkIndex) => {
              if (link === "Privacy Policy") {
                return (
                  <Link 
                    key={linkIndex}
                    to="/privacy-policy"
                    className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
                  >
                    {link}
                  </Link>
                );
              } else if (link === "Terms of Service") {
                return (
                  <Link 
                    key={linkIndex}
                    to="/terms-of-use"
                    className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
                  >
                    {link}
                  </Link>
                );
              } else {
                return (
                  <div
                    key={linkIndex}
                    className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
                  >
                    {link}
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    </footer>
  );
};
