import { Users, Briefcase, Snowflake, Phone, MessageCircle, Check } from 'lucide-react';
import { FLEET_VEHICLES } from '../data';
import { FleetVehicle } from '../types';

interface FleetSectionProps {
  onBookVehicle: (vehicle: FleetVehicle) => void;
}

export default function FleetSection({ onBookVehicle }: FleetSectionProps) {
  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF6500] font-bold text-sm tracking-wider uppercase">
            Clean, Reliable & Air Conditioned
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] mt-2 tracking-tight">
            Our Premium Fleet
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Choose from well-maintained sedans, luxury MPVs, and group Tempo Travellers with courteous, experienced local chauffeurs.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FLEET_VEHICLES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex flex-col bg-[#F4F7F6] rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Vehicle Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-800">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-[#0B192C]/85 text-white backdrop-blur-xs">
                  {vehicle.category}
                </span>
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-[#FF6500] text-white">
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
                  <button
                    onClick={() => onBookVehicle(vehicle)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0B192C] text-white text-sm font-bold shadow-sm hover:bg-[#162740] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Inquire Vehicle</span>
                  </button>

                  <a
                    href="tel:8073756776"
                    className="w-full py-2 px-4 rounded-xl border border-slate-300 text-slate-800 text-xs font-semibold hover:border-[#FF6500] hover:text-[#FF6500] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF6500]" />
                    <span>Call Harish.G (8073756776)</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Fleet Extras Note */}
        <div className="mt-12 bg-[#F4F7F6] rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-[#0B192C]">Need a customized vehicle or commercial bus?</h4>
            <p className="text-sm text-slate-600 mt-1">
              We also arrange 25-seater & 32-seater luxury coaches, wedding convoy cars, and wheelchair-accessible transport on request.
            </p>
          </div>
          <a
            href="https://wa.me/918073756776?text=Hi%20Harish%20G,%20I%20need%20custom%20vehicle%20booking%20or%20luxury%20bus%20for%20Atmabala%20Travels"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-[#FF6500] text-white font-bold text-sm shadow-md hover:bg-[#E55A00] transition-all"
          >
            Ask for Custom Coach
          </a>
        </div>
      </div>
    </section>
  );
}
