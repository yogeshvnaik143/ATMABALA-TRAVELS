import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, FileCode } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'fleet', label: 'Our Fleet' },
    { id: 'packages', label: 'Packages' },
    { id: 'poster', label: 'Gokarna Poster (15 Places)' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs ${
        isScrolled ? 'py-2.5 shadow-md' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand Title */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left focus:outline-hidden group"
          id="header-logo-btn"
        >
          <img
            src="/images/logo.png"
            alt="Atmabala Travels Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-[#0B192C]">
              ATMABALA <span className="text-[#FF6500] font-bold">travels</span>
            </span>
            <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
              Gokarna • Kumta • Karwar
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              id={`nav-${item.id}`}
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-[#0B192C] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#FF6500] hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:8073756776"
            id="call-harish-btn"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-300 text-slate-800 text-sm font-semibold hover:border-[#FF6500] hover:text-[#FF6500] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FF6500]" />
            <span>8073756776</span>
          </a>

          <button
            onClick={onOpenBooking}
            id="header-book-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6500] text-white text-sm font-bold shadow-sm hover:bg-[#E55A00] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book Ride</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl transition-all">
          <div className="flex flex-col gap-1.5 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-[#0B192C] text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="tel:8073756776"
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-100 text-slate-900 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-[#FF6500]" />
              Call Harish.G (+91 8073756776)
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#FF6500] text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Book Vehicle on WhatsApp
            </button>

            <div className="text-center pt-2">
              <a
                href="/HTML/INDEX.HTML"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-medium"
              >
                <FileCode className="w-3.5 h-3.5" />
                View Original HTML Repo Files
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
