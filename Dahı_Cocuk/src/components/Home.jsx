import React, { useEffect, useState } from "react";

const FloatingObjects = () => {
  const [objects, setObjects] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 30 + 20,
      speed: Math.random() * 1 + 0.5,
      type: Math.random() > 0.5 ? "star" : "circle",
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setObjects((prev) =>
        prev.map((obj) => {
          const newY = obj.y - obj.speed;
          return {
            ...obj,
            y: newY < -50 ? window.innerHeight + 50 : newY,
            x: obj.x + Math.sin(newY / 150) * 2,
          };
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {objects.map((obj) => (
        <div
          key={obj.id}
          style={{
            position: "absolute",
            left: obj.x,
            top: obj.y,
            width: obj.size,
            height: obj.size,
            backgroundColor: obj.type === "star" ? "#FFD700" : "#87CEEB",
            opacity: 0.6,
            transform: "translate(-50%, -50%)",
            borderRadius: obj.type === "circle" ? "50%" : "0%",
            clipPath:
              obj.type === "star"
                ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                : "none",
          }}
        ></div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-left flex items-center justify-center p-6 overflow-hidden ">
      <FloatingObjects />
      <main className="flex flex-row items-center gap-8">
        <div className="w-1/2">
          <h1
            className="text-5xl font-extrabold text-fuchsia-700 mb-10 animate-bounce"
            style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
          >
            Dahi Çocuklar Çocuk Kulübü'ne Hoş Geldiniz!
          </h1>
          <p
            className="text-2xl text-slate-700 mb-20"
            style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
          >
            Burada çocuklar eğlenirken öğrenir, yeni arkadaşlıklar kurar ve
            yaratıcılıklarını geliştirirler. Etkinliklerimizle dolu, neşeli bir
            dünyaya adım atın!
          </p>
          <div className="flex space-x-8">
            <button
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-800 transition-all"
              style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
            >
              İletişime Geç
            </button>
            <button
              className="bg-pink-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-pink-800 transition-all"
              style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
            >
              Hakkımızda
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://www.artistanbul.io/wp-content/uploads/2016/10/3b_blog.jpg"
            alt="Dahi Çocuklar"
            className="rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-700 ease-in-out border-4 border-white"
            style={{ filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.3))" }}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
