import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Separator } from "../components/ui/separator";
import { Textarea } from "../components/ui/textarea";

export const ContactUsPage = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", hasDropdown: true },
    { label: "Features", hasDropdown: true },
    { label: "Reviews", hasDropdown: true },
    { label: "Download", hasDropdown: true },
  ];

  // Footer columns data
  const footerColumns = [
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
    <div className="flex flex-col min-h-[900px] items-start px-12 py-0 relative bg-[#06020d]">
      {/* Navigation Bar */}
      <header className="items-center justify-between px-0 py-[18px] z-[2] flex relative self-stretch w-full flex-[0_0_auto] bg-[#06020d]">
        <div className="inline-flex items-center gap-[50px] relative flex-[0_0_auto]">
          {/* Logo */}
          <div className="flex-[0_0_auto] inline-flex h-8 items-center gap-1 relative">
            <img
              className="relative w-[28.79px] h-[26.82px]"
              alt="Logo"
              src="https://c.animaapp.com/mb7rt17jvhwrO8/img/logo.svg"
            />
            <div className="relative w-fit [font-family:'Sen',Helvetica] font-bold text-[#8244ff] text-[28px] tracking-[-1.12px] leading-7 whitespace-nowrap">
              TalkNow
            </div>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="items-start gap-9 inline-flex relative flex-[0_0_auto]">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="flex items-center gap-1 bg-transparent hover:bg-transparent focus:bg-transparent">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#dcd7e4] text-[15px] tracking-[0] leading-5 whitespace-nowrap">
                      {item.label}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDownIcon className="w-4 h-4" />
                    )}
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div className="inline-flex items-center gap-9 relative flex-[0_0_auto]">
          <Button className="px-[18px] py-2 bg-[#8244ff] rounded-2xl hover:bg-[#7038e0]">
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#fbfafe] text-[15px]">
              TRY IT FREE
            </span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-start px-0 py-12 relative self-stretch w-full flex-[0_0_auto] z-[1]">
        <div className="flex flex-col items-start relative flex-1 grow">
          <div className="flex flex-col items-center gap-12 px-0 py-12 relative self-stretch w-full flex-[0_0_auto] bg-[#06020d]">
            {/* Contact Form Header */}
            <div className="flex flex-col max-w-[700px] items-start gap-4 relative w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch h-10 mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#d7dfe4] text-[34px] text-center tracking-[0] leading-10 whitespace-nowrap">
                Get in Touch
              </h1>
              <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#d7dfe4] text-xl text-center tracking-[0] leading-6">
                We'd love to hear from you! Please fill out the form below.
              </p>
            </div>

            {/* Contact Form */}
            <form className="flex flex-col max-w-[700px] h-80 items-start gap-4 relative w-full">
              <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <Input
                  className="min-h-11 p-3 flex-1 bg-[#b7d0e01f] rounded-lg border-[1.5px] border-solid border-transparent text-[#d0e0eb] placeholder:text-[#d0e0eb66] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                  placeholder="First name"
                />
                <Input
                  className="min-h-11 p-3 flex-1 bg-[#b7d0e01f] rounded-lg border-[1.5px] border-solid border-transparent text-[#d0e0eb] placeholder:text-[#d0e0eb66] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                  placeholder="Last name"
                />
              </div>

              <Input
                className="min-h-11 p-3 w-full bg-[#b7d0e01f] rounded-lg border-[1.5px] border-solid border-transparent text-[#d0e0eb] placeholder:text-[#d0e0eb66] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                placeholder="Email"
              />

              <Textarea
                className="min-h-[124px] p-3 w-full bg-[#b7d0e01f] rounded-lg border-[1.5px] border-solid border-transparent text-[#d0e0eb] placeholder:text-[#d0e0eb66] [font-family:'Plus_Jakarta_Sans',Helvetica]"
                placeholder="Placeholder"
              />

              <Button
                type="submit"
                className="px-4 py-2 bg-[#8244ff] rounded-lg hover:bg-[#7038e0]"
              >
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#000204] text-[15px]">
                  Submit
                </span>
              </Button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex-col items-start gap-7 pt-24 pb-[50px] px-0 z-0 flex relative self-stretch w-full flex-[0_0_auto] bg-[#06020d]">
        <Separator className="relative self-stretch w-full h-[1.5px] mt-[-0.75px] ml-[-48.00px] mr-[-48.00px]" />

        <div className="flex items-start gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
          {/* Footer Logo */}
          <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
            <div className="inline-flex h-8 items-center gap-1 relative">
              <img
                className="relative w-[28.79px] h-[26.82px]"
                alt="Logo"
                src="https://c.animaapp.com/mb7rt17jvhwrO8/img/logo.svg"
              />
              <div className="relative w-fit [font-family:'Sen',Helvetica] font-bold text-[#8244ff] text-[28px] tracking-[-1.12px] leading-7 whitespace-nowrap">
                TalkNow
              </div>
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column, index) => (
            <div
              key={index}
              className="flex flex-col w-[200px] items-start justify-center gap-2 relative"
            >
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#dbd7e4] text-[15px] tracking-[0] leading-5">
                {column.title}
              </div>

              {column.links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] tracking-[0] leading-5"
                >
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};
