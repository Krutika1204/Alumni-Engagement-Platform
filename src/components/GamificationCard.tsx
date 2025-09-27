import React from 'react';

const GamificationCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Gamification</h2>
      <div className="mb-4">
        <p className="text-gray-600">Badges Earned</p>
        <p className="text-3xl font-bold text-blue-600">5</p>
      </div>
      <div>
        <p className="text-gray-600">Leaderboard Rank</p>
        <p className="text-3xl font-bold text-blue-600">#12</p>
      </div>
    </div>
  );
};

export default GamificationCard;
