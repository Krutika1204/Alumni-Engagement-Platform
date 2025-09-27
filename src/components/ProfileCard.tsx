import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
      <div className="flex items-center mb-4">
        <img
          className="h-24 w-24 rounded-full mr-4"
          src="https://via.placeholder.com/150"
          alt="Dr. Eleanor Vance"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Dr. Eleanor Vance</h2>
          <p className="text-blue-600">Class of 2015, PhD in Computer Science</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
