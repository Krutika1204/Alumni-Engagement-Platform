import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-blue-700 text-white py-20 px-4" style={{ backgroundImage: "url('https://via.placeholder.com/1500x500/3B82F6/ffffff?text=Alumni-Student+Connection')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Stay Connected. Grow Together.
        </h2>
        <p className="text-lg md:text-xl mb-8">
          A digital bridge between alumni, students, and institutions.
        </p>
        <button className="px-8 py-3 bg-yellow-400 text-blue-900 font-bold rounded-md hover:bg-yellow-500 transition-colors">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
