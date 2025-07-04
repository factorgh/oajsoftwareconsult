import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote,  } from 'lucide-react';
import { Card } from '../ui/Card';
import { testimonials } from '../../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <div className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          alt="Team Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/95 to-white/90"></div>
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
            <span className="inline-block px-4 py-2 bg-success-100 text-success-800 rounded-full text-sm font-medium">
              Client Testimonials
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            What Our{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services and the impact we've made on their businesses.
          </p>
        </motion.div>

        {/* Main Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="p-8 h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-accent-50 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary-200 group-hover:text-primary-300 transition-colors" />
                  </div>
                  
                  <blockquote className="text-gray-600 leading-relaxed text-lg">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative"
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </motion.div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                      <p className="text-sm text-primary-600 font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-600">We've had the privilege of working with amazing companies</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
              'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
              'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
              'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="w-full h-16 object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Success Background"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative z-10 grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '150+', label: 'Projects Completed' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '50+', label: 'Happy Clients' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};