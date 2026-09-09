import { FleetVehicle, TravelPackage, TouristDestination } from './types';

export const COMPANY_DETAILS = {
  name: 'ATMABALA Travels',
  tagline: 'Your Journey, Our Drive.',
  subtitle: 'Premium car rentals and coastal travel packages for every adventure.',
  founder: 'Harish. G',
  phone: '+91 8073756776',
  rawPhone: '8073756776',
  whatsappUrl: 'https://wa.me/918073756776',
  email: 'bookings@atmabalatravels.com',
  locations: {
    gokarna: 'Main Bus Stand Road, Gokarna, Uttara Kannada, Karnataka 581326',
    kumta: 'National Highway Main Hub, Kumta, Uttara Kannada, Karnataka 581343'
  },
  stats: {
    happyCustomers: '15,000+',
    successfulTrips: '850+',
    premiumCars: '45+',
    rating: '4.9 ★'
  }
};

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    category: 'Sedan',
    capacity: '4 + 1 Passengers',
    luggage: '2 Medium Bags',
    ac: true,
    image: '/images/swift-dzire.jpg',
    tagline: 'Economical & comfortable sedan for couples, families, and city hops.',
    description: 'Perfect for local Gokarna temple visits, Kumta town travel, and quick coastal hops with chilled AC and smooth driving.',
    pricePerKm: 14,
    perDayEstimate: 2400,
    features: ['Chilled Air Conditioning', 'Bluetooth Audio System', 'Generous Legroom', 'Clean & Sanitized Interiors']
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    category: 'Luxury MPV',
    capacity: '6+1 / 7+1 Passengers',
    luggage: '4 Large Bags',
    ac: true,
    image: '/images/innova-crysta.jpg',
    tagline: 'Spacious luxury comfort for coastal highways and family vacations.',
    description: 'The undisputed king of road comfort. Plush captain seats, dual-zone AC, and generous luggage capacity for long journeys.',
    pricePerKm: 20,
    perDayEstimate: 3800,
    features: ['Captain Seat Comfort', 'Dual Zone Climate Control', 'Highway Cruising Stability', 'Roof Carrier Available']
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    category: 'Mini Bus / Van',
    capacity: '12 to 20 Passengers',
    luggage: '10+ Bags & Luggage Deck',
    ac: true,
    image: '/images/tempo-traveller.jpg',
    tagline: 'Group adventures, corporate retreats, and large family pilgrim tours.',
    description: 'Individual pushback luxury seats, high roof walk-in aisle, premium surround sound, and ample boot space for luggage.',
    pricePerKm: 26,
    perDayEstimate: 5500,
    features: ['Pushback Recliner Seats', 'High Ceiling Air Flow', 'LED Entertainment TV', 'Dedicated Luggage Carrier']
  },
  {
    id: 'ertiga-smart',
    name: 'Maruti Ertiga Hybrid',
    category: 'Compact MUV',
    capacity: '6 Passengers',
    luggage: '3 Bags',
    ac: true,
    image: '/images/maruti-ertiga.jpg',
    tagline: 'Budget-friendly 6-seater for small groups and airport transfers.',
    description: 'Affordable and flexible seating with superior mileage and comfort on coastal ghat roads.',
    pricePerKm: 16,
    perDayEstimate: 2900,
    features: ['Rear AC Vents', 'Foldable 3rd Row', 'USB Fast Charging', 'Smooth Suspension']
  }
];

