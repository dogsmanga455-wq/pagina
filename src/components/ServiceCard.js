import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="p-4 bg-blue-100 rounded-full inline-flex mb-6">
        <Icon className="w-10 h-10 text-blue-600" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.name}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;