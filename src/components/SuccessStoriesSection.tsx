import React from 'react';

interface SuccessStoryCardProps {
  quote: string;
  author: string;
  title: string;
  image: string;
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({ quote, author, title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <img src={image} alt={author} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <h3 className="font-semibold text-gray-800">{author}</h3>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
};

const SuccessStoriesSection: React.FC = () => {
  const stories = [
    {
      quote: "The alumni network helped me land my dream job right after graduation!",
      author: "Jane Doe",
      title: "Software Engineer, TechCorp",
      image: "https://via.placeholder.com/150/f0f0f0/cccccc?text=Jane+Doe",
    },
    {
      quote: "Mentorship from an alumnus was invaluable for navigating my career path.",
      author: "John Smith",
      title: "Product Manager, InnovateX",
      image: "https://via.placeholder.com/150/d0e0d0/99b299?text=John+Smith",
    },
    {
      quote: "Connecting with experienced professionals through the platform opened up many opportunities.",
      author: "Emily White",
      title: "Marketing Specialist, Global Brands",
      image: "https://via.placeholder.com/150/e0d0c0/b29966?text=Emily+White",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Alumni Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <SuccessStoryCard
              key={index}
              quote={story.quote}
              author={story.author}
              title={story.title}
              image={story.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
