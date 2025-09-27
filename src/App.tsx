import React from 'react';
import Navbar from './components/Navbar'; // Changed from Sidebar
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
