import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Home } from "./screens/Home/Home";
import { FeaturesSection } from "./screens/Home/sections/FeaturesSection/FeaturesSection";
import { ContainerByAnima } from "./routes/SoftwareCompanyByAnima/screens/ContainerByAnima";
import { SoftwareCompanyWrapperByAnima } from "./routes/SoftwareCompanyByAnima/screens/SoftwareCompanyWrapperByAnima";
import { APrivacyPolicy } from "./routes/APrivacyPolicy/screens/APrivacyPolicy";
import { TermsOfUse } from "./routes/TermsOfUse/screens/TermsOfUse";

// Contact Us page component
const ContactPage = () => {
  return (
    <div className="bg-[#06020d] fade-in">
      <ContainerByAnima />
      <SoftwareCompanyWrapperByAnima />
    </div>
  );
};

// Privacy Policy page component
const PrivacyPolicyPage = () => {
  return (
    <div className="bg-[#06020d] fade-in">
      <APrivacyPolicy />
    </div>
  );
};

// Terms of Use page component
const TermsOfUsePage = () => {
  return (
    <div className="bg-[#06020d] fade-in">
      <TermsOfUse />
    </div>
  );
};

// AnimatedRoutes component to handle transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page-transition" timeout={400}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => {
  return (
    <Router>
      <FeaturesSection />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
