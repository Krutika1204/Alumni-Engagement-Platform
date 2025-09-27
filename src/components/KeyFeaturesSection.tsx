import React from 'react';
import FeatureCard from './FeatureCard';
import { Users, Network, Calendar, Lightbulb, PiggyBank } from 'lucide-react';

const KeyFeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Alumni Profiles",
      description: "Explore detailed profiles of alumni and their achievements.",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Connect with alumni and students for professional growth.",
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Discover and RSVP to upcoming alumni gatherings and webinars.",
    },
    {
      icon: Lightbulb,
      title: "Mentorship",
      description: "Find mentors or become one to guide the next generation.",
    },
    {
      icon: PiggyBank,
      title: "Fundraising",
      description: "Support your institution's initiatives and student scholarships.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
