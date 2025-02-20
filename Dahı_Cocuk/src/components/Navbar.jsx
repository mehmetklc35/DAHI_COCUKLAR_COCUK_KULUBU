import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <span className="text-2xl font-bold text-gray-800">
            Dahi Çocuklar Çocuk Kulübü
          </span>
        </motion.div>

        <div className="hidden md:flex space-x-10 items-center relative">
          {["Anasayfa", "Kurumsal", "Etkinlikler", "Blog", "İletişim"].map(
            (item, index) => (
              <div
                key={index}
                className="relative"
                ref={item === "Kurumsal" ? dropdownRef : null}
              >
                {item === "Kurumsal" ? (
                  <>
                    <motion.button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-700 text-xl hover:text-gray-900 transition-all cursor-pointer flex items-center gap-1"
                    >
                      {item} ⏷
                    </motion.button>

                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-3 space-y-2 w-48"
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Hakkımızda
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Vizyon & Misyon
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Ekibimiz
                        </a>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-700 text-xl hover:text-gray-900 transition-all"
                  >
                    {item}
                  </motion.a>
                )}
              </div>
            )
          )}

          <motion.button
            whileHover={{ rotate: [0, -5, 5, -5, 5, 0], scale: 1.1 }}
            whileTap={{ scale: 0.8, rotate: -10, backgroundColor: "#ff4500" }}
            transition={{ duration: 0.3 }}
            className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold 
             transition-all duration-300 hover:bg-red-700"
          >
            🎸 Hemen Ara!
          </motion.button>
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
          {["Anasayfa", "Kurumsal", "Etkinlikler", "Blog", "İletişim"].map(
            (item, index) => (
              <div key={index} className="relative">
                {item === "Kurumsal" ? (
                  <>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 transition-all"
                    >
                      {item} ⏷
                    </button>

                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-white shadow-lg rounded-lg p-3 space-y-2"
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Hakkımızda
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Vizyon & Misyon
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Ekibimiz
                        </a>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-gray-900 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                )}
              </div>
            )
          )}
        </motion.div>
      )}
    </nav>
  );
}
