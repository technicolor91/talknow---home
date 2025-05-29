import React from "react";
import { Separator } from "../components/ui/separator";

export const SoftwareCompanyWrapperByAnima = (): JSX.Element => {
  // Define footer sections data for mapping
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
    <footer className="flex flex-col items-start gap-7 pt-24 pb-[50px] px-0 z-0 relative w-full bg-[#06020d]">
      <Separator className="w-full h-[1.5px] mt-[-0.75px] object-cover" />

      <div className="flex items-start gap-[50px] relative self-stretch w-full">
        {/* Logo section */}
        <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
          <div className="inline-flex h-8 items-center gap-1 relative">
            <img
              className="relative w-[28.79px] h-[26.82px]"
              alt="Logo"
              src="https://c.animaapp.com/mb7r83vqgitHwi/img/logo.svg"
            />
            <div className="relative w-fit font-['Sen',Helvetica] font-bold text-[#8244ff] text-[28px] tracking-[-1.12px] leading-7 whitespace-nowrap">
              TalkNow
            </div>
          </div>
        </div>

        {/* Footer sections */}
        {footerSections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col w-[200px] items-start justify-center gap-2 relative"
          >
            <div className="relative self-stretch mt-[-1.00px] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#dbd7e4] text-[15px] tracking-[0] leading-5">
              {section.title}
            </div>

            {section.links.map((link, linkIndex) => (
              <div
                key={linkIndex}
                className="relative self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] tracking-[0] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
              >
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
