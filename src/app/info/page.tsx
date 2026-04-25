'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Code, Coffee, Wifi, Utensils, Heart, Brain, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InfoPage() {
  const [mounted, setMounted] = useState(false);
  const [prizesVisible, setPrizesVisible] = useState(false);
  const [amenitiesVisible, setAmenitiesVisible] = useState(false);
  const [eventDetailsVisible, setEventDetailsVisible] = useState(false);
  const [prizesTitleVisible, setPrizesTitleVisible] = useState(false);
  const [scheduleVisible, setScheduleVisible] = useState(false);
  const [scheduleTitleVisible, setScheduleTitleVisible] = useState(false);
  const [amenitiesTitleVisible, setAmenitiesTitleVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [faqTitleVisible, setFaqTitleVisible] = useState(false);

  // Ensure component is mounted before running visibility checks
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check what's visible on page load
  useEffect(() => {
    if (!mounted) return;
    
    const checkVisibleSections = () => {
      const sections = [
        { id: 'event-details', setter: setEventDetailsVisible },
        { id: 'prizes-section', setter: setPrizesVisible },
        { id: 'prizes-title', setter: setPrizesTitleVisible },
        { id: 'schedule-section', setter: setScheduleVisible },
        { id: 'schedule-title', setter: setScheduleTitleVisible },
        { id: 'amenities-section', setter: setAmenitiesVisible },
        { id: 'amenities-title', setter: setAmenitiesTitleVisible },
        { id: 'faq-section', setter: setFaqVisible },
        { id: 'faq-title', setter: setFaqTitleVisible }
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
  const schedule = [
    { time: 'Saturday 9:30 AM', event: 'Doors Open & Check-in', description: 'Get your badge and swag!' },
    { time: 'Saturday 11:30 AM', event: 'Opening Ceremony', description: 'Welcome & rules overview' },
    { time: 'Saturday 12:00 PM', event: 'Hacking Begins!', description: 'Let the coding commence' },
    { time: 'Saturday 1:00 PM', event: 'Lunch', description: 'Midday meal to fuel your creativity' },
    { time: 'Saturday 6:00 PM', event: 'Dinner', description: 'Evening meal' },
    { time: 'Saturday 8:00 PM', event: 'Tech Talks', description: 'Industry experts share insights' },
    { time: 'Saturday 11:59 PM', event: 'Midnight Snacks', description: 'Late night energy boost' },
    { time: 'Sunday 8:00 AM', event: 'Breakfast', description: 'Final fuel before submissions' },
    { time: 'Sunday 12:00 PM', event: 'Hacking Ends (Soft Deadline)', description: 'Time to finalize your projects' },
    { time: 'Sunday 12:30 PM', event: 'Submissions Deadline & Lunch', description: 'Hard deadline for submissions' },
    { time: 'Sunday 1:00 PM', event: 'Judging Begins', description: 'Present your projects to judges' },
    { time: 'Sunday 2:30 PM', event: 'Judging Ends', description: 'All presentations complete' },
    { time: 'Sunday 3:00 PM', event: 'Closing Ceremony', description: 'Awards and celebration!' },
    { time: 'Sunday 3:30 PM', event: 'Event Ends', description: 'Thank you and see you next year!' }
  ];

  const tracks = [
    {
      title: '1st Place',
      description: 'Best overall project across all categories',
      prize: 'ASUS Gaming Monitor',
      icon: Trophy
    },
    {
      title: '2nd Place',
      description: 'Second best overall project',
      prize: 'Keychron K8 Keyboard',
      icon: Users
    },
    {
      title: '3rd Place',
      description: 'Third best overall project',
      prize: 'AKG Pro Microphone',
      icon: Code
    },
    {
      title: 'Best New Team',
      description: 'Best project from a team of freshmen and/or sophomores',
      prize: 'Power Bank',
      icon: Heart
    },
    {
      title: 'Best Use of AI',
      description: 'Most innovative and creative use of artificial intelligence',
      prize: '$500',
      icon: Brain
    },
    {
      title: 'Theme Winner',
      description: 'Best project that follows the hackathon theme',
      prize: 'Tile Mate',
      icon: Rocket
    }
  ];

  const amenities = [
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Blazing fast internet throughout the venue' },
    { icon: Utensils, title: 'Free Meals', description: 'All meals and snacks provided for 24 hours' },
    { icon: Coffee, title: 'Unlimited Caffeine', description: 'Stay caffeinated with energy drinks' },
    { icon: Users, title: 'Mentorship', description: 'Industry professionals available for guidance' }
  ];

  const faq = [
    {
      question: 'Who can participate?',
      answer: 'All university students are welcome! From beginners to advanced programmers, we have something for everyone.'
    },
    {
      question: 'Do I need a team?',
      answer: 'You can participate solo or in teams of up to 4 people. We\'ll have team formation sessions to help you find teammates.'
    },
    {
      question: 'What should I bring?',
      answer: 'Bring your laptop, charger, any hardware you want to use, and your creativity! We\'ll provide everything else.'
    },
    {
      question: 'Is there a cost to participate?',
      answer: 'Nope! Hack OKState is completely free, including meals, snacks, and swag.'
    },
    {
      question: 'What if I\'m a beginner?',
      answer: 'Perfect! We have workshops, mentors, and resources specifically for beginners. This is a great place to learn!'
    },
    {
      question: 'What is your Code of Conduct?',
      answer: 'We follow the MLH Code of Conduct to ensure a safe and inclusive environment for all participants. Harassment of any kind will not be tolerated. View the full Code of Conduct at /code-of-conduct.md or contact us at incidents@mlh.io for any concerns.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-osu-orange to-osu-orange-dark text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Event Information</h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto px-4">
              Everything you need to know about Hack OKState '26
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section id="event-details" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mounted && eventDetailsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => setEventDetailsVisible(true)}
            className="space-y-6"
          >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-osu-orange rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-osu-black">When</h3>
                  <p className="text-gray-600"></p>
                  <p className="text-gray-600"></p>
                </div>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mounted && eventDetailsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            className="space-y-6"
          >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-osu-orange rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-osu-black">Where</h3>
                  <p className="text-gray-600">Engineering South</p>
                  <p className="text-gray-600">Oklahoma State University</p>
                  <p className="text-gray-600">Stillwater, OK</p>
                </div>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted && eventDetailsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            className="space-y-6"
          >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-osu-orange rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-osu-black">Duration</h3>
                  <p className="text-gray-600">24 Hours</p>
                  <p className="text-gray-600">Non-stop hacking</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competition Tracks */}
      <section id="prizes-section" className="py-20 bg-osu-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="prizes-title"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => {
              setPrizesTitleVisible(true);
              setPrizesVisible(true);
            }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-osu-black">Prize Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compete for these amazing prizes and recognition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => {
              const IconComponent = track.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-osu-orange/10 rounded-2xl flex items-center justify-center group-hover:bg-osu-orange group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-osu-orange group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-osu-black">{track.title}</h3>
                    <p className="text-gray-600">{track.description}</p>
                    <div className="text-2xl font-bold text-osu-orange">{track.prize}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="schedule-title"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => {
              setScheduleTitleVisible(true);
              setScheduleVisible(true);
            }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-osu-black">Event Schedule</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              24 hours of non-stop innovation and fun
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex items-center space-x-6 p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-24 text-right">
                    <div className="text-sm font-semibold text-osu-orange">{item.time}</div>
                  </div>
                  <div className="w-4 h-4 bg-osu-orange rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-osu-black">{item.event}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities-section" className="py-20 bg-osu-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="amenities-title"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => {
              setAmenitiesTitleVisible(true);
              setAmenitiesVisible(true);
            }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-osu-black">What We Provide</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Focus on coding - we'll take care of everything else
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="text-center space-y-4 p-6"
                >
                  <div className="w-16 h-16 bg-osu-orange/10 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-osu-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-osu-black">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="faq-title"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => {
              setFaqTitleVisible(true);
              setFaqVisible(true);
            }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-osu-black">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-osu-black mb-4">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}