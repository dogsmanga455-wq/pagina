import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MapPin, ShoppingBag, Wrench, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#hero', icon: <Phone className="w-5 h-5" /> },
    { name: 'Catálogo', href: '#catalogo', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: 'Servicios', href: '#servicios', icon: <Wrench className="w-5 h-5" /> },
    { name: 'Contacto', href: '#contacto', icon: <MapPin className="w-5 h-5" /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className="bg-white/90 backdrop-blur-md shadow-lg fixed w-full z-50 top-0"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/40x40/007bff/ffffff?text=FT" alt="FerreTodo Logo" className="h-10 w-10 mr-3" />
          <span className="text-2xl font-bold text-gray-800">FerreTodo</span>
        </div>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center gap-2"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-green-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </motion.a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white shadow-inner"
      >
        <nav className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 flex items-center gap-3"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <motion.a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white px-5 py-2 rounded-full font-semibold text-center flex items-center justify-center gap-2 mt-4 shadow-md hover:bg-green-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </motion.a>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;