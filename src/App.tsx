import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { Portfolio } from './components/home/Portfolio';
import { Testimonials } from './components/home/Testimonials';
import { Contact } from './components/home/Contact';
import { Login } from './components/auth/Login';
import { ClientDashboard } from './components/client/ClientDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      setCurrentPage(user.role === 'admin' ? 'admin' : 'client');
    } else {
      setCurrentPage('login');
    }
  };

  const handleLoginSuccess = () => {
    if (user) {
      setCurrentPage(user.role === 'admin' ? 'admin' : 'client');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onGetStarted={handleGetStarted} />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pt-20">
              <Services />
            </div>
          </motion.div>
        );
      case 'portfolio':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pt-20">
              <Portfolio />
            </div>
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pt-20 pb-20 bg-gray-50"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">About OAJ Software Consult</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We are a leading IT consulting firm specializing in comprehensive digital solutions 
                  that help businesses thrive in today's technology-driven world.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600 mb-6">
                    To empower businesses with cutting-edge technology solutions that drive innovation, 
                    efficiency, and growth. We believe in building long-term partnerships with our clients 
                    and delivering exceptional value through our expertise and commitment.
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Excellence in every project we undertake</li>
                    <li>• Innovation through cutting-edge technology</li>
                    <li>• Integrity in all our business relationships</li>
                    <li>• Collaboration with clients as true partners</li>
                    <li>• Continuous learning and improvement</li>
                  </ul>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                    alt="Our Team"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pt-20">
              <Contact />
            </div>
          </motion.div>
        );
      case 'login':
        return <Login onSuccess={handleLoginSuccess} />;
      case 'client':
        return <ClientDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage !== 'login' && currentPage !== 'client' && currentPage !== 'admin' && (
        <Header 
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      
      {currentPage !== 'login' && currentPage !== 'client' && currentPage !== 'admin' && (
        <Footer />
      )}
    </div>
  );
}