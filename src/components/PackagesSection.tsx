import { useState } from 'react';
import { Clock, MapPin, CheckCircle, ArrowRight, Car, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { POPULAR_PACKAGES } from '../data';
import { TravelPackage } from '../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onViewPosterPlaces: () => void;
}

export default function PackagesSection({ onSelectPackage, onViewPosterPlaces }: PackagesSectionProps) {
  const [filterDuration, setFilterDuration] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Packages' },
    { id: '1 Day', label: '1 Day Tours' },
    { id: '2 Days', label: '2 Days / 1 Night' },
    { id: '3-4 Days', label: '3-4 Days Coastal' },
  ];

  const filteredPackages = filterDuration === 'all'
    ? POPULAR_PACKAGES
    : POPULAR_PACKAGES.filter(p => {
        if (filterDuration === '1 Day') return p.duration.includes('1 Day');
        if (filterDuration === '2 Days') return p.duration.includes('2 Days');
        if (filterDuration === '3-4 Days') return p.duration.includes('3') || p.duration.includes('4');
        return true;
      });

  return (
    <section id="packages" className="py-20 bg-[#F4F7F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#FF6500] font-bold text-sm tracking-wider uppercase inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Curated Coastal Itineraries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] mt-2 tracking-tight">
            Popular Travel Packages
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Experience the finest coastal beaches, historic Dravidian temples, backwaters, and lush waterfalls with our pre-planned sightseeing tours.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => {
              const isSelected = filterDuration === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilterDuration(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B192C] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Animated SVG Route Map (from original INDEX.HTML) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-16 overflow-hidden"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#0B192C]">Our Golden Coastal Route Network</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Seamless round-trip connectivity across Uttara Kannada coastal highways</p>
          </div>

          <div className="relative py-4">
            {/* SVG Wave Line */}
            <div className="hidden md:block w-full overflow-hidden">
              <svg className="w-full h-24" viewBox="0 0 800 100" preserveAspectRatio="none">
                <path
                  d="M 50,50 Q 250,0 400,50 T 750,50"
                  fill="transparent"
                  stroke="#FF6500"
                  strokeWidth="4"
                  strokeDasharray="12 12"
                  className="animate-pulse opacity-60"
                />
              </svg>
            </div>

            {/* Route Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 -mt-2 md:-mt-12">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#F4F7F6] p-5 rounded-xl border border-slate-200 shadow-xs text-center flex flex-col items-center"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF6500] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold mb-3">
                  1
                </div>
                <h4 className="text-lg font-bold text-[#0B192C]">Kumta City & Beaches</h4>
                <span className="text-xs font-bold text-[#FF6500] bg-[#FF6500]/10 px-2.5 py-0.5 rounded-full mt-1">
                  1 Day Tour
                </span>
                <p className="text-xs text-slate-500 mt-2">Vannalli Beach, Apsara Konda & Mangrove Boardwalk</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#F4F7F6] p-5 rounded-xl border border-slate-200 shadow-xs text-center flex flex-col items-center"
              >
                <div className="w-8 h-8 rounded-full bg-[#0B192C] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold mb-3">
                  2
                </div>
                <h4 className="text-lg font-bold text-[#0B192C]">Gokarna Coastal Weekend</h4>
                <span className="text-xs font-bold text-[#FF6500] bg-[#FF6500]/10 px-2.5 py-0.5 rounded-full mt-1">
                  2 Days / 1 Night
                </span>
                <p className="text-xs text-slate-500 mt-2">Mahabaleshwar Temple, Om & Kudle Beach, Yana Caves</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#F4F7F6] p-5 rounded-xl border border-slate-200 shadow-xs text-center flex flex-col items-center"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF6500] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold mb-3">
                  3
                </div>
                <h4 className="text-lg font-bold text-[#0B192C]">Karwar Scenic Coastal Route</h4>
                <span className="text-xs font-bold text-[#FF6500] bg-[#FF6500]/10 px-2.5 py-0.5 rounded-full mt-1">
                  3 Days / 2 Nights
                </span>
                <p className="text-xs text-slate-500 mt-2">Tagore Beach, Warship Museum & Kali River Estuary</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Packages Grid with motion layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredPackages.map((pkg) => (
              <motion.div
                layout
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0B192C] text-white">
                      <Clock className="w-3.5 h-3.5 text-[#FF6500]" />
                      {pkg.duration}
                    </span>
                    <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                      {pkg.startingPrice} onwards
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B192C] mb-2">{pkg.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-4">{pkg.popularFor}</p>

                  {/* Route Path */}
                  <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 font-medium mb-5 flex items-start gap-2 border border-slate-100">
                    <MapPin className="w-4 h-4 text-[#FF6500] shrink-0 mt-0.5" />
                    <span>{pkg.route}</span>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Key Attractions:
                    </span>
                    {pkg.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#FF6500] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-[#F4F7F6] p-2.5 rounded-lg">
                    <Car className="w-4 h-4 text-slate-700" />
                    <span>Recommended Vehicle: <strong className="text-slate-800">{pkg.recommendedVehicle}</strong></span>
                  </div>
                </div>

                {/* Package Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectPackage(pkg)}
                    className="flex-1 py-3 rounded-xl bg-[#FF6500] text-white font-bold text-sm shadow-md hover:bg-[#E55A00] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book This Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <a
                    href={`https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(pkg.title)}%20package`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl border border-slate-300 text-slate-800 text-sm font-semibold hover:border-[#25D366] hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore Poster Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-r from-[#0a1128] to-[#160a2b] rounded-2xl p-8 text-center text-white border-2 border-[#D4AF37] shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2 font-['Cinzel']">
              The Famous Gokarna Digital Poster
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-[#FFF7A1] font-['Cinzel']">
              15 Nearest Places to Visit Around Gokarna
            </h3>
            <p className="text-slate-300 text-sm mb-6">
              View our complete digital poster grid with temples, beaches, Yana Caves, Vibhuti Falls, and Murdeshwar.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onViewPosterPlaces}
              className="px-8 py-3.5 rounded-full bg-[#D4AF37] text-[#0a1128] font-black text-sm uppercase tracking-wider shadow-lg hover:bg-[#FFF7A1] transition-all cursor-pointer"
            >
              Open 15-Place Tourist Poster
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
