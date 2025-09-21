"use client";

import React, { FC } from "react";
// Using gradient background instead of travel image
// import imagePng from "@/images/travelhero2.png";
import Image from "next/image";

export interface SectionHero3Props {
  className?: string;
}

const SectionHero3: FC<SectionHero3Props> = ({ className = "" }) => {
  // Shadcn-style service icons
  const InspectionIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10,9 9,9 8,9"/>
    </svg>
  );

  const MovingIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
      <path d="M15 18H9"/>
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624L20.3 11.3A2 2 0 0 0 18.5 10.5H15"/>
      <circle cx="7" cy="18" r="2"/>
      <circle cx="17" cy="18" r="2"/>
    </svg>
  );

  const InsuranceIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );

  return (
    <div
      className={`nc-SectionHero3 relative ${className}`}
      data-nc-id="SectionHero3"
    >
      <div className="absolute z-10 inset-x-0 top-[10%] sm:top-[15%] text-center flex flex-col items-center max-w-2xl mx-auto space-y-4 lg:space-y-5 xl:space-y-8">
        <span className="sm:text-lg md:text-xl font-semibold text-neutral-900">
          Booking tax-free from Chis. platform
        </span>
        <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[115%] ">
          Service booking <br /> for new gen
        </h2>
        
        {/* Service Icons Row */}
        <div className="flex justify-center items-center space-x-8 lg:space-x-12 pt-4">
          <div className="flex flex-col items-center space-y-2 cursor-pointer hover:scale-110 transition-transform">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg flex items-center justify-center text-gray-800 hover:text-black hover:bg-white transition-colors">
              <InspectionIcon />
            </div>
            <span className="text-sm lg:text-base font-medium text-neutral-800">Pest Control</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 cursor-pointer hover:scale-110 transition-transform">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg flex items-center justify-center text-gray-800 hover:text-black hover:bg-white transition-colors">
              <MovingIcon />
            </div>
            <span className="text-sm lg:text-base font-medium text-neutral-800">Moving</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 cursor-pointer hover:scale-110 transition-transform">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg flex items-center justify-center text-gray-800 hover:text-black hover:bg-white transition-colors">
              <InsuranceIcon />
            </div>
            <span className="text-sm lg:text-base font-medium text-neutral-800">Insurance</span>
          </div>
        </div>
      </div>
      {/* Modern gradient background for home services */}
      <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-h-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-100 rounded-xl">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5 rounded-xl" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          {/* Home service themed decorative elements */}
          <div className="absolute top-10 right-10 opacity-10">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero3;
