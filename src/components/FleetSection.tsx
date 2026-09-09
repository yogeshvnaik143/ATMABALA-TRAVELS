import { useState } from 'react';
import { Users, Briefcase, Snowflake, Phone, MessageCircle, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FLEET_VEHICLES } from '../data';
import { FleetVehicle } from '../types';

interface FleetSectionProps {
  onBookVehicle: (vehicle: FleetVehicle) => void;
}

export default function FleetSection({ onBookVehicle }: FleetSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Fleet' },
    { id: 'Sedan', label: 'Sedans (4+1)' },
    { id: 'Luxury MPV', label: 'Innova / MPV' },
    { id: 'Mini Bus / Van', label: 'Tempo Traveller' },
  ];

  const filteredFleet = selectedCategory === 'all'
    ? FLEET_VEHICLES
    : FLEET_VEHICLES.filter(v => v.category === selectedCategory);

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#FF6500] font-bold text-sm tracking-wider uppercase inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Clean, Reliable & Air Conditioned
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] mt-2 tracking-tight">
            Our Premium Fleet
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Choose from well-maintained sedans, luxury MPVs, and group Tempo Travellers with courteous, experienced local chauffeurs.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B192C] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Fleet Grid with motion layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredFleet.map((vehicle) => (
              <motion.div
                layout
                key={vehicle.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col bg-[#F4F7F6] rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-shadow group"
              >
                {/* Vehicle Image Container */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-800">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/innova-crysta.jpg';
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-[#0B192C]/85 text-white backdrop-blur-xs shadow-xs">
                    {vehicle.category}
                  </span>
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-[#FF6500] text-white shadow-xs">
                    AC Enabled
                  </span>
                </div>

                {/* Vehicle Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B192C] group-hover:text-[#FF6500] transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {vehicle.tagline}
                    </p>

                    {/* Key Specifications */}
                    <div className="grid grid-cols-2 gap-2 my-4 py-3 border-y border-slate-200/80 text-xs text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#FF6500]" />
                        <span>{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#FF6500]" />
                        <span>{vehicle.luggage}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Snowflake className="w-3.5 h-3.5 text-[#FF6500]" />
                        <span>Climate AC</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-bold text-[#0B192C]">
                        <span>Starting ₹{vehicle.pricePerKm}/km</span>
                      </div>
                    </div>

                    {/* Features Bullet points */}
                    <div className="space-y-1.5 mb-6">
                      {vehicle.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking & Call Actions */}
                  <div className="space-y-2 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onBookVehicle(vehicle)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#0B192C] text-white text-sm font-bold shadow-sm hover:bg-[#162740] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Inquire Vehicle</span>
                    </motion.button>

                    <a
                      href="tel:8073756776"
                      className="w-full py-2 px-4 rounded-xl border border-slate-300 text-slate-800 text-xs font-semibold hover:border-[#FF6500] hover:text-[#FF6500] transition-colors flex items-center justify-center gap-1.5 bg-white"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#FF6500]" />
                      <span>Call Harish.G (8073756776)</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fleet Extras Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-r from-slate-900 to-[#0B192C] text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-[#FF6500] text-xs font-bold uppercase tracking-wider">Custom Transport Group Support</span>
            <h4 className="text-lg sm:text-xl font-bold mt-1">Need a customized bus or luxury wedding coach?</h4>
            <p className="text-sm text-slate-300 mt-1">
              We arrange 25-seater & 32-seater luxury coaches, pilgrimage convoys, and outstation multi-day tours.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20need%20custom%20vehicle%20booking%20or%20luxury%20bus%20for%20Atmabala%20Travels"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-[#FF6500] text-white font-bold text-sm shadow-md hover:bg-[#E55A00] transition-all"
          >
            Ask for Custom Coach
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
