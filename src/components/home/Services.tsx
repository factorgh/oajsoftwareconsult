import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Shield, Server, Brain, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { services } from '../../data/mockData';

const iconMap = {
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Server,
  Brain,
};

const serviceImages = [
  'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg', // Web Development
  'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg', // Mobile Development
  'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg', // Cloud
  'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg', // Security
  'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg', // Infrastructure
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg', // AI/ML
];

export const Services: React.FC = () => {
  return (
    <div className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
              Our Expertise
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Comprehensive IT{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation across every aspect of your organization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card hoverable className="h-full overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={serviceImages[index]}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary-600/80 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      {service.price && (
                        <p className="text-xl font-bold text-primary-600">{service.price}</p>
                      )}
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="Technology Background"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Business?</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Let's discuss how our comprehensive IT solutions can drive your business forward.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};