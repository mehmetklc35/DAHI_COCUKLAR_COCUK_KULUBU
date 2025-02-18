import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <img src="./logo.webp" alt="Logo" className="h-20" />
          <span className="text-2xl font-bold text-gray-800">Dahi Çocuklar Çocuk Kulübü</span>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {["Ana Sayfa", "Koleksiyon", "Hakkımızda", "İletişim"].map(
            (item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-gray-900 transition-all"
              >
                {item}
              </motion.a>
            )
          )}
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-md py-4 space-y-4 text-center"
        >
          {["Ana Sayfa", "Koleksiyon", "Hakkımızda", "İletişim"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-700 hover:text-gray-900 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            )
          )}
        </motion.div>
      )}
    </nav>
  );
}
