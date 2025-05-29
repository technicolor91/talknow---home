import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu";

export const APrivacyPolicy = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", hasDropdown: false, link: "/" },
    { label: "Features", hasDropdown: false },
    { label: "Reviews", hasDropdown: false },
    { label: "Download", hasDropdown: false },
  ];

  return (
    <main className="flex flex-col min-h-screen items-start px-12 py-0 relative bg-[#06020d] overflow-hidden">
      {/* No header here - using the global header */}

      {/* Main Content */}
      <section className="flex items-start px-0 py-12 relative self-stretch w-full flex-[0_0_auto] z-[1]">
        <div className="flex flex-col items-start relative flex-1 grow">
          {/* Banner */}
          <div className="relative self-stretch w-full h-60 z-[1] bg-[#06020d]">
            <div className="relative w-full h-48 top-6 rounded-[22px] overflow-hidden border border-solid border-transparent [background:url(https://c.animaapp.com/mb7so03q3rPM4S/img/a-secure-home-with-a-closed-door-surrounded-by-a-tranquil-garden.png)_50%_50%_/_cover]">
              <div className="flex flex-col w-full items-start justify-end gap-3 p-6 relative top-14 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dcd7e4] text-5xl tracking-[-0.48px] leading-[52px]">
                  Privacy Policy
                </h1>
                <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#dcd7e4] text-xl tracking-[0] leading-6">
                  Last Updated: May 31, 2024
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Policy Content */}
          <Card className="flex flex-col h-[calc(100vh-300px)] items-start gap-2 p-5 relative self-stretch w-full z-0 bg-[#bfa1ff26] rounded-[22px] overflow-hidden border-none mt-0">
            <CardContent className="p-0 w-full h-full overflow-auto pr-4">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#dcd7e4] text-[17px] tracking-[0] leading-[1.5]">
                <p className="mb-4">Welcome to Talk Now!</p>
                <p className="mb-4">
                  Talk Now (the &#34;Platform&#34;) is provided and controlled
                  by AtlasV Global Pte. Ltd. (&quot;We&quot; or
                  &quot;Us&quot;). We are committed to protecting and
                  respecting your privacy. This Privacy Policy (the
                  &quot;Policy&quot;) sets out the basis on which any
                  information we collect from you, or that you provide to us,
                  will be processed by us. Please read the following carefully
                  to understand our practices regarding your information and
                  how we will handle it. By accessing or using the Platform,
                  services, applications, products, and content (collectively,
                  the &quot;Services&quot;), you acknowledge the practices
                  described in the Policy. For purposes of the Policy,
                  &quot;you&quot; and &quot;your&quot; means you as the user
                  of the Services.
                </p>
                <p className="mb-4">
                  Before you use or submit any information through or in
                  connection with our Services, please carefully review this
                  Privacy Policy. By using any part of our Services, you
                  understand that your information will be collected, used,
                  and disclosed as outlined in this Privacy Policy. If you do
                  not agree to this Privacy Policy, please do not use our
                  Services.
                </p>
                <p className="font-bold mb-2 text-xl text-[#8244ff]">SUMMARY</p>
                <p className="mb-2 font-bold">
                  - What information do we collect about you?
                </p>
                <p className="mb-4">
                  We collect and process information about you if you use the
                  Platform and interact with the Services and related content
                  such as our web pages. This includes your mobile phone
                  number(if you provide), technical and behavioral
                  information(including text content) about your use of the
                  Services.
                  <br />
                  To comply with legal and regulatory requirements, we may ask
                  for your name, physical address, and identity card. However,
                  it is not mandatory to provide this information. If you
                  choose not to provide it, we will implement the highest
                  level of precaution to prevent scams and other illegal
                  activities. However, if you want to use the service without
                  strong limitations and agree to provide this information, we
                  will collect and verify the necessary information to ensure
                  compliance with legal requirements.
                </p>
                <p className="mb-2 font-bold">
                  - How will we use the information about you?
                </p>
                <p className="mb-4">
                  We utilize the information to enhance, maintain and deliver
                  our Services. Additionally, we may employ this data to
                  ensure your safety, adhering to legal and regulatory
                  obligations.
                </p>
                <p className="mb-2 font-bold">
                  - Who do we share your information with?
                </p>
                <p className="mb-4">
                  We may share your information with third-party service
                  providers who help us to deliver the Platform, or with any
                  member of our group to improve the Platform or for internal
                  business purposes. Where and when required by law, we will
                  share your information with law enforcement agencies or
                  regulators, and with third parties pursuant to a legally
                  binding court order.
                </p>
                <p className="mb-2 font-bold">
                  - Why do we keep hold of your information?
                </p>
                <p className="mb-4">
                  We keep your information for the duration necessary to
                  provide you with services and fulfill our contractual
                  obligations and rights related to the collected information.
                  If the information is not required for providing services,
                  we retain it only as long as there is a legitimate business
                  purpose or a legal obligation to do so. Additionally, we
                  will retain your information if we deem it necessary for
                  establishing, exercising, or defending legal claims.
                </p>
                <p className="mb-2 font-bold">
                  - How will we notify you of any changes to the Policy?
                </p>
                <p className="mb-4">
                  We will use commercially reasonable efforts to generally
                  notify all users of any material changes to the Policy
                  through a notice on the Platform. However, you should look
                  at the Policy regularly to check for any changes. We will
                  also update the &quot;Last Updated&quot; date at the top of
                  the Policy, which reflects the effective date of such
                  policy. Your continued access to or use of the Services
                  after the date of the updated Policy constitutes your
                  consent to the updated Policy. If you do not consent to the
                  updated Policy, you must stop accessing or using the
                  Services.
                </p>
                <p className="font-bold mb-2 text-xl text-[#8244ff]">
                  1. The types of information we collect
                </p>
                <p className="mb-4">
                  <strong>Information you choose to provide.</strong> When you register or
                  otherwise interact with the Services, you may give us
                  information and content. We may also collect your feedback
                  about the Services if you choose to provide it. Information
                  we collect automatically. We may collect the following
                  information about you:
                  <br /><br />
                  <strong>Personal Information.</strong> In order to comply with the law in
                  different jurisdictions, local law enforcement asks us to
                  collect some information that can identify you in some
                  particular situations. You can choose not to provide but you
                  will be implemented the highest level of precaution to
                  prevent scams and other illegal activities. Therefore, if
                  you want to use the service without strong limitations and
                  agree to provide this information, we will collect and
                  verify the necessary information, such as ID Card, Driver
                  License, Passport, Phone Number, Physical address, to ensure
                  compliance with legal requirements.
                  <br /><br />
                  <strong>Technical information.</strong> We automatically collect certain
                  information from you when you access or use the Services,
                  including IP address, network type and connections, mobile
                  or device model, device manufacturer, mobile phone area,
                  application version number, operating system, information
                  about operations and behaviors performed on the device, CPU
                  and GPU information, device resolution, system language and
                  region, and information regarding your use of the Platform.
                  <br /><br />
                  <strong>Behavioral information.</strong> We also collect information
                  regarding your use of the Services, e.g., phone calling
                  acts. Information we obtain from other sources. We may
                  receive information about you from other sources, including
                  through third-party services or providers. For example, if
                  you access third-party services through the Services or
                  share information about your experience on the Services with
                  others, we may collect information from these third-party
                  services.
                  <br /><br />
                  <strong>Cookies.</strong> Cookies are small files which, when placed on your
                  device, enable us to collect certain information, including
                  personal data, from you in order to provide certain features
                  and functionality. We and our service providers and business
                  partners use Cookies to collect data and recognize you and
                  your device(s) on the Platform and elsewhere across your
                  different devices. We do this to measure the traffic and
                  functionality of our website.
                </p>
                
                {/* Continue with the rest of the sections with similar formatting */}
                <p className="font-bold mb-2 text-xl text-[#8244ff]">
                  2. How we use your information
                </p>
                <p className="mb-4">
                  We will use the information in the following ways:
                  <br /><br />
                  We may use your information to:
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>provide you with the Services;</li>
                    <li>notify you about changes to the Services;</li>
                    <li>provide you with user support;</li>
                    <li>enforce our terms, conditions, and policies;</li>
                    <li>communicate with you.</li>
                  </ul>
                  
                  As it is in our legitimate interests to be responsive to you
                  and to ensure the proper functioning of our products and
                  organization, we may use your information to:
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>improve the Platform and to ensure tools on the Platform are
                    presented in the most effective manner for you and your
                    device(s);</li>
                    <li>administer the Platform and for internal operations,
                    including troubleshooting, data analysis, testing, research,
                    statistical and survey purposes;</li>
                    <li>allow you to participate in interactive features of the
                    Platform when you choose to do so;</li>
                    <li>keep the Platform safe and secure;</li>
                    <li>develop our Platform and conduct product development;</li>
                    <li>prevent fraud and spam and enforce the law.</li>
                  </ul>
                </p>
                
                {/* Add more sections with proper formatting */}
                <p className="font-bold mb-2 text-xl text-[#8244ff]">
                  3. How we share your information
                </p>
                <p className="mb-4">
                  We don&apos;t sell any of your information and we impose
                  restrictions on how partners can use the data we provide. We
                  may disclose the categories of personal information
                  discussed above for a business purpose to selected third
                  parties in or outside your country, including with:
                  <br /><br />
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>our service providers, suppliers, and subcontractors who
                    help us run the Platform;</li>
                    <li>data analytics, crash analytics, and search engine providers
                    that assist us in the improvement and optimization of the
                    Platform.</li>
                  </ul>
                  
                  We may share your information with any member of our group, which means our subsidiaries, our ultimate
                  holding company and its subsidiaries, or companies that we
                  control, are controlled or under common control, and our
                  service providers and strategic business partners, in each
                  case in or outside your country, for the purposes set out
                  above, as permitted by applicable law, to assist in the
                  improvement and optimization of the Platform, or for our
                  internal business purposes.
                  <br /><br />
                  We may share your information with law enforcement agencies,
                  public authorities, or other organizations if legally
                  required to do so, or if we have a good faith belief that
                  such use is reasonably necessary to:
                  <br /><br />
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>comply with a legal obligation, process, or request;</li>
                    <li>enforce our Terms of Use and other agreements, policies, and
                    standards, including investigation of any potential
                    violation thereof;</li>
                    <li>detect, prevent, or otherwise address security, fraud, or
                    technical issues; or</li>
                    <li>protect the rights, property, or safety of us, our users, a
                    third party, or the public as required or permitted by law
                    (including exchanging information with other companies and
                    organizations for the purposes of fraud protection and
                    credit risk reduction);</li>
                  </ul>
                  
                  We may also disclose your information to third parties:
                  <br /><br />
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>in the event that we sell or buy any business or assets in
                    which case we may disclose your information to the
                    prospective seller or buyer of such business or assets; or</li>
                    <li>if we sell, buy, merge, are acquired by, or partner with
                    other companies or businesses, or sell some or all of our
                    assets. In such transactions, user information may be among
                    the transferred assets.</li>
                  </ul>
                  
                  In this case, we will ensure that
                  the terms of the Policy are observed and will inform you in
                  advance if the transfer implies any change to these terms.
                  Finally, we may share information otherwise with your
                  consent or at your direction.
                  <br /><br />
                  Please note that no mobile information will be shared with
                  third parties or affiliates for marketing or promotional
                  purposes. All of the categories mentioned exclude text
                  messaging originator opt-in data and consent; this
                  information will not be shared with any third parties.
                </p>
                
                {/* Continue with the rest of the content with similar formatting */}
                <p className="font-bold mb-2 text-xl text-[#8244ff]">12. Contact</p>
                <p className="mb-4">
                  Questions, comments, and requests regarding the Policy are
                  welcomed and should be addressed to:
                  <br /><br />
                  <strong>Legal Entity:</strong> AtlasV Global Pte. Ltd.
                  <br />
                  <strong>Legal Email:</strong> <a href="mailto:legal@atlasv.com" className="text-[#8244ff] hover:underline">legal@atlasv.com</a>
                  <br />
                  <strong>Support Email:</strong> <a href="mailto:support_textmaster@atlasv.com" className="text-[#8244ff] hover:underline">support_textmaster@atlasv.com</a>
                  <br />
                  <strong>Report Abuse Email:</strong> <a href="mailto:support_textmaster@atlasv.com" className="text-[#8244ff] hover:underline">support_textmaster@atlasv.com</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="relative self-stretch w-full h-12 z-0 bg-[#06020d]" />
    </main>
  );
};
