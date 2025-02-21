import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Bilim Atölyesi",
      description: "Bilimsel merakı uyandıran eğlenceli deneyler.",
      image:
        "https://www.civcivimanaokulu.com.tr/assets/uploads/665f1ec2ae531171750982650.jpg",
    },
    {
      id: 2,
      title: "Sanat Atölyesi",
      description: "Sanatla hayal güçlerini geliştiriyoruz.",
      image:
        "https://sanatakademi.com.tr/uploads/2022/05/cocuk-sanat-atolyesi.jpg",
    },
    {
      id: 3,
      title: "Eğlenceli Oyunlar",
      description: "Oyunlarla sosyal becerilerini artırıyoruz.",
      image:
        "https://i.ytimg.com/vi/uCIGlVorw_I/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgVyhCMA8=&rs=AOn4CLAGWIHEFNcZBf2OEC8RejYkO7esvA",
    },
    {
      id: 4,
      title: "Yaratıcı Yazarlık",
      description: "Hikaye yazımı ile dil becerilerini güçlendiriyoruz.",
      image:
        "https://cocukatolyesi.net/wp-content/uploads/2022/11/creative-writing-600x399-1.jpg",
    },
    {
      id: 5,
      title: "Müzik Atölyesi",
      description: "Müzikle ritim duygularını geliştiriyoruz.",
      image:
        "https://yeniufukgazetesi.com.tr/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-15.33.11.jpeg",
    },
    {
      id: 6,
      title: "Spor Etkinlikleri",
      description: "Enerjilerini sporda atarak sağlıklı büyüyorlar.",
      image:
        "https://www.yengecegitim.com/wp-content/uploads/2024/02/spor-yapmanin-faydalari-okul-oncesi-spor-etkinlikleri-1.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 p-10 relative">
      {/* Hareketli Arka Plan Deseni */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>

      {/* Başlık */}
      <h1
        className="text-6xl font-extrabold text-indigo-700 mb-12 text-center animate-fade-in"
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Hizmetlerimiz
      </h1>

      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-white rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105 hover:rotate-1"
          >
            {/* Resim */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* İçerik */}
            <div className="p-6">
              <h2
                className="text-3xl font-bold text-indigo-600 mb-3 transition-colors duration-500 hover:text-pink-500"
                style={{ fontFamily: "Comic Sans MS, cursive" }}
              >
                {service.title}
              </h2>
              <p
                className="text-lg text-gray-700 mb-6"
                style={{ fontFamily: "Comic Sans MS, cursive" }}
              >
                {service.description}
              </p>

              {/* Buton */}
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-indigo-800 hover:scale-110 transition-all animate-bounce-once">
                Detaylı İncele
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Alt Yazı */}
      <div className="mt-16 text-center animate-fade-in">
        <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 text-transparent bg-clip-text animate-pulse">
          Her atölyemiz, çocukların gelişimini desteklemek ve eğlenerek
          öğrenmelerini sağlamak için özel olarak tasarlanmıştır. 🌟
        </p>
        <div className="mt-4">
          <span className="text-4xl text-pink-500 animate-bounce">💡</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
