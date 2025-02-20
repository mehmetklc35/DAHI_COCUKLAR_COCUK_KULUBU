import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-pink-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        <div className="flex justify-center">
          <img
            src="/public/about-image.png"
            alt="Hakkımızda"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
            Hakkımızda
          </h1>
          <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
          ÖZEL DAHİ ÇOCUKLAR ailesi olarak 2009 yılından itibaren uzman kadrosuyla 2-6 yaş arası tüm çocuklarımıza alternatif eğitim olanakları sunan, beceri ve yaratıcılıklarını özgürce sergileyebilecekleri hijyenik, eğlenceli, güvenli, öğrenme merkezli ve sevgi temelli bir ortamda özgüveni yüksek, sorumluluk sahibi bireyler yetiştirmeyi hedefliyoruz. 

Okulumuzda okul öncesi eğitim programı kapsamında uygulanan farklı eğitim ve öğretim methodları da vardır. 

Kendine Özgü Yaşayan Okul Modeli, Reggio, Emilia, Montessori, Waldorf, PYP, Orman Okulları gibi farklı ekollerin, güçlü ve okulumuzun kültürüne uygun yönlerinden yararlanılarak proje tabanlı eğitim modellerini harmanlayıp bütünleştirilmiş bir eğitim ve öğretim anlayışı sunulmuştur.



OKUL SAATLERİ 

Tam Gün : 7.30 -18.30

Yarım Gün Öğleden Önce : 7.30 - 12.30

Yarım Gün Öğleden Sonra : 13.30 - 18.30

(Kurumumuzda Sabah Kahvaltısı - Öğle Yemeği ve İkindi Kahvaltısı olmak üzere 3 öğün hizmet verilmektedir.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
