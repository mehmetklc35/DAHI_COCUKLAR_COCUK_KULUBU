import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-pink-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              <img
                src="https://png.pngtree.com/background/20220726/original/pngtree-chalkboard-with-science-formulas-picture-image_1823243.jpg"
                alt="Hakkımızda"
                className="w-full h-auto rounded-xl shadow-xl filter brightness-90 hover:brightness-110 hover:scale-105 hover:rotate-3 transition-all duration-700 ease-in-out"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <span className="block text-pink-600 text-xl sm:text-2xl font-semibold mb-2 animate-fade-in">
              HER ÇOCUK BİR KEŞİF, HER KEŞİF BİR DAHİLİKLE BAŞLAR!
            </span>

            <h3
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 animate-slide-in"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              Biz Kimiz?
            </h3>

            <p
              className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed animate-fade-in"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              <strong>Dahi Çocuklar</strong> olarak, çocukların doğasında var
              olan merak ve yaratıcılığı desteklemek için buradayız. 2009'dan bu
              yana, 2-6 yaş arası çocuklara eğlenceli, güvenli ve ilham verici
              bir öğrenme ortamı sunuyoruz. Amacımız, her çocuğun potansiyelini
              en üst seviyeye çıkararak özgüveni yüksek, sorumluluk sahibi
              bireyler yetiştirmek.
            </p>

            <p
              className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed animate-fade-in"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              Eğitim modelimizde <strong>Montessori</strong>,{" "}
              <strong>Reggio Emilia</strong>, <strong>Waldorf</strong>,{" "}
              <strong>PYP</strong> ve <strong>Orman Okulları</strong> gibi
              dünya çapında kabul gören yaklaşımları harmanladık. Her
              çocuğun öğrenme stiline uygun, proje tabanlı ve uygulamalı bir
              öğretim anlayışı benimsiyoruz.
            </p>

            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-700 mb-3 animate-slide-in">
              📅 Okul Saatlerimiz
            </h4>

            <ul className="text-base sm:text-lg md:text-xl text-gray-700 space-y-2 animate-fade-in">
              <li className="hover:scale-105 transition-transform duration-500">
                <strong>Tam Gün:</strong> 07:30 - 18:30
              </li>
              <li className="hover:scale-105 transition-transform duration-500">
                <strong>Yarım Gün (Sabah):</strong> 07:30 - 12:30
              </li>
              <li className="hover:scale-105 transition-transform duration-500">
                <strong>Yarım Gün (Öğleden Sonra):</strong> 13:30 - 18:30
              </li>
            </ul>

            <p
              className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 animate-fade-in"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              Her gün <strong>3 öğün besleyici yemek</strong> ile çocuklarımızın
              fiziksel gelişimini destekliyoruz: Sabah Kahvaltısı, Öğle Yemeği
              ve İkindi Kahvaltısı.
            </p>

            {/* Butonlar */}
            <div className="mt-6 flex space-x-4 animate-slide-in">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-800 transition-all">
                Bize Katılın
              </button>
              <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-800 transition-all">
                Detaylı Bilgi Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
