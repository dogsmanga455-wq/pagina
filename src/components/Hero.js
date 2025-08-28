import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-blue-800 to-gray-900 text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092918065-f8776817693a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Herramientas de ferretería"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-gray-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
        >
          Tu Solución en Herramientas y Materiales
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90"
        >
          En FerreTodo, encuentras todo lo que necesitas para tus proyectos, grandes o pequeños. Calidad y asesoría experta a tu alcance.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 150 }}
          href="#contacto"
          className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-300"
        >
          <PhoneCall className="w-6 h-6 mr-3" />
          Contáctanos Ahora
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;