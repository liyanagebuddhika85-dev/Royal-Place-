import { Room, AddOn, Facility, DiningVenue, GalleryItem } from '../types';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwmMTFl6PWLh86ecmsysC3hFG0dsCuufWSNJzLxKWVcZXg3X13ayn7ZspvucauZKajX0Z9hbe4kPBb-9bxH3QejfuEIJNGWsFeyA0SXfPMM7qHQS8_N8smHFaelw52j6rUDZmeS1hDQydqCrpy9C5VKYqZncwOv77vkAIi8SeNMYQ7ePSHu5Bjb0Yol0MtHU8h8E-jK6IFWAkB4K9aUeQ1ELUkDnECjllpShGIKfJXubOayTEDLbzF';

export const INTRO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNb-ySBiiyGMVZES_EjRGh-JyWE8xX8jqZhXYv1zIHejyrneF5Bl4jQUEFgA5oB2cL4bvmCvVBoltns9w_32EwcHTs5uTT4m4FC4-hZfWxjQXCrDc9yZGg7anEDFyInQynjPxDA1-Vt0P3XaQgtHh1s3lKaqTb4i_WZXeadoWCO8bs6zfDnqBHv3hpuGLapqFvUNnlB88Ypn2ErKiDjeewh0S2Pg9OAU989cIc8wME1PNMUFuil4z4';

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tagline: 'Tranquil sanctuary amidst tropical morning light',
    guests: 2,
    bedType: '1 King Bed',
    size: '48 m² / 516 sq ft',
    view: 'Emerald Valley & Garden View',
    pricePerNight: 320,
    originalPrice: 380,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuRp4Lc2Tv7eux9aYz-04BPp1hO2w4mhK3XY9r89BjcoEC62c7LJ9FqXfABr4-1MFQkRppa-bR8zKzFsFLUnMmrLEGtRSz3e14xWDrpm6S9AoEKJSMq06sief7Ig_2raszEtovweGqHE0p-S_f4nHhuhfkLJ5QTtrYUJ2hNvGuafbIKyCz5LRefb6hjdBsEs3FwVo_kDmdb8xiinp-NIVpZp3jx8_aVDFhfsyi0l4n8UL39KL30yew',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCuRp4Lc2Tv7eux9aYz-04BPp1hO2w4mhK3XY9r89BjcoEC62c7LJ9FqXfABr4-1MFQkRppa-bR8zKzFsFLUnMmrLEGtRSz3e14xWDrpm6S9AoEKJSMq06sief7Ig_2raszEtovweGqHE0p-S_f4nHhuhfkLJ5QTtrYUJ2hNvGuafbIKyCz5LRefb6hjdBsEs3FwVo_kDmdb8xiinp-NIVpZp3jx8_aVDFhfsyi0l4n8UL39KL30yew',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNb-ySBiiyGMVZES_EjRGh-JyWE8xX8jqZhXYv1zIHejyrneF5Bl4jQUEFgA5oB2cL4bvmCvVBoltns9w_32EwcHTs5uTT4m4FC4-hZfWxjQXCrDc9yZGg7anEDFyInQynjPxDA1-Vt0P3XaQgtHh1s3lKaqTb4i_WZXeadoWCO8bs6zfDnqBHv3hpuGLapqFvUNnlB88Ypn2ErKiDjeewh0S2Pg9OAU989cIc8wME1PNMUFuil4z4'
    ],
    description: 'A bright, airy luxury hotel Deluxe Room. Features warm ivory walls, a plush king-sized bed with crisp white linens, and minimalist solid wood furnishings. Soft morning sunlight streams through sheer curtains, revealing a glimpse of tropical greenery outside.',
    amenities: [
      'Plush King-sized Pillowtop Bed',
      'Private Verandah with Forest Views',
      'Spacious Marble Bathroom & Rain Shower',
      'Complimentary Artisanal Ceylon Teas & French Press Coffee',
      'High-Speed Wi-Fi & Smart TV',
      'Organic Ayurvedic Herbal Bath Amenities'
    ],
    highlights: ['Natural Teak Accents', 'Complimentary Sunset High Tea', 'Organic Linens', 'Sunrise Garden Views'],
    isFeatured: false
  },
  {
    id: 'premium-room',
    name: 'Premium Room',
    tagline: 'Elevated luxury with panoramic balcony vistas',
    guests: 3,
    bedType: '2 Queen Beds',
    size: '64 m² / 688 sq ft',
    view: 'Panoramic Rainforest & Mountain Mist',
    pricePerNight: 480,
    originalPrice: 550,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnrE9X3pMOBTwFgrGKmXl0YnoQkZWGOjC3F7Pz-nWkPqPSgTfD3x3I-EmBRBa9EHKSbPCO6gj1siboi5AnkfU9fF_ThpwJRnQTw1T1oSVDj3nGiUrJz4fudzm4bVuuygPmnneLLq0j6bZuc0ZoHjo2xsDI6AhxH6pW10pQRr8X6sc7xRV406Vo6anj-z-lEysxSVhzgjJGV5puxo9WFId_wNR4XKssBavPLFrhqkbapHjqnOSDS7eq',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnrE9X3pMOBTwFgrGKmXl0YnoQkZWGOjC3F7Pz-nWkPqPSgTfD3x3I-EmBRBa9EHKSbPCO6gj1siboi5AnkfU9fF_ThpwJRnQTw1T1oSVDj3nGiUrJz4fudzm4bVuuygPmnneLLq0j6bZuc0ZoHjo2xsDI6AhxH6pW10pQRr8X6sc7xRV406Vo6anj-z-lEysxSVhzgjJGV5puxo9WFId_wNR4XKssBavPLFrhqkbapHjqnOSDS7eq',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNb-ySBiiyGMVZES_EjRGh-JyWE8xX8jqZhXYv1zIHejyrneF5Bl4jQUEFgA5oB2cL4bvmCvVBoltns9w_32EwcHTs5uTT4m4FC4-hZfWxjQXCrDc9yZGg7anEDFyInQynjPxDA1-Vt0P3XaQgtHh1s3lKaqTb4i_WZXeadoWCO8bs6zfDnqBHv3hpuGLapqFvUNnlB88Ypn2ErKiDjeewh0S2Pg9OAU989cIc8wME1PNMUFuil4z4'
    ],
    description: 'A spacious Premium Room in a luxury resort. Elevated design featuring a private balcony overlooking a serene landscape. The interior boasts deep emerald green accents against warm ivory walls, high-end tactile fabrics, and subtle gold fixtures.',
    amenities: [
      'Dual Plush Queen Beds with Silk Quilts',
      'Expansive Private Balcony with Daybed',
      'Soaking Deep Tub with Garden Scenery',
      'Bespoke In-Room Bar with Local Delicacies',
      'Marshall Bluetooth Sound System',
      '24-Hour Dedicated Butler On-Call'
    ],
    highlights: ['Deep Emerald Silk Accents', 'Private Sunset Verandah', 'Double Vanity Marble Bath', 'In-room Breakfast Service'],
    isFeatured: false
  },
  {
    id: 'royal-suite',
    name: 'Royal Suite',
    tagline: 'The pinnacle of bespoke tropical prestige',
    guests: 4,
    bedType: '1 King, 1 Sofa',
    size: '115 m² / 1,238 sq ft',
    view: '360° Hill Country Horizon & River Basin',
    pricePerNight: 750,
    originalPrice: 890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSKjUuOi_eEiyo9A2hyn4vnK_2XPKNmt0NdWWHcapAzAh1kKxi_uZpcR8n-Dom6ymnCZiIU5Va2ZDhmcL2VcIUBif_v-ffywQMNR-CrjDD5_hkpNdA761SxmzJXCucZ3PhR0Wi2DxMCM1iy3o_xYLkm7w7KmCh25GLxthxJazO-t2NlcuX7orMhVFS31bEp77Aml5arNHdeyTfjcO4noR6I4h_ZHVefLq7b4dJ8G1oldl6MPIO2FO2',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSKjUuOi_eEiyo9A2hyn4vnK_2XPKNmt0NdWWHcapAzAh1kKxi_uZpcR8n-Dom6ymnCZiIU5Va2ZDhmcL2VcIUBif_v-ffywQMNR-CrjDD5_hkpNdA761SxmzJXCucZ3PhR0Wi2DxMCM1iy3o_xYLkm7w7KmCh25GLxthxJazO-t2NlcuX7orMhVFS31bEp77Aml5arNHdeyTfjcO4noR6I4h_ZHVefLq7b4dJ8G1oldl6MPIO2FO2',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwmMTFl6PWLh86ecmsysC3hFG0dsCuufWSNJzLxKWVcZXg3X13ayn7ZspvucauZKajX0Z9hbe4kPBb-9bxH3QejfuEIJNGWsFeyA0SXfPMM7qHQS8_N8smHFaelw52j6rUDZmeS1hDQydqCrpy9C5VKYqZncwOv77vkAIi8SeNMYQ7ePSHu5Bjb0Yol0MtHU8h8E-jK6IFWAkB4K9aUeQ1ELUkDnECjllpShGIKfJXubOayTEDLbzF'
    ],
    description: 'The pinnacle of luxury: a Royal Suite living area. Expansive, open-plan design with floor-to-ceiling windows showing a panoramic Sri Lankan view. Features include a minimalist lounge area with premium upholstery, a sculptural standalone bathtub, and rich dark wood flooring.',
    amenities: [
      'Master Bedroom with California King Bed',
      'Separate Formal Living Room & Dining Alcove',
      'Sculptural Free-Standing Designer Bathtub',
      'Private Terrace with Heated Plunge Jacuzzi',
      'Dedicated Private Chef & Sommelier Access',
      'VIP Airport Helicopter Transfer Included (3+ Nights)'
    ],
    highlights: ['Sculptural Standalone Bath', 'Exclusive Private Plunge', 'Dark Ebony Hardwood Floors', '360° Panoramic Terrace'],
    isFeatured: true
  }
];

