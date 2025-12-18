import React from 'react';

const Projectcards = ({ title, tech, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-[#112240] border border-gray-800">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{tech}</p>
        <div className="flex gap-4">
          <button className="text-sm border border-blue-400 px-3 py-1 text-blue-400 hover:bg-blue-400 hover:text-white transition">Demo</button>
          <button className="text-sm border border-gray-500 px-3 py-1 text-gray-400 hover:bg-gray-500 hover:text-white transition">Code</button>
        </div>
      </div>
    </div>
  );
};

export default Projectcards;