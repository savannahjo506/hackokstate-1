import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Instagram, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: MessageSquare, href: 'https://discord.gg/NkrYgaUnAN', label: 'Discord' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:hackokstate@okstate.edu', label: 'Email' },
  ];

  return (
    <footer className="bg-osu-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">
              Hack OKState <span className="text-osu-orange">'26</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Oklahoma State University's premier hackathon bringing together innovators, 
              creators, and problem solvers for an unforgettable weekend of coding.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Stillwater, Oklahoma</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-osu-orange">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/info" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                Event Info
              </Link>
              <Link href="/team" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                Team
              </Link>
              <Link href="/sponsors" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                Sponsors
              </Link>
              <a href="https://discord.gg/NkrYgaUnAN" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                Discord
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkK7cdHguJkm0dvn5fz7TA5MBc9hVRMcQ3lNaG7_nY0gL5SA/viewform?usp=sharing&ouid=110797256475146890415" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                Register
              </a>
              <a href="/code-of-conduct.md" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-osu-orange">Connect With Us</h4>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-osu-gray-dark rounded-full flex items-center justify-center hover:bg-osu-orange transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              <p>Questions? Email us at:</p>
              <a href="mailto:hackokstate@okstate.edu" className="text-osu-orange hover:text-osu-orange-light">
                hackokstate@okstate.edu
              </a>
            </div>
            {/* MLH Trust Badge & Pure Buttons Logo */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/mlh-logo-white.svg"
                  alt="MLH 2025 Hackathon Season"
                  width={60}
                  height={120}
                  className="h-16 w-auto"
                />
              </a>
              <a
                href="https://mlh.link/MLH-PureButtons-hackathons"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white p-2 rounded"
              >
                <Image
                  src="/Pure-Buttons-Blue-Gradient-Logo-RGB.svg"
                  alt="Pure Buttons"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm px-4">
            © 2026 Hack OKState. All rights reserved. Made with ❤️ at Oklahoma State University.
            <br />
            <a href="/code-of-conduct.md" target="_blank" rel="noopener noreferrer" className="text-osu-orange hover:text-osu-orange-light underline">
              MLH Code of Conduct
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}