export const ADD_ONS_DATA: AddOn[] = [
  {
    id: 'ayurveda-spa',
    name: 'Royal Ayurvedic Abhyanga Massage (90 mins)',
    description: 'Ancient therapeutic herbal oil therapy performed by certified indigenous practitioners.',
    price: 120,
    category: 'wellness',
    icon: 'spa'
  },
  {
    id: 'champagne-welcome',
    name: 'Vintage Champagne & Ceylon Truffles',
    description: 'Chilled bottle of French Champagne and artisanal spiced cacao truffles upon arrival.',
    price: 95,
    category: 'dining',
    icon: 'wine'
  },
  {
    id: 'sunset-dinner',
    name: 'Private Candlelight Dinner on the Cliff',
    description: 'Bespoke 5-course gourmet seafood degustation with private butler under starlit skies.',
    price: 180,
    category: 'dining',
    icon: 'utensils'
  },
  {
    id: 'heli-transfer',
    name: 'Colombo International Airport Luxury SUV Transfer',
    description: 'Seamless chauffeur-driven Mercedes-Benz luxury transport directly to the estate.',
    price: 140,
    category: 'transport',
    icon: 'car'
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'cinnamon-pavilion',
    name: 'The Cinnamon Pavilion',
    subtitle: 'Contemporary Sri Lankan & Coastal Fusion',
    description: 'Framed by dramatic floor-to-ceiling glass looking out onto mist-draped peaks, the Cinnamon Pavilion celebrates centuries of spice trade heritage infused with modern culinary technique.',
    cuisine: 'Fine Dining / Modern Ceylonese',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwmMTFl6PWLh86ecmsysC3hFG0dsCuufWSNJzLxKWVcZXg3X13ayn7ZspvucauZKajX0Z9hbe4kPBb-9bxH3QejfuEIJNGWsFeyA0SXfPMM7qHQS8_N8smHFaelw52j6rUDZmeS1hDQydqCrpy9C5VKYqZncwOv77vkAIi8SeNMYQ7ePSHu5Bjb0Yol0MtHU8h8E-jK6IFWAkB4K9aUeQ1ELUkDnECjllpShGIKfJXubOayTEDLbzF',
    hours: 'Breakfast 07:00–10:30 | Dinner 19:00–22:30',
    dressCode: 'Resort Elegant',
    signatureDishes: [
      { name: 'Lagoon Crab in Lemongrass Infusion', desc: 'Jaffna spice reduction, toasted coconut flatbread', price: '$42' },
      { name: 'Black Pepper Braised Lamb Shank', desc: 'Ceylon cinnamon jus, whipped manioc mash', price: '$48' },
      { name: 'Cardamom & Jaggery Soufflé', desc: 'Kithul treacle reduction, fresh coconut gelato', price: '$22' }
    ]
  },
  {
    id: 'amber-lounge',
    name: 'The Amber Horizon Lounge & Tea Bar',
    subtitle: 'Artisanal Single-Estate High Tea & Sunset Elixirs',
    description: 'An intimate open-air terrace perched high above the tropical canopy. Savor rare single-origin Silver Tips white tea in the afternoon, followed by botanical mixology infused with garden botanicals as dusk falls.',
    cuisine: 'Artisan Tea & Craft Cocktails',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSKjUuOi_eEiyo9A2hyn4vnK_2XPKNmt0NdWWHcapAzAh1kKxi_uZpcR8n-Dom6ymnCZiIU5Va2ZDhmcL2VcIUBif_v-ffywQMNR-CrjDD5_hkpNdA761SxmzJXCucZ3PhR0Wi2DxMCM1iy3o_xYLkm7w7KmCh25GLxthxJazO-t2NlcuX7orMhVFS31bEp77Aml5arNHdeyTfjcO4noR6I4h_ZHVefLq7b4dJ8G1oldl6MPIO2FO2',
    hours: '12:00 PM – 11:30 PM',
    dressCode: 'Smart Casual',
    signatureDishes: [
      { name: 'Royal Ceylon High Tea Tier', desc: 'Scones with passion fruit curd, cured salmon hoppers, rare teas', price: '$36' },
      { name: 'Smoked Arrack Old Fashioned', desc: 'Artisanal coconut spirit, wild honey, aromatic bitters', price: '$20' }
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'spa',
    name: 'Veda Wellness & Ayurvedic Sanctuary',
    category: 'Holistic Spa',
    description: 'Immerse in time-honored Ayurvedic healing traditions with bespoke wellness rituals, steam baths infused with native medicinal herbs, and expert physician consultations.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNb-ySBiiyGMVZES_EjRGh-JyWE8xX8jqZhXYv1zIHejyrneF5Bl4jQUEFgA5oB2cL4bvmCvVBoltns9w_32EwcHTs5uTT4m4FC4-hZfWxjQXCrDc9yZGg7anEDFyInQynjPxDA1-Vt0P3XaQgtHh1s3lKaqTb4i_WZXeadoWCO8bs6zfDnqBHv3hpuGLapqFvUNnlB88Ypn2ErKiDjeewh0S2Pg9OAU989cIc8wME1PNMUFuil4z4',
    timings: '08:00 AM – 20:00 PM',
    features: ['Herbal Steam Enclosures', 'Meditation Pavilion', 'Organic Garden Oils', 'Ayurvedic Doctor Consultation']
  },
  {
    id: 'infinity-pool',
    name: 'Emerald Horizon Infinity Pool',
    category: 'Aquatics & Sun Deck',
    description: 'A 45-meter temperature-balanced infinity pool suspended above the jungle valley, offering uninterrupted horizons of the mist-wrapped mountains.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwmMTFl6PWLh86ecmsysC3hFG0dsCuufWSNJzLxKWVcZXg3X13ayn7ZspvucauZKajX0Z9hbe4kPBb-9bxH3QejfuEIJNGWsFeyA0SXfPMM7qHQS8_N8smHFaelw52j6rUDZmeS1hDQydqCrpy9C5VKYqZncwOv77vkAIi8SeNMYQ7ePSHu5Bjb0Yol0MtHU8h8E-jK6IFWAkB4K9aUeQ1ELUkDnECjllpShGIKfJXubOayTEDLbzF',
    timings: '06:00 AM – 21:00 PM',
    features: ['Sun Loungers with Towel Service', 'Poolside Refreshment Service', 'Heated Whirlpool', 'Private Cabanas']
  },
  {
    id: 'nature-trails',
    name: 'Private Tea Estate & Nature Trails',
    category: 'Experiences',
    description: 'Walk through 40 acres of private organic tea plantations and spice groves with our resident naturalist to discover indigenous birds and flora.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnrE9X3pMOBTwFgrGKmXl0YnoQkZWGOjC3F7Pz-nWkPqPSgTfD3x3I-EmBRBa9EHKSbPCO6gj1siboi5AnkfU9fF_ThpwJRnQTw1T1oSVDj3nGiUrJz4fudzm4bVuuygPmnneLLq0j6bZuc0ZoHjo2xsDI6AhxH6pW10pQRr8X6sc7xRV406Vo6anj-z-lEysxSVhzgjJGV5puxo9WFId_wNR4XKssBavPLFrhqkbapHjqnOSDS7eq',
    timings: 'Sunrise & Sunset Guided Walks',
    features: ['Bird Watching Equipment', 'Tea Plucking Workshop', 'Herbal Trail Guides', 'Picnic Setups']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Great Lounge & Forest Vista',
    category: 'architecture',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwmMTFl6PWLh86ecmsysC3hFG0dsCuufWSNJzLxKWVcZXg3X13ayn7ZspvucauZKajX0Z9hbe4kPBb-9bxH3QejfuEIJNGWsFeyA0SXfPMM7qHQS8_N8smHFaelw52j6rUDZmeS1hDQydqCrpy9C5VKYqZncwOv77vkAIi8SeNMYQ7ePSHu5Bjb0Yol0MtHU8h8E-jK6IFWAkB4K9aUeQ1ELUkDnECjllpShGIKfJXubOayTEDLbzF',
    caption: 'Expansive architectural glass walls blending indoor luxury with lush tropical rainforest.'
  },
  {
    id: 'g2',
    title: 'Master Bedroom at Sanctuary Suite',
    category: 'rooms',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNb-ySBiiyGMVZES_EjRGh-JyWE8xX8jqZhXYv1zIHejyrneF5Bl4jQUEFgA5oB2cL4bvmCvVBoltns9w_32EwcHTs5uTT4m4FC4-hZfWxjQXCrDc9yZGg7anEDFyInQynjPxDA1-Vt0P3XaQgtHh1s3lKaqTb4i_WZXeadoWCO8bs6zfDnqBHv3hpuGLapqFvUNnlB88Ypn2ErKiDjeewh0S2Pg9OAU989cIc8wME1PNMUFuil4z4',
    caption: 'Ivory textured linens and deep velvet accents overlooking native Sri Lankan foliage.'
  },
  {
    id: 'g3',
    title: 'Deluxe Morning Suite',
    category: 'rooms',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuRp4Lc2Tv7eux9aYz-04BPp1hO2w4mhK3XY9r89BjcoEC62c7LJ9FqXfABr4-1MFQkRppa-bR8zKzFsFLUnMmrLEGtRSz3e14xWDrpm6S9AoEKJSMq06sief7Ig_2raszEtovweGqHE0p-S_f4nHhuhfkLJ5QTtrYUJ2hNvGuafbIKyCz5LRefb6hjdBsEs3FwVo_kDmdb8xiinp-NIVpZp3jx8_aVDFhfsyi0l4n8UL39KL30yew',
    caption: 'Soft sunlight bathing warm timber furnishings and minimalist architecture.'
  },
  {
    id: 'g4',
    title: 'Premium Mountain Balcony View',
    category: 'rooms',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnrE9X3pMOBTwFgrGKmXl0YnoQkZWGOjC3F7Pz-nWkPqPSgTfD3x3I-EmBRBa9EHKSbPCO6gj1siboi5AnkfU9fF_ThpwJRnQTw1T1oSVDj3nGiUrJz4fudzm4bVuuygPmnneLLq0j6bZuc0ZoHjo2xsDI6AhxH6pW10pQRr8X6sc7xRV406Vo6anj-z-lEysxSVhzgjJGV5puxo9WFId_wNR4XKssBavPLFrhqkbapHjqnOSDS7eq',
    caption: 'Emerald accents and open-air balcony capturing the cool mountain breeze.'
  },
  {
    id: 'g5',
    title: 'Royal Suite Living Panorama',
    category: 'architecture',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSKjUuOi_eEiyo9A2hyn4vnK_2XPKNmt0NdWWHcapAzAh1kKxi_uZpcR8n-Dom6ymnCZiIU5Va2ZDhmcL2VcIUBif_v-ffywQMNR-CrjDD5_hkpNdA761SxmzJXCucZ3PhR0Wi2DxMCM1iy3o_xYLkm7w7KmCh25GLxthxJazO-t2NlcuX7orMhVFS31bEp77Aml5arNHdeyTfjcO4noR6I4h_ZHVefLq7b4dJ8G1oldl6MPIO2FO2',
    caption: 'Floor-to-ceiling panoramic glass frame capturing golden hour over the tropical mountain valley.'
  }
];
