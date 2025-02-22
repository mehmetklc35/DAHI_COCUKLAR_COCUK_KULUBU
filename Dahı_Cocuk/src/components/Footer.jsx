import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area bg-gradient-to-r from-indigo-600 to-yellow-600 backdrop-blur-lg text-white pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="logo mb-4">
              <img src="./logo.webp" alt="Logo" style={{ height: "100px" }} />
            </div>
            <p className="text-sm transition-colors duration-300">
              Okulumuzda <b>"Her çocuk özeldir."</b> ilkesi doğrultusunda
              öğrenci merkezli bir anlayışı benimsemekteyiz. Her çocuğun
              bireysel potansiyeline göre özgüvenle hedeflerine ulaşmasını
              sağlıyoruz.
            </p>
            <div className="mt-4 flex space-x-3">
              <a
                href="#"
                className="transition-colors duration-300 hover:text-yellow-300"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-yellow-300"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-yellow-300"
              >
                <i className="bx bxl-youtube"></i>
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-yellow-300"
              >
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 transition-colors duration-300">
              İletişim Bilgileri
            </h3>
            <ul className="space-y-2">
              <li>
                <i className="bx bxs-phone"></i> Telefon:{" "}
                <a
                  href="tel:"
                  className="transition-colors duration-300 hover:text-yellow-300"
                >
                  
                </a>
              </li>
              <li>
                <i className="bx bx-envelope"></i> E-Posta:{" "}
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-yellow-300"
                >
                  
                </a>
              </li>
              <li>
                <i className="bx bx-map"></i> 
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 transition-colors duration-300">
              Hızlı Menü
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-yellow-300"
                >
                  Anasayfa
                </a>
              </li>
              <li>
                <a
                  href="/hakkimizda"
                  className="transition-colors duration-300 hover:text-yellow-300"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="/hizmetlerimiz"
                  className="transition-colors duration-300 hover:text-yellow-300"
                >
                  Hizmetler
                </a>
              </li>
              <li>
                <a
                  href="/etkinliklerimiz"
                  className="transition-colors duration-300 hover:text-yellow-300"
                >
                  Etkinlikler
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="transition-colors duration-300 hover:text-yellow-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/galeri"
                  className="transition-colors duration-300 hover:text-yellow-300"
                >
                  Foto Galeri
                </a>
              </li>
              <li>
                <a
                  href="/iletisim"
                  className="transition-colors duration-300 hover:text-yellow-300"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 transition-colors duration-300">
              Bizden Kareler
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <a
                  key={num}
                  href={`https://www.dahicocuklar.com.tr//panel/uploads/galleries_v/images/resim-galerisi/851x606/gallery-${num}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={`https://www.dahicocuklar.com.tr//panel/uploads/galleries_v/images/resim-galerisi/851x606/gallery-${num}.jpg`}
                    alt={`Gallery ${num}`}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-200 mt-10 transition-colors duration-300">
          © 2025 Dahi Çocuklar Çocuk Kulübü Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
