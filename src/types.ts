export interface Room {
  id: string;
  name: string;
  tagline: string;
  guests: number;
  bedType: string;
  size: string;
  view: string;
  pricePerNight: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  highlights: string[];
  isFeatured?: boolean;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  adults: number;
  children: number;
  roomsCount: number;
  selectedRoomId: string | null;
  selectedAddOns: string[];
  guestInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    specialRequests: string;
    arrivalEstimatedTime: string;
  };
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'wellness' | 'dining' | 'transport' | 'experience';
  icon: string;
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  timings: string;
  features: string[];
}

export interface DiningVenue {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  cuisine: string;
  image: string;
  hours: string;
  dressCode: string;
  signatureDishes: { name: string; desc: string; price: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'nature' | 'dining' | 'wellness' | 'architecture';
  image: string;
  caption: string;
}
