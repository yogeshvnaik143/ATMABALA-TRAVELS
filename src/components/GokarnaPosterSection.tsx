import { useState } from 'react';
import { Phone, MapPin, Clock, Search, ExternalLink, X, MessageCircle } from 'lucide-react';
import { TOURIST_DESTINATIONS } from '../data';
import { TouristDestination } from '../types';

export default function GokarnaPosterSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPlace, setSelectedPlace] = useState<TouristDestination | null>(null);

  const categories = [
    { id: 'all', label: 'All 15 Places' },
    { id: 'temple', label: 'Sacred Temples' },
    { id: 'beach', label: 'Scenic Beaches' },
    { id: 'nature', label: 'Waterfalls & Caves' },
    { id: 'heritage', label: 'Heritage & Sightseeing' },
  ];

  const filteredPlaces = TOURIST_DESTINATIONS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="poster" className="py-20 bg-[#050814] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Poster Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <span className="text-[#D4AF37] font-['Cinzel'] tracking-widest text-xs font-bold uppercase">
              Official Sightseeing Flyer
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Cinzel'] text-white">
              Gokarna Nearest Places to Visit
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/HTML/packages.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#FFF7A1] text-xs font-bold hover:bg-[#D4AF37]/30 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open Original packages.html
            </a>

            <a
              href="tel:8073756776"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D4AF37] text-[#050814] text-xs font-extrabold hover:bg-[#FFF7A1] transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Harish.G (8073756776)
            </a>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === c.id
                    ? 'bg-[#D4AF37] text-[#0a1128] shadow-md shadow-[#D4AF37]/30'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-[#D4AF37]/50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search temple, beach, falls..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-[#D4AF37]"
            />
          </div>
        </div>

        {/* ================= DIGITAL POSTER CONTAINER ================= */}
        <div className="rounded-xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-[#0a1128] via-[#100c24] to-[#160a2b] border-4 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.25)] relative overflow-hidden">
          
          {/* Ornate Gold Border Styling */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Cinzel'] tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#FFF7A1] via-[#D4AF37] to-[#996515] drop-shadow-md">
              ATMABALA
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Cinzel'] tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#FFF7A1] via-[#D4AF37] to-[#996515] mt-1 drop-shadow-md">
              GOKARNA TRAVELS
            </h2>
            <p className="text-[#FFF7A1]/80 text-xs sm:text-sm font-medium tracking-widest uppercase mt-2">
              Nearest Places To Visit Around Gokarna & Uttara Kannada
            </p>
          </div>

          {/* 3-Column Poster Grid matching original */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredPlaces.map((place) => (
              <div
                key={place.id}
                onClick={() => setSelectedPlace(place)}
                className="flex flex-col items-center text-center cursor-pointer group transition-transform duration-300 hover:scale-[1.03]"
              >
                {/* Gold Framed Image */}
                <div className="relative w-full h-56 rounded-lg overflow-hidden border-[5px] border-[#D4AF37] shadow-xl group-hover:border-[#FFF7A1] transition-all">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-[10px] font-bold text-[#FFF7A1] backdrop-blur-xs">
                    {place.distanceFromGokarna}
                  </span>
                </div>

                {/* Cursive Great Vibes Title */}
                <h3 className="font-['Great_Vibes'] text-[#F1C40F] text-3xl sm:text-4xl mt-4 font-normal tracking-wide drop-shadow-[2px_3px_5px_rgba(0,0,0,0.9)] group-hover:text-[#FFF7A1] transition-colors leading-tight">
                  {place.title}
                </h3>

                <p className="text-xs text-slate-300 mt-1 max-w-xs line-clamp-2">
                  {place.description}
                </p>

                <span className="text-[11px] text-[#D4AF37] mt-2 underline decoration-[#D4AF37]/40 font-semibold group-hover:text-white">
                  View Route & Cab Details →
                </span>
              </div>
            ))}
          </div>

          {/* Poster Footer / Contact Bar (matching original) */}
          <div className="text-center mt-16 pt-8 border-t-2 border-dashed border-[#D4AF37]/40 flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-[#FFF7A1]/80 mb-2 font-['Cinzel']">
              Direct Booking & Inquiries
            </span>
            <a
              href="tel:8073756776"
              className="inline-block px-8 py-3.5 rounded-full bg-black/60 border-2 border-[#D4AF37] text-[#FFF7A1] font-['Cinzel'] font-bold text-2xl sm:text-3xl hover:bg-[#D4AF37]/20 hover:scale-105 transition-all shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
            >
              8073756776 (Harish.G)
            </a>
            <p className="text-xs text-slate-400 mt-3">
              Prompt door-to-door cab service for all 15 tourist locations across Gokarna & Kumta.
            </p>
          </div>

        </div>

        {/* Place Detail Modal */}
        {selectedPlace && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0a1128] border-2 border-[#D4AF37] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
              <div className="relative h-60 w-full">
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/70 text-white hover:bg-black"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 text-xs font-bold text-[#FFF7A1] border border-[#D4AF37]/50">
                  {selectedPlace.distanceFromGokarna}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-['Cinzel'] text-2xl font-bold text-[#FFF7A1] mb-2">
                  {selectedPlace.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {selectedPlace.description}
                </p>

                <div className="space-y-2 text-xs bg-black/40 p-3.5 rounded-xl border border-slate-800 mb-6">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span><strong>Distance:</strong> {selectedPlace.distanceFromGokarna}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span><strong>Best Visit Time:</strong> {selectedPlace.bestTimeToVisit}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20want%20to%20book%20a%20cab%20to%20visit%20${encodeURIComponent(selectedPlace.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl bg-[#25D366] text-slate-950 font-bold text-sm hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book Cab via WhatsApp</span>
                  </a>

                  <a
                    href="tel:8073756776"
                    className="px-4 py-3 rounded-xl border border-[#D4AF37] text-[#FFF7A1] font-bold text-sm hover:bg-[#D4AF37]/20 transition-all flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
