import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export const ContainerByAnima = (): JSX.Element => {
  // Form fields data
  const formFields = [
    { id: "firstName", placeholder: "First name", type: "text" },
    { id: "lastName", placeholder: "Last name", type: "text" },
    { id: "email", placeholder: "Email", type: "email" },
  ];

  // Contact information data
  const contactInfo = [
    "Mon-Fri: 9am - 5pm",
    "1234 Elm Street, Springfield, USA",
  ];

  return (
    <div className="flex items-start py-12 relative self-stretch w-full flex-[0_0_auto] z-[1]">
      <div className="flex flex-col items-start relative flex-1 grow">
        {/* Contact Form Section */}
        <section className="flex flex-col items-center gap-12 py-12 relative self-stretch w-full flex-[0_0_auto] z-[1] bg-[#06020d]">
          <div className="flex flex-col max-w-[700px] items-start gap-4 relative w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch h-10 mt-[-1.00px] font-['Outfit',Helvetica] font-semibold text-[#d7dfe4] text-[34px] text-center tracking-[0] leading-10 whitespace-nowrap">
              Get in Touch
            </h2>

            <p className="relative self-stretch font-['Outfit',Helvetica] font-normal text-[#d7dfe4] text-xl text-center tracking-[0] leading-6">
              We'd love to hear from you! Please fill out the form below.
            </p>
          </div>

          <Card className="flex flex-col max-w-[700px] h-80 items-start gap-4 relative w-full bg-transparent border-none">
            <CardContent className="p-0 w-full space-y-4">
              <div className="flex items-start gap-4 relative self-stretch w-full">
                {formFields.slice(0, 2).map((field) => (
                  <div key={field.id} className="flex-1">
                    <Input
                      id={field.id}
                      placeholder={field.placeholder}
                      type={field.type}
                      className="min-h-11 bg-[#b7d0e01f] border-transparent text-[#d0e0eb66] font-['Outfit',Helvetica] text-[15px] leading-5"
                    />
                  </div>
                ))}
              </div>

              <Input
                id="email"
                placeholder="Email"
                type="email"
                className="min-h-11 bg-[#b7d0e01f] border-transparent text-[#d0e0eb66] font-['Outfit',Helvetica] text-[15px] leading-5"
              />

              <Textarea
                id="message"
                placeholder="Placeholder"
                className="min-h-[124px] bg-[#b7d0e01f] border-transparent text-[#d0e0eb66] font-['Outfit',Helvetica] text-[15px] leading-5"
              />

              <Button className="px-4 py-2 bg-[#8244ff] rounded-lg font-['Outfit',Helvetica] font-medium text-[#000204] text-[15px] leading-5">
                Submit
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Background Image Section */}
        <section className="flex flex-col items-start pt-0 pb-12 px-0 relative self-stretch w-full flex-[0_0_auto] z-0 bg-[#06020d]">
          <div className="relative self-stretch w-full h-[698px] bg-[#06020d] border-b-[1.5px] border-transparent">
            <div className="flex flex-col w-[1568px] h-[698px] items-center justify-center gap-12 relative -left-28 [background:linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(https://c.animaapp.com/mb7r83vqgitHwi/img/a-modern-office-building-with-large-windows-and-a-welcoming-entr.png)_50%_50%_/_cover]">
              <h3 className="relative font-['Outfit',Helvetica] font-normal text-white text-5xl text-center tracking-[0] leading-[52px]">
                Your trusted partner in solutions
              </h3>

              <div className="flex flex-col max-w-[900px] items-start gap-6 px-24 py-0 relative w-full flex-[0_0_auto]">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-2 px-24 py-0 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <p className="relative flex-1 mt-[-1.00px] font-['Outfit',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-6">
                      {info}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
