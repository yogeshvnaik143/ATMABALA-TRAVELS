import { Phone, MessageCircle, Mail, MapPin, FileCode } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-[#0B192C] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Atmabala Travels Logo"
                className="h-10 w-auto object-contain brightness-110"
              />
              <span className="font-extrabold text-xl tracking-tight text-white">
                ATMABALA <span className="text-[#FF6500]">travels</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your premier partner for clean, reliable car rentals, airport pickups, and unforgettable coastal journeys across Gokarna, Kumta, and Karwar.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="tel:8073756776"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-[#FF6500] text-white transition-colors"
                title="Call 8073756776"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918073756776"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-[#25D366] text-white transition-colors"
                title="WhatsApp Harish G"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('fleet');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors"
                >
                  Our Fleet (Dzire, Crysta, Tempo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('packages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors"
                >
                  Tour Packages & Routes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('poster');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors"
                >
                  15 Gokarna Tourist Places
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors"
                >
                  About Atmabala Travels
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF6500] transition-colors"
                >
                  Contact & Bookings
                </button>
              </li>
            </ul>
          </div>

          {/* Standalone Repo Files */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-[#FF6500]" />
              Repository Files
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="/html/index.html" target="_blank" rel="noreferrer" className="hover:text-[#FF6500] transition-colors">
                  📄 /html/index.html ↗
                </a>
              </li>
              <li>
                <a href="/html/packages.html" target="_blank" rel="noreferrer" className="hover:text-[#FF6500] transition-colors">
                  📄 /html/packages.html ↗
                </a>
              </li>
              <li>
                <a href="/html/fleet.html" target="_blank" rel="noreferrer" className="hover:text-[#FF6500] transition-colors">
                  📄 /html/fleet.html ↗
                </a>
              </li>
              <li>
                <a href="/html/about.html" target="_blank" rel="noreferrer" className="hover:text-[#FF6500] transition-colors">
                  📄 /html/about.html ↗
                </a>
              </li>
              <li>
                <a href="/html/contact.html" target="_blank" rel="noreferrer" className="hover:text-[#FF6500] transition-colors">
                  📄 /html/contact.html ↗
                </a>
              </li>
              <li>
                <a href="/css/style.css" target="_blank" rel="noreferrer" className="hover:text-[#FF6500] transition-colors">
                  🎨 /css/style.css ↗
                </a>
              </li>
              <li>
                <a href="/js/script.js" target="_blank" rel="noreferrer" className="hover:text-[#FF6500] transition-colors">
                  ⚡ /js/script.js ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Office Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6500] shrink-0 mt-0.5" />
                <span>Gokarna & Kumta Hubs, Uttara Kannada, Karnataka</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6500] shrink-0" />
                <a href="tel:8073756776" className="text-white font-bold hover:text-[#FF6500]">
                  +91 8073756776 (Harish.G)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6500] shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2">
                Open 24 hours daily for instant bookings, station drops & airport transfers.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ATMABALA Travels. All rights reserved.</p>
          <p className="text-slate-400">
            Proprietor: <strong className="text-slate-300">Harish. G</strong> • Ph: 8073756776
          </p>
        </div>

      </div>
    </footer>
  );
}
