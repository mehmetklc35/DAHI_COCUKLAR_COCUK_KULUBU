import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-area bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo ve Açıklama */}
          <div>
            <div className="logo mb-4">
              <img src="" alt="Logo" style={{ height: '75px' }} />
            </div>
            <p className="text-sm">
              Okulumuzda <b>"Her çocuk özeldir."</b> ilkesi doğrultusunda öğrenci merkezli bir anlayışı benimsemekteyiz. Her çocuğun bireysel potansiyeline göre özgüvenle hedeflerine ulaşmasını sağlıyoruz.
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="hover:text-blue-400"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="hover:text-pink-400"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="hover:text-red-400"><i className="bx bxl-youtube"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="bx bxl-twitter"></i></a>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
            <ul className="space-y-2">
              <li><i className="bx bxs-phone"></i> Telefon: <a href="tel:" className="hover:text-blue-400"></a></li>
              <li><i className="bx bx-envelope"></i> E-Posta: <a href="" className="hover:text-blue-400"></a></li>
              <li><i className="bx bx-map"></i> </li>
            </ul>
          </div>

          {/* Hızlı Menü */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Menü</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Anasayfa</a></li>
              <li><a href="/hakkimizda" className="hover:text-blue-400">Hakkımızda</a></li>
              <li><a href="/hizmetlerimiz" className="hover:text-blue-400">Hizmetler</a></li>
              <li><a href="/etkinliklerimiz" className="hover:text-blue-400">Etkinlikler</a></li>
              <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
              <li><a href="/galeri" className="hover:text-blue-400">Foto Galeri</a></li>
              <li><a href="/iletisim" className="hover:text-blue-400">İletişim</a></li>
            </ul>
          </div>

          {/* Bizden Kareler */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bizden Kareler</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <a key={num} href={`https://www.dahicocuklar.com.tr//panel/uploads/galleries_v/images/resim-galerisi/851x606/gallery-${num}.jpg`} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`https://www.dahicocuklar.com.tr//panel/uploads/galleries_v/images/resim-galerisi/851x606/gallery-${num}.jpg`}
                    alt={`Gallery ${num}`}
                    className="w-full h-20 object-cover rounded-lg hover:scale-105 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-10">
          © 2025 Dahi Çocuklar Çocuk Kulübü Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
