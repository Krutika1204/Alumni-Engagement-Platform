import React from 'react';
import EventCard from './EventCard';

const EventHighlightSection: React.FC = () => {
  const events = [
    {
      title: "Alumni Networking Mixer",
      description: "Connect with fellow alumni and industry professionals.",
      image: "https://via.placeholder.com/300x150/f0f0f0/cccccc?text=Alumni+Networking+Mixer",
    },
    {
      title: "Career Development Workshop",
      description: "Enhance your career prospects with expert guidance.",
      image: "https://via.placeholder.com/300x150/d0e0d0/99b299?text=Career+Development+Workshop",
    },
    {
      title: "Annual Alumni Gala",
      description: "Celebrate achievements and support the university.",
      image: "https://via.placeholder.com/300x150/e0d0c0/b29966?text=Annual+Alumni+Gala",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 overflow-x-auto pb-4">
          {events.map((event, index) => (
            <div key={index} className="min-w-[300px]">
              <EventCard title={event.title} description={event.description} image={event.image} />
              <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                RSVP / Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlightSection;
