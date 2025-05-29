import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export const ContactUsPage = (): JSX.Element => {
  // Navigation items
  const navItems = [
    { label: "Home", hasDropdown: true },
    { label: "Features", hasDropdown: true },
    { label: "Reviews", hasDropdown: true },
    { label: "Download", hasDropdown: true },
  ];

  // Footer sections
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
    <div className="flex flex-col min-h-screen bg-[#06020d] text-white">
      {/* Navigation */}
      <header className="flex items-center justify-between px-12 py-4">
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#7C3AED" />
          </svg>
          <span className="text-xl font-bold">
            <span className="text-purple-500">Talk</span>Now
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center gap-1 cursor-pointer">
              <span>{item.label}</span>
              {item.hasDropdown && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9L2 5H10L6 9Z" fill="white" />
                </svg>
              )}
            </div>
          ))}
        </nav>

        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
          TRY IT FREE
        </Button>
      </header>

      {/* Contact Form Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-3xl w-full text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
          <p className="text-gray-400">
            We'd love to hear from you! Please fill out the form below.
          </p>
        </div>

        <form className="w-full max-w-3xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="First name"
              className="bg-gray-800/50 border-0 text-white placeholder:text-gray-500"
            />
            <Input
              placeholder="Last name"
              className="bg-gray-800/50 border-0 text-white placeholder:text-gray-500"
            />
          </div>
          <Input
            placeholder="Email"
            className="bg-gray-800/50 border-0 text-white placeholder:text-gray-500"
          />
          <Textarea
            placeholder="Placeholder"
            className="bg-gray-800/50 border-0 text-white placeholder:text-gray-500 min-h-[120px]"
          />
          <div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Submit
            </Button>
          </div>
        </form>
      </main>

      {/* Company Info Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-4xl font-bold mb-8">
            Your trusted partner in solutions
          </h2>
          <div className="space-y-2">
            <p>Mon-Fri: 9am - 5pm</p>
            <p>1234 Elm Street, Springfield, USA</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#06020d] py-12 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#7C3AED" />
                </svg>
                <span className="text-xl font-bold">
                  <span className="text-purple-500">Talk</span>Now
                </span>
              </div>
            </div>

            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-medium">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
