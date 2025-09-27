import React from 'react';

const MentorshipSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <img
            src="https://via.placeholder.com/600x400/808080/ffffff?text=Alumni+Mentor"
            alt="Alumni Mentor"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="md:order-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Empower the next generation – Become a mentor.
          </h2>
          <p className="text-gray-600 mb-6">
            Share your knowledge, experience, and insights to guide students and recent graduates.
            Make a lasting impact on their careers and personal growth.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
