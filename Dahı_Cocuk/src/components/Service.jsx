import React from 'react';

const Services = () => {
  const services = [
    { id: 1, title: 'Bilim Atölyesi', description: 'Çocukların bilimsel merakını uyandıran etkinlikler.', image: '/images/science.jpg' },
    { id: 2, title: 'Sanat Atölyesi', description: 'Sanatla hayal güçlerini geliştiriyoruz.', image: '/images/art.jpg' },
    { id: 3, title: 'Eğlenceli Oyunlar', description: 'Oyunlarla sosyal becerilerini artırıyoruz.', image: '/images/games.jpg' },
    { id: 4, title: 'Yaratıcı Yazarlık', description: 'Yazı atölyelerinde hikayeler oluşturuyoruz.', image: '/images/writing.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-yellow-100 p-6">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 text-center" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
        Hizmetlerimiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-t-xl mb-4" />
            <h2 className="text-2xl font-bold text-indigo-600 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>{service.title}</h2>
            <p className="text-gray-700 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>{service.description}</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition-all">
              İncele
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
