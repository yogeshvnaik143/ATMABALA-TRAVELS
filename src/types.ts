export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  capacity: string;
  luggage: string;
  ac: boolean;
  image: string;
  tagline: string;
  description: string;
  pricePerKm: number;
  perDayEstimate: number;
  features: string[];
}

export interface TravelPackage {
  id: string;
  title: string;
  duration: string;
  highlights: string[];
  route: string;
  popularFor: string;
  recommendedVehicle: string;
  startingPrice: string;
}

export interface TouristDestination {
  id: string;
  title: string;
  category: 'temple' | 'beach' | 'nature' | 'heritage';
  image: string;
  distanceFromGokarna: string;
  bestTimeToVisit: string;
  description: string;
}

export interface BookingFormState {
  fullName: string;
  phoneNumber: string;
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  passengers: number;
  selectedVehicle: string;
  selectedPackage?: string;
  tripType: 'one-way' | 'round-trip' | 'sightseeing' | 'package';
  specialNotes: string;
}
