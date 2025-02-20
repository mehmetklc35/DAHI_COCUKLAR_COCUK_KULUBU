import React from 'react';

const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'Çocuklar İçin Yaratıcı Etkinlikler', date: '2024-02-20', content: 'Çocukların yaratıcılığını artıracak en iyi etkinlikleri keşfedin.' },
    { id: 2, title: 'Eğitici Oyunların Faydaları', date: '2024-02-18', content: 'Oyunlar aracılığıyla çocukların nasıl daha hızlı öğrendiğini görün.' },
    { id: 3, title: 'Sanat Atölyelerinin Önemi', date: '2024-02-15', content: 'Sanatın çocuk gelişimine katkısını öğrenin.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 p-6">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 text-center" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
        Blog Yazıları
      </h1>
      <div className="max-w-6xl mx-auto space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>{post.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <p className="text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>{post.content}</p>
            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition-all">
              Devamını Oku
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
