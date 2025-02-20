import React from 'react';

const WhyUs = () => {
  const reasons = [
    { id: 1, title: 'Deneyimli Kadro', description: 'Eğitimde uzman, çocuklarla çalışmayı seven profesyonel bir ekiple çalışıyoruz.' },
    { id: 2, title: 'Eğlenceli ve Öğretici Etkinlikler', description: 'Çocukların gelişimini destekleyen, keyifli ve öğretici etkinlikler sunuyoruz.' },
    { id: 3, title: 'Güvenli Ortam', description: 'Çocuklarınızın güvenliği ve mutluluğu bizim önceliğimizdir.' },
    { id: 4, title: 'Yaratıcılığı Destekleyen Programlar', description: 'Sanat, bilim ve oyunla dolu etkinlikler ile çocukların yaratıcılıklarını geliştiriyoruz.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-green-100 p-6 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        <div className="flex justify-center">
          <img
            src="/images/why-us.jpg"
            alt="Neden Biz"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </div>
        <div>
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
            Neden Biz?
          </h1>
          <ul className="list-disc list-inside space-y-4">
            {reasons.map((reason) => (
              <li key={reason.id} className="text-xl text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                <strong className="text-indigo-600">{reason.title}:</strong> {reason.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
