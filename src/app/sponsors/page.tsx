'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Mail, Trophy, Zap, Star, Crown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { sponsorsData, type Sponsor } from '@/data/sponsors';

// Component to handle sponsor logos with fallback
function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="text-6xl font-bold text-osu-orange/50 text-center">
      {sponsor.name.charAt(0)}
    </div>
  );
}

export default function SponsorsPage() {
  const [mounted, setMounted] = useState(false);
  const [sponsorsVisible, setSponsorsVisible] = useState(false);
  const [tiersVisible, setTiersVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);
  const [sponsorsTitleVisible, setSponsorsTitleVisible] = useState(false);
  const [tiersTitleVisible, setTiersTitleVisible] = useState(false);
  const [partnersTitleVisible, setPartnersTitleVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  // Ensure component is mounted before running visibility checks
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check what's visible on page load
  useEffect(() => {
    if (!mounted) return;
    
    const checkVisibleSections = () => {
      const sections = [
        { id: 'sponsors-section', setter: setSponsorsVisible },
        { id: 'sponsors-title', setter: setSponsorsTitleVisible },
        { id: 'tiers-section', setter: setTiersVisible },
        { id: 'tiers-title', setter: setTiersTitleVisible },
        { id: 'partners-section', setter: setPartnersVisible },
        { id: 'partners-title', setter: setPartnersTitleVisible },
        { id: 'cta-section', setter: setCtaVisible }
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
  const sponsorTiers = [
    {
      tier: 'Platinum',
      price: '$6,000',
      color: 'from-teal-400 to-cyan-500',
      icon: Crown,
      benefits: [
        'Gold benefits included',
        'Keynote opportunity',
        'Exclusive branding with large logo',
        'Custom requests allowed'
      ]
    },
    {
      tier: 'Gold',
      price: '$3,000',
      color: 'from-yellow-500 to-orange-500',
      icon: Trophy,
      benefits: [
        'Silver benefits included',
        'Challenge sponsorship',
        'Panel judge opportunity'
      ]
    },
    {
      tier: 'Silver',
      price: '$2,000',
      color: 'from-gray-400 to-gray-600',
      icon: Star,
      benefits: [
        'Bronze benefits included',
        'Resume book access',
        'Tech talk opportunity'
      ]
    },
    {
      tier: 'Bronze',
      price: '$1,000',
      color: 'from-orange-600 to-orange-700',
      icon: Zap,
      benefits: [
        'Booth space',
        'Social media mention',
        'Logo on website and shirt'
      ]
    }
  ];

  const addOns = [
    {
      title: 'Tech Talk/Workshop',
      price: '$500',
      description: '30-minute slot to engage directly with participants'
    },
    {
      title: 'Hacker Challenge',
      price: '$1,000',
      description: 'Present a challenge using your tech stack or API, and award your own branded prize'
    },
    {
      title: 'Branded Meal Sponsor',
      price: '$2,000',
      description: 'Your company logo featured at a catered meal. Great visibility'
    },
    {
      title: 'Presenting Sponsor',
      price: '$7,000',
      description: 'Full custom package + name/logo in official event title: "Hack OKState presented by [Company]"'
    }
  ];

  const currentSponsors = sponsorsData;

  const partnerOrganizations = [
    'OSU CS Department',
    'OSU ECE Department',
    'OSU IEEE Chapter',
    'OSU ACM Chapter'
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our Sponsors</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Thank you to our amazing sponsors who make Hack OKState '26 possible
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section id="sponsors-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="sponsors-title"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => {
              setSponsorsTitleVisible(true);
              setSponsorsVisible(true);
            }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-osu-black">Thank You to Our Sponsors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These organizations are making our hackathon possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSponsors.map((sponsor: Sponsor, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                <div className="aspect-video bg-gradient-to-br from-osu-gray-light to-gray-100 flex items-center justify-center relative">
                  <SponsorLogo sponsor={sponsor} />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-osu-black">{sponsor.name}</h3>
                    <span className="px-3 py-1 bg-osu-orange/10 text-osu-orange text-sm font-semibold rounded-full">
                      {sponsor.tier}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm">{sponsor.description}</p>
                  
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-osu-orange hover:text-osu-orange-dark transition-colors font-semibold"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="tiers-section" className="py-20 bg-osu-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="tiers-title"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => {
              setTiersTitleVisible(true);
              setTiersVisible(true);
            }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-osu-black">Sponsorship Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with us to support the next generation of innovators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${tier.color} p-6 text-white text-center`}>
                    <IconComponent className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">{tier.tier}</h3>
                    <p className="text-2xl font-bold mt-2">{tier.price}</p>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-osu-orange rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-osu-black">Add-Ons</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your sponsorship with these additional opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border-2 border-osu-orange/20 rounded-2xl p-6 hover:border-osu-orange hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-osu-black">{addon.title}</h3>
                    <span className="text-2xl font-bold text-osu-orange">{addon.price}</span>
                  </div>
                  <p className="text-gray-600">{addon.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section id="partners-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="partners-title"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => {
              setPartnersTitleVisible(true);
              setPartnersVisible(true);
            }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-osu-black">Partner Organizations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Working together with these amazing organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerOrganizations.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-osu-black">{partner}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section id="cta-section" className="py-20 bg-gradient-to-br from-osu-orange to-osu-orange-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => setCtaVisible(true)}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">Become a Sponsor</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join us in empowering the next generation of innovators and developers at Oklahoma State University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hackokstate@okstate.edu?subject=Sponsorship Inquiry"
                className="inline-flex items-center space-x-2 bg-white text-osu-orange px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                <span>hackokstate@okstate.edu</span>
              </a>
              <a
                href="/prospectus_packet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-osu-orange px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Download Prospectus</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
