import React from 'react';
import HeroSection from '../components/HeroSection';
import KeyFeaturesSection from '../components/KeyFeaturesSection';
import EventHighlightSection from '../components/EventHighlightSection';
import MentorshipSection from '../components/MentorshipSection';
import FundraisingSection from '../components/FundraisingSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Removed header as it is now in App.tsx */}
      <main className="flex-1 bg-gray-100">
        <HeroSection />
        <KeyFeaturesSection />
        <EventHighlightSection />
        <MentorshipSection />
        <FundraisingSection />
        <SuccessStoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
