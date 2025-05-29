import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";

export const TermsOfUse = (): JSX.Element => {
  return (
    <main className="flex flex-col min-h-screen items-start px-12 py-0 relative bg-[#06020d] overflow-hidden">
      {/* Main Content */}
      <section className="flex items-start px-0 py-12 relative self-stretch w-full flex-[0_0_auto] z-[1]">
        <div className="flex flex-col items-start relative flex-1 grow">
          {/* Banner */}
          <div className="relative self-stretch w-full h-60 z-[1] bg-[#06020d]">
            <div className="relative w-full h-48 top-6 rounded-[22px] overflow-hidden border border-solid border-transparent [background:url(https://c.animaapp.com/mb7t592tlXxDpF/img/a-secure-home-with-a-closed-door-surrounded-by-a-tranquil-garden.png)_50%_50%_/_cover]">
              <div className="flex flex-col w-full items-start justify-end gap-3 p-6 relative top-14 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dcd7e4] text-5xl tracking-[-0.48px] leading-[52px]">
                  Terms of Use
                </h1>
                <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#dcd7e4] text-xl tracking-[0] leading-6">
                  Last Updated: Nov 20, 2023
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Use Content */}
          <Card className="flex flex-col h-[calc(100vh-300px)] items-start gap-2 p-5 relative self-stretch w-full z-0 bg-[#bfa1ff26] rounded-[22px] overflow-hidden border-none mt-0">
            <CardContent className="p-0 w-full h-full overflow-auto pr-4">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#dcd7e4] text-[17px] tracking-[0] leading-[1.5]">
                <p className="mb-4">Thanks for using Talk Now!</p>
                <p className="mb-4">
                  These terms of Use (the "Terms") as amended from time to time govern the relationship and serve as an agreement between you and AtlasV Global Pte. Ltd. (the "Company", "we", or "us") and set forth the terms and conditions by which you may access and use Talk Now (the "App") and our related services, products and content (collectively, the "Services"). For purposes of these Terms, "you" and "your" means you as the user of the Services.
                </p>
                <p className="mb-4">
                  By using Talk Now, you're agreeing to be bound by these Terms. If you do not agree to any of the following Terms, please do not use Talk Now.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">1. Important Notice</p>
                <p className="mb-2 font-bold">1.1 NO EMERGENCY CALLING:</p>
                <p className="mb-4">
                  Do not use the outbound calling service to call emergency services. You must have alternative communications services available to place emergency calls.
                  The calling services are not a substitute for traditional wireline or wireless services and you agree that you will not use the outbound calling service to place emergency calls.
                </p>
                
                <p className="mb-2 font-bold">1.2 LEGAL COMPLIANCE:</p>
                <p className="mb-4">
                  You acknowledge and agree that:
                  <br /><br />
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>you will not use the App or Services to contact anyone in violation of applicable laws, including but not limited to the controlling the assault of non-solicited pornography and marketing act (Can-Spam Act), the telephone consumer protection act (TCPA), and regulations, rules and orders promulgated thereunder;</li>
                    <li>you must have, and will have, all necessary consents to call and/or send messages to others;</li>
                    <li>any calls and messages you send will comply with all applicable laws and all federal trade commission guidelines;</li>
                    <li>you will honor all requests to stop sending messages as required by applicable law; and</li>
                    <li>by using the App and Services, you are aware of your obligations under the Can-Spam Act, the TCPA, and other applicable laws, and you agree to abide by them in your use of the App and Services.</li>
                  </ul>
                  
                  You agree to indemnify, defend and hold harmless licensor, inbound provider, outbound provider, and their respective offices, directors, employees, agents, successors, and assigns from and against all claims, suits, demands, allegations, losses, liability, damages, fines, penalties, assessments, costs and expenses (including reasonable attorneys' fees and costs) arising out of or related to your violation of applicable laws and/or your violation of any of the foregoing.
                </p>
                
                <p className="mb-2 font-bold">1.3 LIMITED USAGE:</p>
                <p className="mb-4">
                  App and Services are for use by human operators for normal user activity and may not be used as part of automated operations or systems. You expressly acknowledge and agree that you will not, and will not allow a third party to:
                  <br /><br />
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>use the App or Services as part of automated processes or systems; or</li>
                    <li>initiate SMS messages and phone calls that:
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>collectively (1) exceed either sixty per minute or one thousand per day; or (2) are sent to more than 100 different unique contacts, and otherwise comply with message traffic parameters for person-to-person traffic as set forth in CTIA guidelines for "messaging principles and best practices" Available at https://www.ctia.org/the-wireless-industry/industry-commitments/messaging-interoperability-sms-mms, or</li>
                        <li>are not intended or designed for a conversation with or reply from the recipient.</li>
                      </ul>
                    </li>
                  </ul>
                </p>
                
                <p className="mb-2 font-bold">1.4 PROHIBITED BEHAVIOUR:</p>
                <p className="mb-4">
                  You agree not to use the App in any way that:
                  <br /><br />
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>is unlawful, illegal or unauthorized;</li>
                    <li>is defamatory of any other person;</li>
                    <li>is obscene or offensive;</li>
                    <li>infringes any copyright, database right or trademark of any other person;</li>
                    <li>advocates, promotes or assists any unlawful act such as (by way of example only) copyright infringement or computer misuse;</li>
                    <li>commits fraud or for any purpose that violates any applicable local, state, national, or foreign laws, regulations, or treaties;</li>
                    <li>violates this Agreement or creates liability for us.</li>
                  </ul>
                  
                  You shall not use the App in any manner associated with the transmission, distribution, or delivery of any unsolicited bulk or unsolicited commercial SMS, MMS including but not limited to junk mail, smishing, fraudulent messages and etc.("spam")". You may not use the App to send spam.
                  <br /><br />
                  We will define spam as messages of a certain length of duplicate content sent over the past seven days. If our anti-spam system fixes several repeated messages, we will send you a warning in the form of SMS. If you continue to send such messages, we will block your outgoing calls, SMS, MMS and notify you within the App. You should contact us via legal@vidmacom with the request of unlocking the account when you are sure that the account is blocked by mistake.
                  <br /><br />
                  We regret to inform you that subscription and in-app purchases cannot be refunded in the event of a policy violation resulting in the suspension of your number. Additionally, we can not cancel your subscription by our end, and it will be renewed until you turn it off in your iTunes Account Settings or contact Apple Support.
                  <br /><br />
                  You also shall not use the App for sending any type of messages with the content that is illegal, harmful, unwanted, inappropriate, objectionable, confirmed to be criminal misinformation, or otherwise poses threat to the public, or that violates any law and/or regulation in the country where the message recipient lives (e.g. messages related to cannabis, offers for prescription medication that cannot legally be sold over-the-counter, messages containing hate speech, malicious content, etc.). It is also prohibited to send messages related to high-risk financial services, third-party lead generation services (companies that buy, sell, or share consumer information), "get rich quick" schemes, debt collection or forgiveness, gambling, as well as messages containing "S.H.A.F.T." (sex, hate, alcohol, firearms, tobacco) use cases.
                </p>
                
                <p className="mb-2 font-bold">1.5 RECORDING FEATURE:</p>
                <p className="mb-4">
                  Specific requirements and legal considerations concerning call recording feature
                  <br /><br />
                  <span className="uppercase font-bold">YOU ARE NOT ALLOWED TO USE THE APP FOR COVERT RECORDING, ANY KIND OF SURVEILLANCE, SPYING OR SECRET COLLECTION OF DATA. YOU SHALL NOT USE THE RECORDING FUNCTION WITHOUT NOTIFYING YOUR DIALOG PARTNER BEFORE YOU START TO RECORD THE CONVERSATION.</span>
                  <br /><br />
                  Note that when you use the App to record incoming and/or outgoing calls, you must take into account and comply with all laws, rules and regulations applicable to call recording. Call recording laws, rules and regulations vary from jurisdiction to jurisdiction, and even from one region or state within the same country to another, moreover, the scope of your legal obligations applicable to each case of call recording depends on many factors such as the location where the call originates from, the location of the other party of the call, etc. Therefore, when you make a recording of any communication you are solely responsible for both the determining the scope of applicable laws, rules and regulations with respect to each recording and for compliance with them.
                  <br /><br />
                  To ensure better compliance by all our users we insist that you apply the strictest applicable legal standards with respect to each call recording you make using our App. Inter alia, you must obtain explicit consent of all call participants to the call being recorded and ensure that everyone active in a conversation is notified that the recording is taking place.
                  <br /><br />
                  You are also solely responsible for compliance with all applicable laws, rules and regulations while using any call recording. For example, it is prohibited to share call recordings with third parties or publicize them without obtaining corresponding explicit consent from all call participants.
                  <br /><br />
                  It is clarified that we may adopt, against a user who violated the present Agreement, any legal measures at our disposal pursuant to the applicable laws.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">2. Acceptance of the Terms</p>
                <p className="mb-4">
                  2.1 By accessing or using the App or Services, you confirm that you can form a binding contract with the Company, that you accept these Terms, and that you agree to comply with them. Your access to and use of our Services is also subject to our Privacy Policy, the terms of which can be found directly in the Legal section in Setting page, or where the App is made available for download, on your mobile device's applicable app store, and is incorporated herein by reference.
                  <br /><br />
                  2.2 The App and Services are only available for individuals 13 years old and over. In addition, if you are under 18 years old or the applicable age of majority in the jurisdiction you reside in, you confirm that your parent or legal guardian consents to your access or use of the Services. Please be sure your parent or legal guardian has reviewed and discussed these Terms with you.
                  <br /><br />
                  2.3 You can accept the Terms by accessing or using our Services. You understand and agree that we will treat your access or use of the Services as acceptance of the Terms from that point onwards.
                  <br /><br />
                  2.4 You should print off or save a local copy of the Terms for your records.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">3. Changes of the Terms</p>
                <p className="mb-4">
                  3.1 We amend these Terms from time to time, for instance when we update the functionality of our Services, when we combine apps or services operated by us or our affiliates into one single combined service or app, or when there are regulatory changes. We use commercially reasonable efforts to generally notify all users of any material changes to these Terms, such as through a notice within the App, however, you should look at the Terms regularly to check for such changes. We will also update the "Last Updated" date at the top of these Terms, which reflects the effective date of such Terms. Your continued access or use of the Services after the date of the new Terms constitutes your acceptance of the new Terms. If you do not agree to the new Terms, you must stop accessing or using the Services.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">4. General Terms</p>
                <p className="mb-4">
                  4.1 The App is a program designed to improve your mobile life. It provides you with an extra phone number for situations where it is not desirable to reveal your real number. Additionally, the App can facilitate calls and send SMS messages.
                  <br /><br />
                  Please note that the App is intended for personal non-commercial use only. Please use it solely for the purposes stated above.
                  <br /><br />
                  4.2 In order to use the App, you are required to have a compatible mobile phone or tablet, and internet access. We do not warrant that the App will be compatible with all hardware and software which you may use.
                  <br /><br />
                  4.3 We make no warranty that your access to the App will be uninterrupted, timely or error-free. Neither does Apple have an obligation whatsoever to furnish any maintenance and support services with respect to the App.
                  <br /><br />
                  4.4 You acknowledge that the App is provided via the internet and mobile networks and so the quality and availability of the App may be affected by factors outside our reasonable control.
                  <br /><br />
                  4.5 The version of the App may be upgraded from time to time to add support for new functions and services.
                  <br /><br />
                  4.6 We may change or update the App and anything described in it without noticing you. If the need arises, we may suspend access to the App, or close it indefinitely.
                  <br /><br />
                  4.7 You also warrant that any information that you submit to us is true, accurate and complete, and you agree to keep it actual at all times.
                  <br /><br />
                  4.8 You can discontinue using our Services at any time by choosing the relevant option in your iTunes Account Settings. If you decide not to use the App for any reason you should uninstall the App.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">5. Intellectual Property Rights</p>
                <p className="mb-4">
                  The Services are protected under the laws of copyright, patent, trademarks, and other intellectual property rights of the countries where Services are available. All copyrights in the Services are owned by us or our third-party licensors to the full extent permitted under all applicable laws. Consistent with the other terms in this document, you may not publish, reproduce, distribute, display, perform, edit, adapt, modify, or otherwise exploit any part of the Services without our written consent.
                  <br /><br />
                  5.1 You shall not make the App available to any third parties. In addition, you shall not modify, translate into other languages, reverse engineer, decompile, disassemble or otherwise create derivative works from the App or any documentation concerning the App.
                  <br /><br />
                  5.2 You shall not transfer, lend, rent, lease, distribute the App, or use it for providing services to a third party, or grant any rights to the App or any documentation concerning the App to a third party.
                  <br /><br />
                  5.3 Misuse of any trademarks or any other content displayed on the App is prohibited.
                  <br /><br />
                  5.4 You shall not copy and/or duplicate and/or distribute and/or publish and/or use any content in the App, directly or indirectly, by way of a violation of our Intellectual Property Rights.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">6. Indemnity</p>
                <p className="mb-4">
                  6.1 You agree to defend, indemnify, and hold harmless the Company, its parents, subsidiaries, and affiliates, and each of their respective officers, directors, employees, agents, assigns, and advisors from and against any and all loss, claims, liabilities, damages, costs, and expenses, including, but not limited to, attorneys' fees and expenses, arising out of a breach by you or any user of your account of these Terms or arising out of a breach of your obligations, representation, and warranties under these Terms.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">7. EXCLUSION OF WARRANTIES</p>
                <p className="mb-4">
                  7.1 NOTHING IN THESE TERMS SHALL AFFECT ANY STATUTORY RIGHTS THAT YOU CANNOT CONTRACTUALLY AGREE TO ALTER OR WAIVE AND ARE LEGALLY ALWAYS ENTITLED TO AS A CONSUMER.
                  <br /><br />
                  7.2 THE SERVICES ARE PROVIDED "AS IS" AND WE MAKE NO WARRANTY OR REPRESENTATION OF ANY KIND, EITHER EXPRESS OR IMPLIED, TO YOU WITH RESPECT TO THEM. IN PARTICULAR, WE DO NOT REPRESENT OR WARRANT TO YOU THAT:
                  <br /><br />
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>YOUR USE OF THE SERVICES WILL MEET YOUR REQUIREMENTS;</li>
                    <li>YOUR USE OF THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR FREE FROM ERROR;</li>
                    <li>ANY INFORMATION OBTAINED BY YOU AS A RESULT OF YOUR USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE; OR</li>
                    <li>DEFECTS IN THE OPERATION OR FUNCTIONALITY OF ANY SOFTWARE PROVIDED TO YOU AS PART OF THE SERVICES WILL BE CORRECTED.</li>
                  </ul>
                  
                  7.3 NO CONDITIONS, WARRANTIES OR OTHER TERMS (INCLUDING ANY IMPLIED TERMS OR WARRANTIES AS TO SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR PURPOSE, CONFORMANCE WITH DESCRIPTION, NON-INFRINGEMENT, OR OTHER VIOLATION OF RIGHTS) APPLY TO THE SERVICES EXCEPT TO THE EXTENT THAT THEY ARE EXPRESSLY SET OUT IN THE TERMS. WE MAY CHANGE, SUSPEND, WITHDRAW OR RESTRICT THE AVAILABILITY OF ALL OR ANY PART OF THE APP FOR BUSINESS AND OPERATIONAL REASONS AT ANY TIME WITHOUT NOTICE.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">8. LIMITATION OF LIABILITY</p>
                <p className="mb-4">
                  8.1 NOTHING IN THESE TERMS SHALL EXCLUDE OR LIMIT OUR LIABILITY FOR LOSSES WHICH MAY NOT BE LAWFULLY EXCLUDED OR LIMITED BY APPLICABLE LAW. THIS INCLUDES LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED DIRECTLY BY OUR NEGLIGENCE OR THE NEGLIGENCE OF OUR EMPLOYEES OR AGENTS AND FOR FRAUD OR FRAUDULENT MISREPRESENTATION.
                  <br /><br />
                  8.2 SUBJECT TO THE PARAGRAPH ABOVE, WE SHALL NOT BE LIABLE TO YOU FOR:
                  <br /><br />
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>ANY LOSS OF PROFIT (WHETHER INCURRED DIRECTLY OR INDIRECTLY);</li>
                    <li>ANY LOSS OF GOODWILL;</li>
                    <li>ANY LOSS OF OPPORTUNITY;</li>
                    <li>ANY LOSS, MISUSE, MANIPULATION OR OTHER UTILIZATION OF DATA SUFFERED BY YOU OR COMPUTER VIRUS; OR</li>
                    <li>ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES WHATSOEVER WHICH MAY BE INCURRED BY YOU.</li>
                  </ul>
                  
                  FURTHER, ANY OTHER LOSS WILL BE LIMITED TO FIFTY US DOLLARS (USD $50) OR THE EQUIVALENT AMOUNT IN YOUR LOCAL CURRENCY. ANY LOSS OR DAMAGE WHICH MAY BE INCURRED BY YOU AS A RESULT OF:
                  <br /><br />
                  <ol className="list-decimal pl-6 mb-4 space-y-1">
                    <li>ANY CHANGES WHICH WE MAY MAKE TO THE SERVICES, OR FOR ANY PERMANENT OR TEMPORARY CESSATION IN THE PROVISION OF THE SERVICES (OR ANY FEATURES WITHIN THE SERVICES);</li>
                    <li>THE DELETION OF, CORRUPTION OF, OR FAILURE TO STORE, ANY CONTENT AND OTHER COMMUNICATIONS DATA MAINTAINED OR TRANSMITTED BY OR THROUGH YOUR USE OF THE SERVICES.</li>
                  </ol>
                  
                  8.3 THESE LIMITATIONS ON OUR LIABILITY TO YOU SHALL APPLY WHETHER OR NOT WE HAVE BEEN ADVISED OF OR SHOULD HAVE BEEN AWARE OF THE POSSIBILITY OF ANY SUCH LOSSES ARISING.
                  <br /><br />
                  8.4 YOU ARE RESPONSIBLE FOR ANY MOBILE CHARGES THAT MAY APPLY TO YOUR USE OF OUR SERVICE, INCLUDING TEXT-MESSAGING AND DATA CHARGES. IF YOU'RE UNSURE WHAT THOSE CHARGES MAY BE, YOU SHOULD ASK YOUR SERVICE PROVIDER BEFORE USING THE SERVICE.
                  <br /><br />
                  8.5 WE ARE NOT RESPONSIBLE OR LIABLE FOR ANY CONTENT PUBLISHED BY US OR BY AUTHORISED THIRD PARTIES.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">9. Other Terms</p>
                <p className="mb-4">
                  9.1 Applicable Law and Jurisdiction. Any dispute related to these Terms, their subject matter, and their formation, are governed by the laws of Singapore. Any dispute arising out of or in connection with these Terms, including any question regarding existence, validity, or termination of these Terms, shall be referred to and finally resolved by arbitration administered by the Singapore International Arbitration Centre in accordance with the Arbitration Rules of the Singapore International Arbitration Centre for the time being in force, which rules are deemed to be incorporated by reference in this clause. The seat of the arbitration shall be Singapore. The Tribunal shall consist of three (3) arbitrators. The language of the arbitration shall be English.
                  <br /><br />
                  9.2 Open Source. The App contains certain open-source software. Each item of open source software is subject to its own applicable license terms.
                  <br /><br />
                  9.3 Entire Agreement. These Terms constitute the whole legal agreement between you and the Company and govern your use of the Services, superseding any prior or contemporaneous communications and proposals (whether oral, written, or electronic) between you and us.
                  <br /><br />
                  9.4 No Waiver. Our failure to enforce any provisions of these Terms or respond to a violation by any party does not waive our right to subsequently enforce any terms or conditions of the Terms or respond to any violations. Nothing contained in these Terms is in derogation of our right to comply with governmental, court, and law enforcement requests or requirements relating to your use of the Services or information provided to or gathered by us with respect to such use.
                  <br /><br />
                  9.5 Security. We do not guarantee that our Services will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programs, and app to access our Services. You should use your own virus protection software.
                  <br /><br />
                  9.6 Severability. If any court of law, having jurisdiction to decide on this matter, rules that any provision of these Terms is invalid, then that provision will be removed from the Terms without affecting the rest of the Terms, and the remaining provisions of the Terms will continue to be valid and enforceable.
                  <br /><br />
                  9.7 Third-party Content. The Services may contain links to third-party content. We do not control, endorse, sponsor, recommend, or otherwise accept responsibility for such content. Use of any linked third-party content is at the user's own risk.
                </p>
                
                <p className="mb-4">
                  <a href="mailto:legal@atlasv.com" className="text-[#8244ff] hover:underline">Contact us: legal@atlasv.com</a>
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
