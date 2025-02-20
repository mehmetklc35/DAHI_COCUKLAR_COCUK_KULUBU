import React from 'react';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Meral...', role: 'Eğitim Koordinatörü', image: '/images/.jpg' },
    { id: 2, name: 'Ayşe...', role: 'Bilim Atölyesi Lideri', image: '/images/aye.jpg' },
    { id: 3, name: 'Tansu...', role: 'Sanat Eğitmeni', image: '/images/zeynep.jpg' },
    { id: 4, name: 'Dilek...', role: 'Oyun Koordinatörü', image: '/images/ali.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 p-6">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 text-center" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
        Ekibimiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <img src={member.image} alt={member.name} className="w-full h-100 object-cover rounded-t-xl mb-4" />
            <h2 className="text-2xl font-bold text-indigo-600 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>{member.name}</h2>
            <p className="text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
