import React from "react";
import WelcomeSection from "../components/landing-page/WelcomeSection";
import AdvisorySection from "../components/landing-page/AdvisorySection";
import InvestSection from "../components/landing-page/InvestSection";
import TaxSection from "../components/landing-page/TaxSection";
import ExpertSection from "../components/landing-page/ExpertSection";
import ScorecardSection from "../components/landing-page/ScorecardSection";
import KnowledgeBaseSection from "../components/landing-page/KnowledgeBaseSection";
import MeetingSection from "../components/landing-page/MeetingSection";

const LandingPage = () => {
  return (
    <div>
      <WelcomeSection />
      <AdvisorySection />
      <InvestSection />
      <TaxSection />
      <ExpertSection />
      <ScorecardSection />
      <KnowledgeBaseSection />
      <MeetingSection />
    </div>
  );
};

export default LandingPage;
