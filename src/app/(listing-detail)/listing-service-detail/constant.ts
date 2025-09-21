import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";

// Service provider photos: team, equipment, certifications, before/after work
export const PHOTOS: string[] = [
  "https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", // Building inspector with tools
  "https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Pest control professional
  "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Inspection equipment
  "https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Team working
  "https://images.pexels.com/photos/4491470/pexels-photo-4491470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Structural inspection
  "https://images.pexels.com/photos/5025665/pexels-photo-5025665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Professional at work
  "https://images.pexels.com/photos/6195167/pexels-photo-6195167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Equipment and tools
  "https://images.pexels.com/photos/4491464/pexels-photo-4491464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", // Inspection process
];

// Service Icons as SVG strings - Grey and White Theme
export const ServiceIcons = {
  building: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
  pest: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
  termite: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  house: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  tree: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
  pool: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12a4 4 0 018 0M8 12H4a8 8 0 008-8 8 8 0 008 8h-4m-4 0v9a3 3 0 003 3h4a3 3 0 003-3v-9m-4 0H8"/></svg>`,
  electrical: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  plumbing: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  hvac: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
  roof: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 21l8-9h3l-12-12L5 12h3l8 9z"/></svg>`,
  foundation: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 21h14"/></svg>`,
  moisture: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4l4.085 4.085a2 2 0 002.829 0L20 3"/></svg>`
};

// Services offered by Building and Pest Inspection company
export const Services_demos = [
  { name: "Building Inspection", icon: ServiceIcons.building, description: "Complete structural assessment" },
  { name: "Pest Inspection", icon: ServiceIcons.pest, description: "Comprehensive pest detection" },
  { name: "Termite Inspection", icon: ServiceIcons.termite, description: "Specialized termite assessment" },
  { name: "Pre-Purchase Inspection", icon: ServiceIcons.house, description: "Property buying inspection" },
  { name: "Timber Pest Inspection", icon: ServiceIcons.tree, description: "Wood-destroying pest check" },
  { name: "Pool & Spa Inspection", icon: ServiceIcons.pool, description: "Pool safety compliance" },
  { name: "Electrical Inspection", icon: ServiceIcons.electrical, description: "Electrical safety check" },
  { name: "Plumbing Inspection", icon: ServiceIcons.plumbing, description: "Plumbing system assessment" },
  { name: "HVAC Inspection", icon: ServiceIcons.hvac, description: "Heating & cooling systems" },
  { name: "Roof Inspection", icon: ServiceIcons.roof, description: "Roofing condition assessment" },
  { name: "Foundation Inspection", icon: ServiceIcons.foundation, description: "Foundation integrity check" },
  { name: "Moisture Assessment", icon: ServiceIcons.moisture, description: "Moisture and leak detection" },
];

// Time slots available for appointments
export const TimeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", 
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

// Service pricing structure
export const ServicePricing = {
  perService: {
    "Building Inspection": "$350-$600",
    "Pest Inspection": "$200-$300",
    "Termite Inspection": "$250-$350",
    "Pre-Purchase Inspection": "$400-$700",
    "Combined Building & Pest": "$500-$800",
  },
  hourlyRate: "$120/hour",
  emergencyRate: "$180/hour (after hours)"
};

// Service areas covered
export const ServiceAreas = [
  "Brisbane CBD", "South Brisbane", "West End", "Fortitude Valley",
  "New Farm", "Teneriffe", "Kangaroo Point", "Woolloongabba",
  "Spring Hill", "Paddington", "Milton", "Auchenflower"
];

export const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
  (item, index): ListingGalleryImage => {
    return {
      id: index,
      url: item,
    };
  }
);