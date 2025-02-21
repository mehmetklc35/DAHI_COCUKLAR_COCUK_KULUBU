import React from 'react';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Meral...', role: 'Eğitim Koordinatörü', image: 'https://st3.depositphotos.com/1075946/15893/i/450/depositphotos_158939218-stock-photo-l-woman-relaxing-at-home.jpg' },
    { id: 2, name: 'Ayşe...', role: 'Bilim Atölyesi Lideri', image: 'https://st3.depositphotos.com/1075946/15893/i/450/depositphotos_158939218-stock-photo-l-woman-relaxing-at-home.jpg' },
    { id: 3, name: 'Tansu...', role: 'Sanat Eğitmeni', image: 'https://st3.depositphotos.com/1075946/15893/i/450/depositphotos_158939218-stock-photo-l-woman-relaxing-at-home.jpg' },
    { id: 4, name: 'Dilek...', role: 'Oyun Koordinatörü', image: 'https://st3.depositphotos.com/1075946/15893/i/450/depositphotos_158939218-stock-photo-l-woman-relaxing-at-home.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-16 px-6">
      <h1 className="text-6xl font-extrabold text-indigo-700 mb-12 text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
        Ekibimiz
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
            {/* Resim Alanı */}
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover rounded-t-3xl transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* İçerik */}
            <div className="p-6 text-center">
              <h2 className="text-3xl font-extrabold text-indigo-600 mb-2 transition-colors duration-300 hover:text-pink-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                {member.name}
              </h2>
              <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                {member.role}
              </p>

              {/* Detaylı Bilgi Butonu */}
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-indigo-800 hover:scale-110 transition-all">
                Detaylı Bilgi
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
