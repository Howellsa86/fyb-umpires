'use client';

import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <nav className="p-4 shadow-md flex justify-between items-center bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">FYB Umpire Scheduling</h1>
        <button
          className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <main className="p-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Umpire Scheduling App</h2>
        <p className="text-lg">Easily manage and schedule umpires with a clean and simple interface.</p>
        <p className="mt-4">More features coming soon...</p>
      </main>
    </div>
  );
}
