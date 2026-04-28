import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Logo size="md" variant="white" />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Empowering minds, building futures. Quality education across academics, communication, and technology.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-blue flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-blue flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-blue flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-blue flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-semibold mb-4">Departments</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/materials" className="hover:text-brand-blue-light transition-colors">
                  K-12 Academy
                </Link>
              </li>
              <li>
                <Link to="/materials" className="hover:text-brand-orange-light transition-colors">
                  English & Communication
                </Link>
              </li>
              <li>
                <Link to="/materials" className="hover:text-brand-green-light transition-colors">
                  Programming & Coding
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/materials" className="hover:text-white transition-colors">Free Materials</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Student Login</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Teacher Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-brand-blue-light mt-1 flex-shrink-0" />
                <span>Your Institute Address,<br />City, State - PIN Code</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-blue-light flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">
                  +91 XXXX XXXXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-blue-light flex-shrink-0" />
                <a href="mailto:info@curiousminds.edu" className="hover:text-white transition-colors">
                  info@curiousminds.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Curious Minds Educational Institute. All rights reserved.</p>
          <p className="text-brand-orange-light font-medium">Learn Anywhere, Grow Everywhere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
