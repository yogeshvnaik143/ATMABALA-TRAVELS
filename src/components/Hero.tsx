import { useState, FormEvent } from 'react';
import { Phone, MessageCircle, MapPin, Car, Calendar, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { FLEET_VEHICLES, COMPANY_DETAILS } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
  onSelectVehicleForBooking: (vehicleId: string) => void;
  onViewPackages: () => void;
}

export default function Hero({ onOpenBooking, onSelectVehicleForBooking, onViewPackages }: HeroProps) {
  const [pickup, setPickup] = useState('Gokarna Town / Beach');
  const [vehicle, setVehicle] = useState('swift-dzire');
  const [tripType, setTripType] = useState('Gokarna Local Sightseeing');

  const handleQuickInquiry = (e: FormEvent) => {
    e.preventDefault();
    const selCar = FLEET_VEHICLES.find(v => v.id === vehicle)?.name || 'Car';
    const text = `Hello Harish G, I want to book ${selCar} from ${pickup} for ${tripType}. Please share availability and best price.`;
    window.open(`https://wa.me/918073756776?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F7F6] via-white to-[#F4F7F6]">
      {/* Background Decorative Accents */}
      <div className="absolute top-10 right-0 -mr-20 w-96 h-96 rounded-full bg-[#FF6500]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-[#0B192C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Location & Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B192C]/10 text-[#0B192C] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
              <MapPin className="w-4 h-4 text-[#FF6500]" />
              <span>Gokarna • Kumta • Karwar • Coastal Karnataka</span>
            </div>

            {/* Main Headline from original repo */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B192C] tracking-tight leading-[1.15] mb-6">
              Your <span className="text-[#FF6500] underline decoration-[#FF6500]/30 underline-offset-8">Journey</span>, Our Drive.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mb-8">
              {COMPANY_DETAILS.subtitle} Reliable taxi services, Goa & Hubli airport transfers, and private beach & temple pilgrimage tours.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="tel:8073756776"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FF6500] text-white font-bold text-base shadow-lg shadow-[#FF6500]/25 hover:bg-[#E55A00] transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                <span>Call Harish.G (8073756776)</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0B192C] text-white font-bold text-base shadow-lg shadow-[#0B192C]/20 hover:bg-[#162740] transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>WhatsApp Booking</span>
              </button>

              <button
                onClick={onViewPackages}
                className="flex items-center gap-2 px-5 py-3.5 rounded-full border-2 border-slate-300 text-slate-800 font-semibold text-base hover:border-[#FF6500] hover:text-[#FF6500] transition-colors"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 w-full max-w-lg">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#FF6500] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">24/7 Service</div>
                  <div className="text-[11px] text-slate-500">Day & Night Cabs</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#FF6500] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Verified Chauffeurs</div>
                  <div className="text-[11px] text-slate-500">Local Route Experts</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#FF6500] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Fair Pricing</div>
                  <div className="text-[11px] text-slate-500">Zero Hidden Fees</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Car Display & Quick Booking Bar */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Visual Car Card with Drive-in Animation Styling */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src="/images/swift-dzire.jpg"
                alt="Atmabala Travels Premium Car"
                className="w-full h-72 sm:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-[#FF6500] text-xs font-bold uppercase tracking-wider">Premium Fleet</span>
                <h3 className="text-white text-2xl font-bold">Swift Dzire, Innova & Tempo Travellers</h3>
                <p className="text-slate-300 text-xs mt-1">Immaculate condition • Air conditioned • Ample luggage room</p>
              </div>
            </div>

            {/* Quick Fare Inquiry Form */}
            <div className="w-full mt-6 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-[#0B192C] flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#FF6500]" />
                  Instant Trip Inquiry
                </h3>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Fast WhatsApp Reply
                </span>
              </div>

              <form onSubmit={handleQuickInquiry} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Pickup City / Station</label>
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                  >
                    <option value="Gokarna Town / Beach">Gokarna Town / Beach</option>
                    <option value="Gokarna Road Railway Station">Gokarna Road Railway Station (GOK)</option>
                    <option value="Kumta Town / Railway Station">Kumta Town / Railway Station (KT)</option>
                    <option value="Goa Airport (Dabolim / MOPA)">Goa Airport (Dabolim / MOPA)</option>
                    <option value="Hubli Airport / Railway Station">Hubli Airport / Railway Station</option>
                    <option value="Karwar Coastal Town">Karwar Coastal Town</option>
                    <option value="Murdeshwar Temple">Murdeshwar Temple</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Select Vehicle</label>
                    <select
                      value={vehicle}
                      onChange={(e) => {
                        setVehicle(e.target.value);
                        onSelectVehicleForBooking(e.target.value);
                      }}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                    >
                      {FLEET_VEHICLES.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name} ({v.capacity})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Tour Package</label>
                    <select
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
                    >
                      <option value="Gokarna Local Sightseeing">Gokarna Local Sightseeing</option>
                      <option value="Kumta & Apsara Konda Tour">Kumta & Apsara Konda Tour</option>
                      <option value="Yana Caves & Vibhuti Falls">Yana Caves & Vibhuti Falls</option>
                      <option value="Murdeshwar & Jog Falls Tour">Murdeshwar & Jog Falls Tour</option>
                      <option value="Airport Pickup / Drop">Airport Pickup / Drop</option>
                      <option value="Custom Outstation Tour">Custom Outstation Tour</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#FF6500] hover:bg-[#E55A00] text-white font-bold rounded-lg text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  Get Fare Quote on WhatsApp
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
