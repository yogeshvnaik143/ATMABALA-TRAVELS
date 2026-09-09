import { useState, useEffect, FormEvent } from 'react';
import { X, Send, Phone, Car } from 'lucide-react';
import { FLEET_VEHICLES } from '../data';
import { FleetVehicle, TravelPackage } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: FleetVehicle | null;
  initialPackage?: TravelPackage | null;
}

export default function BookingModal({ isOpen, onClose, initialVehicle, initialPackage }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState('Gokarna Town / Beach');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedVehicleId, setSelectedVehicleId] = useState(initialVehicle?.id || 'swift-dzire');
  const [passengers, setPassengers] = useState(2);

  useEffect(() => {
    if (initialVehicle) {
      setSelectedVehicleId(initialVehicle.id);
    }
  }, [initialVehicle]);

  useEffect(() => {
    if (initialPackage) {
      setDestination(initialPackage.title);
    }
  }, [initialPackage]);

  if (!isOpen) return null;

  const currentCar = FLEET_VEHICLES.find(v => v.id === selectedVehicleId) || FLEET_VEHICLES[0];

  const handleSendBooking = (e: FormEvent) => {
    e.preventDefault();
    const text = `*New Ride Booking - Atmabala Travels*%0A` +
      `*Customer:* ${name || 'Customer'}%0A` +
      `*Phone:* ${phone || 'Not provided'}%0A` +
      `*Pickup:* ${pickup}%0A` +
      `*Destination/Tour:* ${destination || 'Sightseeing'}%0A` +
      `*Vehicle:* ${currentCar.name} (${currentCar.capacity})%0A` +
      `*Passengers:* ${passengers}%0A` +
      `*Date:* ${date}`;

    window.open(`https://wa.me/918073756776?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#FF6500] text-white">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Book Atmabala Cab</h3>
              <p className="text-xs text-slate-300">Instant confirmation via WhatsApp or Phone</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendBooking} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Anand Kulkarni"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / WhatsApp</label>
              <input
                type="tel"
                required
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Travel Date</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Select Car</label>
              <select
                value={selectedVehicleId}
                onChange={(e) => setSelectedVehicleId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
              >
                {FLEET_VEHICLES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} ({v.capacity})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Passengers</label>
              <input
                type="number"
                min={1}
                max={20}
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value) || 1)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Pickup Location</label>
            <input
              type="text"
              required
              placeholder="e.g. Gokarna Road Station, Kudle Beach, Kumta"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Drop / Sightseeing Plan</label>
            <input
              type="text"
              required
              placeholder="e.g. Yana Caves, Vibhuti Falls, Murdeshwar"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FF6500]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#25D366] text-slate-950 font-extrabold rounded-xl text-sm shadow-md hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Booking Request to WhatsApp Desk</span>
            </button>
          </div>

          <div className="text-center pt-1">
            <a
              href="tel:8073756776"
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#FF6500] font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6500]" />
              Or Call Harish.G directly: +91 8073756776
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
