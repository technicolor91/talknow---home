import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Card, CardContent } from "../../../../components/ui/card";

// Define testimonial data for mapping
const testimonials = [
  {
    name: "Emily C., Texas",
    role: "Tech Enthusiast",
    image:
      "https://c.animaapp.com/mb7omhnwJF9a09/img/selfie-of-a-young-caucasian-woman-1.png",
    text: "Really helpful for logging into apps when my SIM card doesn't work. I use it all the time.",
  },
  {
    name: "Brianna S., Tennessee",
    role: "Self-employed",
    image:
      "https://c.animaapp.com/mb7omhnwJF9a09/img/selfie-of-a-young-woman.png",
    text: "Talk Now saved me during a move. I didn't have a new SIM yet, but I could still receive job calls.",
  },
  {
    name: "Ashley T., Florida",
    role: "Graphic Designer",
    image:
      "https://c.animaapp.com/mb7omhnwJF9a09/img/a-young-woman-with-long-hair-sitting-at-a-caf--table--using-a-la.png",
    text: "Talk Now helped me receive messages instantly. Tried two other apps before—this one just works!",
  },
  {
    name: "Martin J., California",
    role: "Fashion Influencer",
    image:
      "https://c.animaapp.com/mb7omhnwJF9a09/img/selfie-of-a-fashionable-young-man.png",
    text: "I've been using Talk Now to stay in touch with my family overseas. The call quality is good for the price!",
  },
  {
    name: "Christopher J., Illinois",
    role: "IT Consultant",
    image:
      "https://c.animaapp.com/mb7omhnwJF9a09/img/selfie-of-a-young-man.png",
    text: "I got a second number for dating apps and it's been great. Keeps things separate and safe.",
  },
  {
    name: "Amanda N., Massachusetts",
    role: "Small Business Owner",
    image:
      "https://c.animaapp.com/mb7omhnwJF9a09/img/a-young-woman-smiling-while-using-her-smartphone-in-a-cozy-livin.png",
    text: "Honestly, I didn't expect much, but it worked well for texting my lover.",
  },
];

// Define FAQ data for mapping
const faqItems = [
  {
    question: "What is Talk Now?",
    answer: (
      <div className="flex flex-col gap-4">
        <p className="text-[#dcd7e4] text-base">
          Talk Now gives you a virtual phone number for seamless global communication. Make high-quality calls, send texts over WiFi, and keep your personal number private—without using cell minutes or paying roaming fees.
        </p>
        <div className="flex flex-col gap-2">
          <h4 className="text-[#a78fcd] font-bold text-lg">Key Features</h4>
          <ul className="flex flex-col gap-1 text-[#dcd7e4] text-base">
            <li className="flex items-start gap-2">
              <span className="text-[#8244ff] font-bold">✔</span> <span><strong>Get a Virtual Number</strong> – Get a virtual number with your preferred area code.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8244ff] font-bold">✔</span> <span><strong>Crystal-Clear Calls & Messaging</strong> – Enjoy high-quality voice calls, texting, and picture sharing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8244ff] font-bold">✔</span> <span><strong>Voicemail & Call Management</strong> – Never miss a message with built-in voicemail.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8244ff] font-bold">✔</span> <span><strong>AI Assistant</strong> – Get AI-powered conversation support for personal and professional interactions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8244ff] font-bold">✔</span> <span><strong>Privacy & Security</strong> – Communicate with confidence—your second number stays completely separate.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8244ff] font-bold">✔</span> <span><strong>Flexible Credit System</strong> – Pay only for what you need, with no hidden fees.</span>
            </li>
          </ul>
        </div>
        <p className="text-[#dcd7e4] text-base font-medium">
          Take control of your communication with Talk Now—smart, secure, and always connected.
        </p>
      </div>
    ),
  },
  {
    question: "Do I need a SIM card to use Talk Now?",
    answer: (
      <p className="text-[#dcd7e4] text-base">
        <strong>No</strong>, you don't need a SIM card to use Talk Now. Our app works entirely over the internet (Wi-Fi or mobile data), allowing you to make calls, send texts, and receive messages using a virtual number—anytime, anywhere, without needing a physical SIM card.
      </p>
    ),
  },
  {
    question: "Is my personal information secure in the app?",
    answer: (
      <p className="text-[#dcd7e4] text-base">
        <strong>Yes</strong>, personal information is secure in the app. We Talk Now prioritizes user privacy and employs industry-standard encryption methods to protect sensitive data. All personal details, including login information, are encrypted to prevent unauthorized access. We also adhere to strict security protocols to ensure that user data remains protected. The safety and privacy of personal information are fundamental priorities within our app's security framework.
      </p>
    ),
  },
  {
    question: "What platforms can I use the OTP Code Service with?",
    answer: (
      <div className="flex flex-col gap-2 text-[#dcd7e4] text-base">
        <p>
          Talk Now supports a wide range of platforms, including WhatsApp, Instagram, Tinder, and many others. To check if a specific platform is supported, please use the search function to find the relevant verification services available.
        </p>
        <p>
          If you have any questions or need further assistance, feel free to contact us at <a href="mailto:support_talknow@atlasv.com" className="text-[#8244ff] hover:underline">support_talknow@atlasv.com</a>.
        </p>
      </div>
    ),
  },
  {
    question: "Can people call or text me on my Talk Now number?",
    answer: (
      <p className="text-[#dcd7e4] text-base">
        <strong>Yes!</strong> Once you've set up your Talk Now number, anyone can call or text you just like with a regular phone number. As long as you have an active internet connection (Wi-Fi or mobile data), you'll be able to receive incoming calls and messages directly in the app. It's a convenient and reliable way to stay connected, wherever you are.
      </p>
    ),
  },
];

