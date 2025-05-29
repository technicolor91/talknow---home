import {
  MessageSquareIcon,
  PhoneCallIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const Home = (): JSX.Element => {
  // Navigation items
  const navItems = ["Home", "Features", "Pricing", "Download"];

  // Features data
  const features = [
    {
      title: "Private Calling & Texting",
      description: "Secure conversations with end-to-end encryption",
      icon: <ShieldCheckIcon className="h-6 w-6 text-purple-500" />,
      badge: "End-to-end Encryption",
    },
    {
      title: "AI Assistance",
      description: "Smart filtering and automated replies",
      icon: <MessageSquareIcon className="h-6 w-6 text-purple-500" />,
      badge: "AI-Powered Filtering",
    },
    {
      title: "Spam Filter",
      description: "Block unwanted calls and messages effortlessly",
      icon: <ShieldAlertIcon className="h-6 w-6 text-purple-500" />,
      badge: "Spam Protection",
    },
    {
      title: "Caller ID Display",
      description: "Know who's calling before you pick up",
      icon: <PhoneCallIcon className="h-6 w-6 text-purple-500" />,
      badge: "Smart Suggestions",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah T.",
      location: "Tennessee",
      rating: 5,
      comment:
        "I've been using this app to keep my business and personal life separate. Works perfectly!",
      avatar: "ST",
    },
    {
      name: "James P.",
      location: "Florida",
      rating: 5,
      comment:
        "Life-changing app for dating. I can now keep my personal number private.",
      avatar: "JP",
    },
    {
      name: "Rachel C.",
      location: "California",
      rating: 5,
      comment:
        "The best part? Sell stuff online without giving out my real number. So convenient!",
      avatar: "RC",
    },
    {
      name: "Christopher J.",
      location: "Illinois",
      rating: 5,
      comment:
        "Great app with fantastic privacy features. A must-have for online safety.",
      avatar: "CJ",
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What is TalkNow?",
      answer:
        "TalkNow is a service that provides you with a second phone number for calling, texting, and voicemail.",
    },
    {
      question: "Do I need a SIM card to use TalkNow?",
      answer:
        "No, TalkNow works over your internet connection and doesn't require an additional SIM card.",
    },
    {
      question: "Is my personal information secure on the app?",
      answer:
        "Yes, we use end-to-end encryption and strict privacy protocols to keep your data safe.",
    },
    {
      question: "What platforms can use the TalkNow service and app?",
      answer: "TalkNow is available on iOS and Android devices.",
    },
    {
      question: "Can people still call me from landline numbers?",
      answer:
        "Yes, your TalkNow number works with all phone services including landlines.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#06020d] text-white">
      {/* Navigation */}
      <header className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 rounded-full h-6 w-6"></div>
          <span className="font-bold text-lg">TalkNow</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-sm hover:text-purple-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Get Started
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Second Number.
        </h1>
        <p className="text-xl md:text-2xl mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Private. Flexible. Reliable.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <Button className="bg-black border border-white hover:bg-gray-900 flex items-center gap-2">
            <img src="/apple-logo.svg" alt="Apple" className="w-5 h-5" />
            App Store
          </Button>
          <Button className="bg-black border border-white hover:bg-gray-900 flex items-center gap-2">
            <img src="/google-play.svg" alt="Google Play" className="w-5 h-5" />
            Google Play
          </Button>
        </div>
        <div className="relative h-[400px] md:h-[500px] max-w-2xl mx-auto">
          <img
            src="/phone-mockup.png"
            alt="TalkNow App Interface"
            className="absolute top-0 right-[calc(50%-70px)] h-full object-contain z-10"
          />
          <img
            src="/phone-mockup-2.png"
            alt="TalkNow App Interface"
            className="absolute top-0 left-[calc(50%-70px)] h-full object-contain"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#120d19] border-[#2a1e36] overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                    <div className="mt-1">{feature.icon}</div>
                  </div>
                  <div className="mt-4">
                    <Badge
                      variant="outline"
                      className="bg-[#1a1225] text-purple-400 border-purple-800 px-3 py-1"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  {feature.title === "Caller ID Display" && (
                    <div className="mt-4 flex justify-center">
                      <div className="bg-[#1a1225] rounded-lg p-4 w-32">
                        <Avatar className="mx-auto mb-2">
                          <AvatarImage src="/avatar.jpg" alt="Caller" />
                          <AvatarFallback className="bg-purple-800">
                            KJ
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-center text-sm font-medium">
                          Karen Johnson
                        </p>
                        <p className="text-center text-xs text-gray-400">
                          Mobile • 1m ago
                        </p>
                      </div>
                    </div>
                  )}
                  {feature.title === "Spam Filter" && (
                    <div className="mt-4 flex justify-center">
                      <div className="bg-[#1a1225] rounded-lg p-4 w-32 text-center">
                        <p className="text-sm font-medium mb-2">Unknown</p>
                        <Badge
                          variant="outline"
                          className="bg-purple-600 text-white border-none px-3 py-1"
                        >
                          Spam Detected
                        </Badge>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#120d19] border-[#2a1e36]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar>
                    <AvatarFallback className="bg-purple-800">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-300">{testimonial.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Compliance and FAQ
        </h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-[#2a1e36]"
            >
              <AccordionTrigger className="text-left py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0412] py-12 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="bg-purple-600 rounded-full h-6 w-6"></div>
              <span className="font-bold text-lg">TalkNow</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Download</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      iOS App
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Android App
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2a1e36] pt-8 text-center text-sm text-gray-400">
            <p>© 2023 TalkNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
