import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Çocuklar İçin Yaratıcı Etkinlikler',
      date: '2025-02-20',
      content: 'Çocukların yaratıcılığını artıracak en iyi etkinlikleri keşfedin.',
      image: 'https://cdn.myikas.com/images/21f09639-179a-4f09-b239-aa3743703f9a/7313c400-1f90-4464-9589-225c7db86936/image_1080.jpg'
    },
    {
      id: 2,
      title: 'Eğitici Oyunların Faydaları',
      date: '2025-02-18',
      content: 'Oyunlar aracılığıyla çocukların nasıl daha hızlı öğrendiğini görün.',
      image: 'https://craftsntoys.com.tr/img/cms/egitici-oyuncak-faydalarimiz.jpg'
    },
    {
      id: 3,
      title: 'Sanat Atölyelerinin Önemi',
      date: '2025-02-15',
      content: 'Sanatın çocuk gelişimine katkısını öğrenin.',
      image: 'https://sanatakademi.com.tr/uploads/2022/05/cocuk-sanat-atolyesi.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100">
      <header className="bg-gradient-to-r from-indigo-500 to-yellow-600 text-white py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="text-5xl font-extrabold"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            Hayal Gücünüzü Serbest Bırakın: İlham Veren Çocuk Dünyası
          </h1>
          <p className="mt-4 text-2xl">
            Renkli hikayeler, yaratıcı etkinlikler ve daha fazlasıyla dolu bir yolculuğa hazır olun!
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2
                className="text-2xl font-bold text-indigo-600 mb-2"
                style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
              >
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p
                className="text-gray-700 mb-4"
                style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
              >
                {post.content}
              </p>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-indigo-800 hover:scale-110 transition-all">
                Devamını Oku
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Blog;