// Define feature cards data
const featureCards = [
  {
    title: "Private Calling & Texting",
    description: "Keep your conversations secure and private.",
    image: "https://c.animaapp.com/mb7omhnwJF9a09/img/image.png",
    content: (
      <div className="relative w-full h-[405px]">
        <div className="relative w-[442px] h-[420px] mx-auto">
          <div className="absolute w-[312px] h-[420px] top-0 left-1/2 -translate-x-1/2 rounded-[20px] border-8 border-solid border-[#9d91b633] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] [background:linear-gradient(152deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_100%),linear-gradient(0deg,rgba(6,2,13,1)_0%,rgba(6,2,13,1)_100%)]" />
          <img
            className="absolute w-[326px] h-[82px] top-[86px] left-0"
            alt="Primary section"
            src="https://c.animaapp.com/mb7omhnwJF9a09/img/primary-section-2.svg"
          />
          <img
            className="absolute w-12 h-12 top-[103px] left-3.5"
            alt="Frame"
            src="https://c.animaapp.com/mb7omhnwJF9a09/img/frame-1.svg"
          />
          <div className="absolute w-[328px] h-[82px] top-[205px] left-[114px]">
            <div className="relative w-[326px] h-[82px] bg-[url(https://c.animaapp.com/mb7omhnwJF9a09/img/primary-section.svg)] bg-[100%_100%]">
              <div className="absolute w-10 h-10 top-[21px] left-[21px]">
                <div className="relative w-8 h-9 top-px left-1">
                  <img
                    className="absolute w-8 h-5 top-4 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mb7omhnwJF9a09/img/vector.svg"
                  />
                  <img
                    className="absolute w-[21px] h-[19px] top-0 left-1.5"
                    alt="Vector stroke"
                    src="https://c.animaapp.com/mb7omhnwJF9a09/img/vector--stroke-.svg"
                  />
                  <div className="absolute w-2 h-2 top-[22px] left-3 bg-[#8244ff] rounded-[3.75px]" />
                </div>
              </div>
              <div className="absolute top-8 left-[73px] font-bold text-white text-xl tracking-[0] leading-5 whitespace-nowrap">
                No Unauthorized Uploads
              </div>
            </div>
          </div>
          <div className="absolute top-[116px] left-[74px] font-bold text-white text-xl tracking-[0] leading-5 whitespace-nowrap">
            End-to-end&nbsp;&nbsp;Encryption
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Assistance",
    description: "Get smart suggestions and automated replies.",
    content: (
      <div className="relative w-full h-[405px]">
        <div className="relative w-[453px] h-[420px] mx-auto">
          <div className="absolute w-[312px] h-[420px] top-0 left-1/2 -translate-x-1/2 rounded-[20px] overflow-hidden border-8 border-solid border-[#9d91b633] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] [background:linear-gradient(152deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_100%),linear-gradient(0deg,rgba(6,2,13,1)_0%,rgba(6,2,13,1)_100%)]">
            <div className="w-[180px] top-[30px] left-[30px] bg-[#dbd7e44c] rounded-2xl opacity-50 absolute h-[82px]" />
            <div className="w-[180px] top-[132px] left-[86px] bg-[#8244ff] rounded-2xl opacity-50 absolute h-[82px]" />
            <div className="w-[180px] top-[234px] left-[30px] bg-[#dbd7e44c] rounded-2xl opacity-50 absolute h-[82px]" />
          </div>
          <div className="absolute w-[273px] h-[72px] top-[206px] left-0 rounded-[20px] overflow-hidden border-[none] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] backdrop-blur-[14.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.5px)_brightness(100%)] [background:linear-gradient(0deg,rgba(68,68,68,0.32)_0%,rgba(68,68,68,0.32)_100%),linear-gradient(0deg,rgba(192,162,255,0.15)_0%,rgba(192,162,255,0.15)_100%)]">
            <div className="absolute w-[195px] h-6 top-[22px] left-[69px] font-bold text-[#dcd7e4] text-xl tracking-[-0.40px] leading-6">
              Smart Suggestions
            </div>
            <img
              className="absolute w-8 h-8 top-5 left-5"
              alt="Frame"
              src="https://c.animaapp.com/mb7omhnwJF9a09/img/frame-2.svg"
            />
          </div>
          <div className="absolute w-[273px] h-[72px] top-[79px] left-[180px] rounded-[20px] overflow-hidden border-[none] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] backdrop-blur-[14.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.5px)_brightness(100%)] [background:linear-gradient(0deg,rgba(68,68,68,0.32)_0%,rgba(68,68,68,0.32)_100%),linear-gradient(0deg,rgba(192,162,255,0.15)_0%,rgba(192,162,255,0.15)_100%)]">
            <div className="absolute w-[195px] h-6 top-[22px] left-[69px] font-bold text-[#dcd7e4] text-xl tracking-[-0.40px] leading-6">
              AI-Assisted Writing
            </div>
            <img
              className="absolute w-8 h-8 top-5 left-5"
              alt="Edit"
              src="https://c.animaapp.com/mb7omhnwJF9a09/img/edit-3.svg"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Spam Filter",
    description: "Block unwanted calls and messages effortlessly.",
    content: (
      <div className="relative w-full h-[405px]">
        <div className="relative w-[362px] h-[420px] mx-auto">
          <div className="absolute w-[312px] h-[420px] top-0 left-1/2 -translate-x-1/2 rounded-[20px] overflow-hidden border-8 border-solid border-[#9d91b633] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] [background:linear-gradient(152deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_100%),linear-gradient(0deg,rgba(6,2,13,1)_0%,rgba(6,2,13,1)_100%)]">
            <div className="absolute w-[94px] h-[94px] top-[58px] left-[101px] bg-[#bfa1ff26] rounded-[47px]">
              <img
                className="absolute w-[60px] h-[60px] top-[17px] left-[17px]"
                alt="Frame"
                src="https://c.animaapp.com/mb7omhnwJF9a09/img/frame-3.svg"
              />
            </div>
            <div className="absolute top-[172px] left-[102px] text-xl text-center whitespace-nowrap font-bold text-[#dcd7e4] tracking-[0] leading-5">
              Unknown
            </div>
            <div className="top-[198px] absolute left-24 font-normal text-[#dcd7e499] text-[13px] tracking-[0] leading-5 whitespace-nowrap">
              INCOMING CALL
            </div>
          </div>
          <img
            className="w-[362px] top-[246px] left-0 absolute h-[82px]"
            alt="Primary section"
            src="https://c.animaapp.com/mb7omhnwJF9a09/img/primary-section-1.svg"
          />
          <img
            className="absolute w-12 h-12 top-[263px] left-[19px]"
            alt="Frame"
            src="https://c.animaapp.com/mb7omhnwJF9a09/img/frame-1.svg"
          />
          <div className="absolute top-[276px] left-[76px] text-white text-xl tracking-[0] leading-5 whitespace-nowrap font-bold">
            Spam Detector
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Caller ID Display",
    description: "Know who's calling before you pick up",
    content: (
      <div className="relative w-full h-[405px]">
        <div className="relative w-[312px] h-[420px] mx-auto rounded-[20px] overflow-hidden border-8 border-solid border-[#9d91b633] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] [background:linear-gradient(152deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_100%),linear-gradient(0deg,rgba(6,2,13,1)_0%,rgba(6,2,13,1)_100%)]">
          <div className="absolute w-[94px] h-[94px] top-[82px] left-[101px] bg-[url(https://c.animaapp.com/mb7omhnwJF9a09/img/selfie-of-a-young-caucasian-woman.png)] bg-cover bg-[50%_50%]" />
          <div className="absolute top-[196px] left-[91px] text-xl text-center whitespace-nowrap font-bold text-[#dcd7e4] tracking-[0] leading-5">
            Kate Larson
          </div>
          <div className="top-[222px] absolute left-24 font-normal text-[#dcd7e499] text-[13px] tracking-[0] leading-5 whitespace-nowrap">
            INCOMING CALL
          </div>
        </div>
      </div>
    ),
  },
];

export const MainSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-12 bg-[#06020d]">
      {/* Hero Section */}
      <div className="w-full rounded-[20px] overflow-hidden bg-[#06020d]">
        <div className="flex flex-col items-center gap-16 pt-[72px] pb-0 px-6 md:px-24 [background:linear-gradient(174deg,rgba(6,2,13,0.7)_14%,rgba(192,162,255,0.11)_100%),linear-gradient(0deg,rgba(6,2,13,1)_0%,rgba(6,2,13,1)_100%)]">
          <div className="flex flex-col items-center gap-6 w-full">
            <h1 className="font-bold text-[#dbd7e4] text-5xl md:text-8xl text-center tracking-[-1.92px] leading-tight md:leading-[120px]">
              Your Second Number.
            </h1>
            <h2 className="font-bold text-[#8244ff] text-4xl md:text-7xl text-center tracking-[-1.44px] leading-tight md:leading-[120px]">
              Private, Flexible, Reliable.
            </h2>
            <div id="download" className="flex flex-wrap items-center justify-center gap-[30px]">
              <img
                className="w-[238px] h-20 object-cover transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 cursor-pointer"
                alt="iOS App Store"
                src="https://c.animaapp.com/mb7omhnwJF9a09/img/ios-badge.png"
              />
              <img
                className="w-[238px] h-20 object-cover transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 cursor-pointer"
                alt="Google Play Store"
                src="https://c.animaapp.com/mb7omhnwJF9a09/img/gp-badge.png"
              />
            </div>
          </div>
          <div className="w-full h-[866px] relative">
            <img
              className="mx-auto h-[864px] object-contain"
              alt="App Screenshot"
              src="https://c.animaapp.com/mb7omhnwJF9a09/img/image.png"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="flex flex-col items-center gap-[50px] py-[50px] w-full max-w-[1080px] mx-auto bg-[#06020d]">
        <h2 className="font-bold text-[#a78fcd] text-5xl text-center tracking-[-0.96px] leading-[52px]">
          Features
        </h2>

        <div className="flex flex-col items-center gap-7 w-full">
          {/* First row of feature cards */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-7 w-full">
            {featureCards.slice(0, 2).map((feature, index) => (
              <Card
                key={index}
                className="min-w-[300px] md:min-w-[658px] md:max-w-[720px] h-[480px] flex-1 bg-[#bfa1ff26] rounded-[20px] border-[1.5px] border-solid border-transparent overflow-hidden"
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-col items-start gap-2 px-9 pt-9">
                    <h3 className="font-bold text-[#dcd7e4] text-[28px] tracking-[-0.56px] leading-8">
                      {feature.title}
                    </h3>
                    <p className="font-normal text-[#a78fcd] text-xl tracking-[0] leading-6">
                      {feature.description}
                    </p>
                  </div>
                  <CardContent className="flex-1 p-0">
                    {feature.content}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Second row of feature cards */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-7 w-full">
            {featureCards.slice(2, 4).map((feature, index) => (
              <Card
                key={index}
                className="min-w-[300px] md:min-w-[658px] md:max-w-[720px] h-[480px] flex-1 bg-[#bfa1ff26] rounded-[20px] border-[1.5px] border-solid border-transparent overflow-hidden"
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-col items-start gap-2 px-9 pt-9">
                    <h3 className="font-bold text-[#dcd7e4] text-[28px] tracking-[-0.56px] leading-8">
                      {feature.title}
                    </h3>
                    <p className="font-normal text-[#a78fcd] text-xl tracking-[0] leading-6">
                      {feature.description}
                    </p>
                  </div>
                  <CardContent className="flex-1 p-0">
                    {feature.content}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="reviews" className="flex flex-col items-center gap-[50px] py-[50px] w-full bg-[#06020d]">
        <h2 className="font-bold text-[#a78fcd] text-5xl text-center tracking-[-0.96px] leading-[52px]">
          What Our Users Say
        </h2>

        <div className="relative w-full max-w-[1200px] overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#06020d] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#06020d] to-transparent z-10"></div>
          <div className="flex overflow-x-auto gap-7 pb-4 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-72 h-[284px] bg-[#bfa1ff26] rounded-[20px] border-[1.5px] border-solid border-transparent overflow-hidden"
              >
                <CardContent className="p-7 flex flex-col gap-4 h-full">
                  <div className="flex items-center gap-3 w-full">
                    <div
                      className="w-12 h-12 rounded-[999px]"
                      style={{
                        backgroundImage: `url(${testimonial.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%",
                      }}
                    />
                    <div className="flex flex-col items-start flex-1">
                      <h3 className="font-bold text-[#dcd7e4] text-[15px] tracking-[0] leading-5">
                        {testimonial.name}
                      </h3>
                      <p className="font-normal text-[#dcd7e499] text-[15px] tracking-[0] leading-5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start pt-0 pb-2 w-full opacity-80">
                    <img
                      className="self-stretch w-12"
                      alt="Line container"
                      src="https://c.animaapp.com/mb7omhnwJF9a09/img/line-container.svg"
                    />
                    <div className="flex flex-col items-start gap-3 flex-1">
                      <div className="w-[136px] h-6 relative">
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            className="absolute w-[21px] h-5 top-px"
                            style={{ left: `${i * 28 + 0.5}px` }}
                            alt="Star"
                            src="https://c.animaapp.com/mb7omhnwJF9a09/img/star-1.svg"
                          />
                        ))}
                      </div>
                      <p className="font-normal italic text-[#dcd7e4] text-base tracking-[0] leading-6">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="flex flex-col md:flex-row items-start gap-8 md:gap-24 py-[50px] w-full max-w-[1080px] mx-auto bg-[#06020d]">
        <h2 className="font-bold text-[#dbd7e4] text-5xl tracking-[-0.96px] leading-[52px] md:w-[512px]">
          Compliance and FAQ
        </h2>

        <div className="flex flex-col items-start flex-1 w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-t-[1.5px] border-[#9d91b633] py-0"
              >
                <AccordionTrigger className="py-7 font-bold text-[#dcd7e4] text-[17px] tracking-[0] leading-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer || "Content coming soon."}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
