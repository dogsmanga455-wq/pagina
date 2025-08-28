import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';
import { FaKey, FaTools, FaTruck, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'; // Importa los iconos que faltaban

const products = [
  { id: 1, name: 'Taladro Percutor', price: 15000, image: 'https://www.construcolor.com.co/wp-content/uploads/2021/05/Martillo-de-una-29mm1.jpg' },
  { id: 2, name: 'Set de Llaves Combinadas', price: 8500, image: 'https://images.unsplash.com/photo-1581092918065-f8776817693a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Caja de Herramientas', price: 12000, image: 'https://images.unsplash.com/photo-1567057419569-dc14570b83e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Sierra Circular', price: 22000, image: 'https://images.unsplash.com/photo-1599420102101-307703223825?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, name: 'Nivel Láser', price: 18000, image: 'https://images.unsplash.com/photo-1581092918065-f8776817693a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, name: 'Juego de Destornilladores', price: 6000, image: 'https://images.unsplash.com/photo-1581092918065-f8776817693a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const services = [
  { id: 1, name: 'Corte de Llaves', description: 'Duplicado de llaves con precisión y rapidez para tu hogar o negocio.', icon: FaKey },
  { id: 2, name: 'Asesoría Técnica', description: 'Expertos a tu disposición para guiarte en la elección de los materiales y herramientas adecuados.', icon: FaTools },
  { id: 3, name: 'Pedidos Especiales', description: 'Si no lo tenemos, lo conseguimos. Realizamos pedidos de productos específicos para tus necesidades.', icon: FaTruck },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />
      <main>
        <Hero />

        {/* Catálogo Destacado */}
        <section id="catalogo" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center text-gray-800 mb-12"
            >
              Productos Destacados
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-16 md:py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center text-gray-800 mb-12"
            >
              Nuestros Servicios
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Ubicación y Contacto */}
        <section id="contacto" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center text-gray-800 mb-12"
            >
              Encuéntranos
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="h-96 w-full rounded-xl overflow-hidden shadow-xl border border-gray-100"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895817!2d-58.3815923847709!3d-34.6037228804599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac6d1b2f0f7%3A0x5e9d4b0f7e1d2e!2sObelisco!5e0!3m2!1ses-419!2sar!4v1678912345678!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de FerreTodo"
                ></iframe>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="space-y-6 text-lg text-gray-700"
              >
                <p className="flex items-center gap-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                  <strong>Dirección:</strong> Av. Principal 123, Ciudad, País
                </p>
                <p className="flex items-center gap-4">
                  <FaPhoneAlt className="w-6 h-6 text-blue-600" />
                  <strong>Teléfono:</strong> +54 9 11 1234-5678
                </p>
                <p className="flex items-center gap-4">
                  <FaWhatsapp className="w-6 h-6 text-blue-600" />
                  <strong>WhatsApp:</strong> +54 9 11 1234-5678
                </p>
                <motion.a
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-green-600 transform hover:scale-105 transition-all duration-300 mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="w-6 h-6 mr-3" />
                  Chatea con nosotros
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/5491112345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center text-2xl hover:bg-green-600 transform hover:scale-110 transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
}

export default App;