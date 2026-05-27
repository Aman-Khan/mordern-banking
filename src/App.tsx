import { Header } from './components/blocks/Header';
import { HomeHero } from './components/blocks/HomeHero';
import { MarqueeSection } from './components/blocks/MarqueeSection'; // <-- Import it here
import { SolutionsSection } from './components/blocks/SolutionsSection';
import { CloudBankingSection } from './components/blocks/CloudBankingSection';
import { EfficiencySection } from './components/blocks/EfficiencySection';
import { DigitalBankingSection } from './components/blocks/DigitalBankingSection';
import { CTASection } from './components/blocks/CTASection';
import { InsightsSection } from './components/blocks/InsightsSection';
import { Footer } from './components/blocks/Footer';
import { CaseStudyCarousel } from './components/blocks/CaseStudyCarousel';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HomeHero />
      
      {/* The scrolling ticker breaks up the sections perfectly */}
      
      <SolutionsSection />
      <CloudBankingSection />
      <EfficiencySection />
      <CTASection />
      <MarqueeSection /> 
      <DigitalBankingSection />
      <CTASection />
      <InsightsSection />
      <CaseStudyCarousel />
      <CTASection />
      <Footer/>
    </div>
  );
}

export default App;