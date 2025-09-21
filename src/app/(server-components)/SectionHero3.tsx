"use client";

import React, { FC, useState, useEffect } from "react";
import imagePng from "@/images/travelhero2.png";
import Image from "next/image";
import Lottie from "lottie-react";

export interface SectionHero3Props {
  className?: string;
}

const SectionHero3: FC<SectionHero3Props> = ({ className = "" }) => {
  const [animations, setAnimations] = useState<any>({
    pest: null,
    moving: null,
    insurance: null
  });

  useEffect(() => {
    // Try to fetch animations, but provide fallbacks
    const fetchAnimations = async () => {
      try {
        // You can replace these with working Lottie URLs or local JSON files
        const pestResponse = await fetch("https://assets2.lottiefiles.com/packages/lf20_puciaact.json");
        const movingResponse = await fetch("https://assets5.lottiefiles.com/packages/lf20_mjlh3hcy.json");
        const insuranceResponse = await fetch("https://assets1.lottiefiles.com/packages/lf20_q5pk6p1k.json");
        
        if (pestResponse.ok) {
          const pestData = await pestResponse.json();
          setAnimations(prev => ({ ...prev, pest: pestData }));
        }
        if (movingResponse.ok) {
          const movingData = await movingResponse.json();
          setAnimations(prev => ({ ...prev, moving: movingData }));
        }
        if (insuranceResponse.ok) {
          const insuranceData = await insuranceResponse.json();
          setAnimations(prev => ({ ...prev, insurance: insuranceData }));
        }
      } catch (error) {
        console.log("Failed to load Lottie animations, using fallback icons");
      }
    };

    fetchAnimations();
  }, []);

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
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex items-center justify-center p-2">
              {animations.pest ? (
                <Lottie 
                  animationData={animations.pest}
                  className="w-full h-full"
                  loop={true}
                  autoplay={true}
                />
              ) : (
                <div className="text-2xl">🐛</div>
              )}
            </div>
            <span className="text-sm lg:text-base font-medium text-neutral-800">Pest Control</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 cursor-pointer hover:scale-110 transition-transform">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex items-center justify-center p-2">
              {animations.moving ? (
                <Lottie 
                  animationData={animations.moving}
                  className="w-full h-full"
                  loop={true}
                  autoplay={true}
                />
              ) : (
                <div className="text-2xl">🚚</div>
              )}
            </div>
            <span className="text-sm lg:text-base font-medium text-neutral-800">Moving</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 cursor-pointer hover:scale-110 transition-transform">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex items-center justify-center p-2">
              {animations.insurance ? (
                <Lottie 
                  animationData={animations.insurance}
                  className="w-full h-full"
                  loop={true}
                  autoplay={true}
                />
              ) : (
                <div className="text-2xl">🛡️</div>
              )}
            </div>
            <span className="text-sm lg:text-base font-medium text-neutral-800">Insurance</span>
          </div>
        </div>
      </div>
      <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-h-8 ">
        <Image
          className="absolute inset-0 object-cover rounded-xl"
          src={imagePng}
          alt="hero"
          priority
        />
      </div>
    </div>
  );
};

export default SectionHero3;
