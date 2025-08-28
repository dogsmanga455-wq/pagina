import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 text-gray-300 py-12"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">Contáctanos</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>Av. Principal 123, Ciudad, País</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-400" />
              <span>+54 9 11 1234-5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-400" />
              <span>info@ferretodo.com</span>
            </li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">Horarios</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-orange-400" />
              <span>Lunes - Viernes: 9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-orange-400" />
              <span>Sábados: 9:00 AM - 1:00 PM</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-orange-400" />
              <span>Domingos: Cerrado</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">Síguenos</h3>
          <div className="flex space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaFacebook className="w-7 h-7" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaInstagram className="w-7 h-7" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaTwitter className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FerreTodo. Todos los derechos reservados.
      </div>
    </motion.footer>
  );
};

export default Footer;