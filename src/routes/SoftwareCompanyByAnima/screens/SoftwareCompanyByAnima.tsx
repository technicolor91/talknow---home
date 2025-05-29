import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";

export const SoftwareCompanyByAnima = (): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    { label: "Home" },
    { label: "Features" },
    { label: "Reviews" },
    { label: "Download" },
  ];

  return (
    <header className="flex items-center justify-between px-0 py-[18px] bg-[#06020d] w-full">
      <div className="flex items-center gap-[50px]">
        {/* Logo */}
        <div className="flex items-center gap-1 h-8">
          <img
            className="w-[28.79px] h-[26.82px]"
            alt="Logo"
            src="https://c.animaapp.com/mb7r83vqgitHwi/img/logo.svg"
          />
          <div className="[font-family:'Sen',Helvetica] font-bold text-[#8244ff] text-[28px] tracking-[-1.12px] leading-7 whitespace-nowrap">
            TalkNow
          </div>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-start gap-9">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="flex items-center gap-1 bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent px-0">
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#dcd7e4] text-[15px] leading-5">
                    {item.label}
                  </span>
                  <ChevronDownIcon className="w-4 h-4 text-[#dcd7e4]" />
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* CTA Button */}
      <div>
        <Button className="px-[18px] py-2 bg-[#8244ff] rounded-2xl hover:bg-[#8244ff]/90">
          <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#fbfafe] text-[15px] leading-5">
            TRY IT FREE
          </span>
        </Button>
      </div>
    </header>
  );
};
