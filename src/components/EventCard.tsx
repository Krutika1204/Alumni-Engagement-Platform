import React from 'react';

interface EventCardProps {
  title: string;
  description: string;
  image?: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="h-32 bg-gray-200 rounded-md mb-4" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default EventCard;