export const POPULAR_PACKAGES: TravelPackage[] = [
  {
    id: 'kumta-tour',
    title: 'Kumta City & Beach Tour',
    duration: '1 Day',
    highlights: ['Vannalli Beach', 'Mangrove Boardwalk', 'Apsara Konda Waterfall', 'Kumta Heritage Market'],
    route: 'Kumta → Vannalli → Apsara Konda → Boardwalk → Kumta',
    popularFor: 'Serene uncrowded beaches & natural sunset viewpoints',
    recommendedVehicle: 'Swift Dzire or Ertiga',
    startingPrice: '₹ 2,200'
  },
  {
    id: 'gokarna-weekend',
    title: 'Gokarna Coastal Weekend',
    duration: '2 Days / 1 Night',
    highlights: ['Mahabaleshwar & Mahaganapati Temple', 'Om Beach & Kudle Beach Trek', 'Yana Rocks Monoliths', 'Vibhuti Waterfalls'],
    route: 'Gokarna → Om Beach → Kudle → Yana Caves → Vibhuti Falls',
    popularFor: 'Beach cafes, spiritual darshan, and forest nature exploration',
    recommendedVehicle: 'Innova Crysta or Dzire',
    startingPrice: '₹ 4,800'
  },
  {
    id: 'karwar-scenic',
    title: 'Karwar Scenic Coastal Route',
    duration: '3 Days / 2 Nights',
    highlights: ['Rabindranath Tagore Beach', 'INS Chapal Warship Museum', 'Devbagh Island Jetty', 'Sadashivgad Fort Sunset'],
    route: 'Kumta/Gokarna → Ankola → Karwar Coastal Highway → Sadashivgad',
    popularFor: 'Spectacular Kali river estuary, water sports & seafood',
    recommendedVehicle: 'Innova Crysta or Tempo Traveller',
    startingPrice: '₹ 7,500'
  },
  {
    id: 'murdeshwar-jog',
    title: 'Murdeshwar & Jog Falls Tour',
    duration: '1 Full Day',
    highlights: ['Murdeshwar Giant Shiva Statue', 'Raja Gopuram Lift & Beach', 'Jog Falls (India\'s 2nd Highest Plunge Waterfall)', 'Sharavati Valley View'],
    route: 'Gokarna → Honnavar → Murdeshwar → Jog Falls → Return',
    popularFor: 'Iconic pilgrimage & scenic Western Ghats rainforest vistas',
    recommendedVehicle: 'Innova Crysta or Tempo Traveller',
    startingPrice: '₹ 4,200'
  }
];

