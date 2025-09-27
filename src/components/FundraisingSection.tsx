import React from 'react';
import { Lock } from 'lucide-react';

const FundraisingSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-blue-600 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
        <p className="text-lg mb-8">
          Your generous contributions help us build a stronger alumni community and support student initiatives.
        </p>
        <button className="px-8 py-3 bg-yellow-400 text-blue-900 font-bold rounded-md hover:bg-yellow-500 transition-colors mb-4">
          Donate Now
        </button>
        <div className="flex items-center justify-center text-sm text-blue-100">
          <Lock className="h-4 w-4 mr-2" />
          Secure payments powered by trusted partners.
        </div>
      </div>
    </section>
  );
};

export default FundraisingSection;
