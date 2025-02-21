import React from "react";

const WhyUs = () => {
  const features = [
    {
      id: 1,
      title: "Bütünleştirilmiş Eğitim Anlayışı",
      description:
        "Reggio, Montessori, Waldorf ve PYP gibi eğitim modellerini harmanlayarak bütünleştirilmiş bir eğitim sunuyoruz.",
    },
    {
      id: 2,
      title: "Multiple Intelligence (Çoklu Zeka Kuramı)",
      description:
        "Her çocuğun farklı öğrenme yoluna göre kişiselleştirilmiş programlar uyguluyoruz.",
    },
    {
      id: 3,
      title: "Tecrübeli Eğitim Kadrosu",
      description:
        "Uzman kadromuz, geleceğin DAHİ çocuklarını yetiştirmek için sürekli yenilikçi programlar hazırlıyor.",
    },
    {
      id: 4,
      title: "Sevgi ve Güven Temelli Özgür Ortam",
      description:
        "Meraklı, empatik ve özgüvenli bireyler yetiştirmek için sevgi dolu bir ortam sunuyoruz.",
    },
    {
      id: 5,
      title: "Geniş Doğal Bahçe",
      description:
        "Doğa ile iç içe öğrenme fırsatları sunan geniş bir bahçemiz var.",
    },
    {
      id: 6,
      title: "Mobil Veli İletişim Sistemi",
      description:
        "Veli - öğretmen iletişimini güçlendiren mobil uygulama ile anlık bilgilendirme.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-pink-100 py-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2
          className="text-6xl font-extrabold text-center text-indigo-700 mb-16 animate-fade-in"
          style={{ fontFamily: "Comic Sans MS, cursive" }}
        >
          Neden Bizi Tercih Etmelisiniz?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-transparent transition-all duration-700 group-hover:border-indigo-500 group-hover:scale-110">
                <img
                  src="https://brandistanbulpr.com/static/img/why-us-content-1.jpg"
                  alt="Neden Biz?"
                  className="w-full h-[600px] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
            </div>

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          <div className="space-y-10">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-start gap-6 transition-transform duration-500 hover:scale-105"
              >
                <div className="text-white text-2xl font-bold w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 shadow-lg">
                  {feature.id}
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-indigo-700 mb-2 transition-colors duration-300 hover:text-pink-600">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