export const TOURIST_DESTINATIONS: TouristDestination[] = [
  {
    id: '1',
    title: 'Mahabaleshwar Temple',
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: 'Heart of Town (0 km)',
    bestTimeToVisit: 'Morning 6:00 AM - 12:30 PM & 5:00 PM - 8:00 PM',
    description: 'The sacred 4th-century Dravidian temple housing the legendary Atmalinga consecrated by Lord Shiva and worshipped by thousands of pilgrims.'
  },
  {
    id: '2',
    title: 'Mahaganapati Temple',
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: 'Beside Mahabaleshwar Temple',
    bestTimeToVisit: 'Early morning before visiting the Atmalinga',
    description: 'Ancient standing Ganesha deity temple honoring the boy Ganesha who tricked the demon king Ravana to place the Atmalinga down.'
  },
  {
    id: '3',
    title: 'Ramateertha Temple & Beach',
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1600387802805-4d4ebdc3eb4c?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '1.5 km from Main Town',
    bestTimeToVisit: 'Sunrise & Evening Sunset',
    description: 'Serene sacred water spring surrounded by coconut groves with an expansive panorama over the Arabian Sea.'
  },
  {
    id: '4',
    title: 'Om Beach',
    category: 'beach',
    image: 'https://images.unsplash.com/photo-1590528005256-42d3c907b3b3?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '6 km from Gokarna center',
    bestTimeToVisit: 'Afternoon till Sunset (3:30 PM - 7:00 PM)',
    description: 'World-famous crescent beach naturally contoured into two semi-circular coves resembling the auspicious spiritual Sanskrit symbol Om (ॐ).'
  },
  {
    id: '5',
    title: 'Kudle Beach',
    category: 'beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '2 km from Gokarna center',
    bestTimeToVisit: 'Late afternoon & sunset cafe dinners',
    description: 'Sweeping golden sand beach enclosed by towering rocky hills with vibrant beachside shacks, yoga corners, and tranquil tides.'
  },
  {
    id: '6',
    title: 'Belekhan Beach & Anjaneya Temple',
    category: 'beach',
    image: 'https://images.unsplash.com/photo-1520935515357-196561fbe61d?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '8 km South of Gokarna',
    bestTimeToVisit: 'Morning for peaceful nature strolls',
    description: 'Quiet rocky shore with the historic hillside Anjaneya (Lord Hanuman) temple offering crystal blue coastal waters.'
  },
  {
    id: '7',
    title: 'Shiva Cave (Gogarbha)',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1624514064560-fca3aa9a4eb0?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '1.5 km near Kudle road',
    bestTimeToVisit: 'Daylight hours with flashlights',
    description: 'Mystical rock cave associated with the mythological emergence of Lord Shiva from the ear of a cow (Gokarna meaning cows ear).'
  },
  {
    id: '8',
    title: 'Vibhuti Falls',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1623946059868-8091807d0d0f?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '45 km through Sahyadri hills',
    bestTimeToVisit: 'Post-Monsoon & Winter (Sept - Feb)',
    description: 'Multi-tiered natural forest waterfall dropping into crystal-clear turquoise limestone plunge pools perfect for a refreshing dip.'
  },
  {
    id: '9',
    title: 'Murdeshwar Temple & Beach',
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '78 km South via NH-66',
    bestTimeToVisit: 'Full day trip (Morning to Sunset)',
    description: 'Home to the magnificent 123-foot tall statue of Lord Shiva perched on Kanduka Hill surrounded on three sides by the roaring Arabian Sea.'
  },
  {
    id: '10',
    title: 'Apsara Konda',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1524220300957-612ce6ba1a30?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '52 km near Honnavar',
    bestTimeToVisit: 'Morning or late afternoon',
    description: 'Known as the "Pond of Angels", featuring a freshwater plunge pool, gentle cascade, and hill-top sunset viewpoint over the sea.'
  },
  {
    id: '11',
    title: 'Mangrove Boardwalk',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1622619472658-29be97e974e4?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '35 km near Kumta / Honnavar',
    bestTimeToVisit: 'High tide times for boat cruising',
    description: 'Elevated wooden trail weaving through lush tidal mangrove forests with rare migratory birds and estuarine boat rides.'
  },
  {
    id: '12',
    title: 'Sharavati Water Sports & Backwater',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '48 km near Honnavar',
    bestTimeToVisit: '10:00 AM - 5:00 PM',
    description: 'Thrilling water rides including jet-skis, speedboats, banana rides, and kayaking in the calm Sharavati river backwaters.'
  },
  {
    id: '13',
    title: 'Yana Caves & Monoliths',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1506509689886-c5679957d3bf?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '50 km via forest ghat road',
    bestTimeToVisit: 'Morning 9:00 AM - 1:00 PM',
    description: 'Two gigantic black crystalline limestone rock monoliths (Bhairaveshwara and Mohini peaks) towering inside dense rainforests.'
  },
  {
    id: '14',
    title: 'Sharavati Backwater & Boating',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: '45 km near Honnavar Eco-beach',
    bestTimeToVisit: 'Sunset golden hour boat cruise',
    description: 'Tranquil emerald waters where the Sharavati river meets the Arabian sea, lined with scenic suspension bridges and islands.'
  },
  {
    id: '15',
    title: 'Kotiteertha Lake & Temple',
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80',
    distanceFromGokarna: 'Walking distance in Gokarna town',
    bestTimeToVisit: 'Early morning & Deepotsava evening',
    description: 'A vast man-made sacred lake surrounded by ancient stone shrines, temples, and banyan trees where pilgrims take holy cleansing baths.'
  }
];
