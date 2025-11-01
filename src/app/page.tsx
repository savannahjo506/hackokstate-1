'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, Users, Trophy, Code, Rocket, Clock, Star, MessageSquare, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [featuresTitleVisible, setFeaturesTitleVisible] = useState(false);
  const [ctaTitleVisible, setCtaTitleVisible] = useState(false);
  const [ctaButtonVisible, setCtaButtonVisible] = useState(false);

  // Ensure component is mounted before running visibility checks
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check what's visible on page load
  useEffect(() => {
    if (!mounted) return;
    
    const checkVisibleSections = () => {
      const sections = [
        { id: 'features-section', setter: setFeaturesVisible },
        { id: 'features-title', setter: setFeaturesTitleVisible },
        { id: 'cta-title', setter: setCtaTitleVisible },
        { id: 'cta-button', setter: setCtaButtonVisible }
      ];

      sections.forEach(({ id, setter }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            setter(true);
          }
        }
      });
    };

    // Check immediately and after a short delay to ensure DOM is ready
    checkVisibleSections();
    const timer = setTimeout(checkVisibleSections, 100);
    
    return () => clearTimeout(timer);
  }, [mounted]);

  const features = [
    {
      icon: Trophy,
      title: '24 Hours',
      description: 'Non-stop coding and innovation'
    },
    {
      icon: Users,
      title: '100+ Hackers',
      description: 'Connect with brilliant minds'
    },
    {
      icon: Star,
      title: '$1K+ Prizes',
      description: 'Amazing rewards for winners'
    },
    {
      icon: Code,
      title: 'All Skill Levels',
      description: 'Beginners to experts welcome'
    },
    {
      icon: GraduationCap,
      title: 'All University Students',
      description: 'Open to students from any university'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-osu-gray-light to-white">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6600' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-osu-black">Hack</span>{' '}
                <span className="text-osu-orange">OKState</span>{' '}
                <span className="text-osu-black">'25</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Oklahoma State University's premier hackathon. 24 hours of innovation, 
                collaboration, and building the future.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfkK7cdHguJkm0dvn5fz7TA5MBc9hVRMcQ3lNaG7_nY0gL5SA/viewform?usp=sharing&ouid=110797256475146890415"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-osu-orange hover:bg-osu-orange-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Register Now</span>
              </a>
              
              <a 
                href="https://discord.gg/NkrYgaUnAN"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Join Discord</span>
              </a>
              
              <Link 
                href="/info"
                className="border-2 border-osu-orange text-osu-orange hover:bg-osu-orange hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5" />
                <span>Learn More</span>
              </Link>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-gray-600 px-4"
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-osu-orange" />
                <span className="font-medium">November 1-2, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-osu-orange" />
                <span className="font-medium">Advanced Technology Research Center, OSU</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-osu-orange" />
                <span className="font-medium">24 Hours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-12 sm:py-16 md:py-20 bg-osu-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="features-title"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => {
              setFeaturesTitleVisible(true);
              setFeaturesVisible(true);
            }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-osu-black">Why Hack OKState?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Join the most exciting tech event of the year at Oklahoma State University
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="text-center space-y-4 p-4 sm:p-6 rounded-2xl bg-white hover:bg-white/80 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-osu-orange/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-osu-orange group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-osu-orange group-hover:text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-osu-black">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-osu-orange to-osu-orange-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            id="cta-title"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => setCtaTitleVisible(true)}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">Ready to Build Something Amazing?</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto px-4">
              Join hundreds of talented students for an unforgettable weekend of innovation and creativity.
            </p>
          </motion.div>
          
          <motion.div
            id="cta-button"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => setCtaButtonVisible(true)}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfkK7cdHguJkm0dvn5fz7TA5MBc9hVRMcQ3lNaG7_nY0gL5SA/viewform?usp=sharing&ouid=110797256475146890415"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-osu-orange px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Users className="w-5 h-5" />
              <span>Register for Hack OKState '25</span>
            </a>
            
            <a 
              href="https://discord.gg/NkrYgaUnAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-[#5865F2] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#4752C4] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Join Our Discord</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}