"use client";

import React, { Fragment, useState, FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import { BuildingOfficeIcon, UserIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import NcInputNumber from "@/components/NcInputNumber";
import ButtonSecondary from "@/shared/ButtonSecondary";

export interface ServiceTypesInputProps {
  className?: string;
}

const ServiceTypesInput: FC<ServiceTypesInputProps> = ({
  className = "",
}) => {
  const [serviceType, setServiceType] = useState("building-inspection");
  const [propertySize, setPropertySize] = useState(1);
  const [urgentService, setUrgentService] = useState(false);

  const serviceTypes = [
    {
      id: "building-inspection",
      name: "Building Inspection",
      description: "Complete structural assessment",
      icon: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
    },
    {
      id: "pest-inspection", 
      name: "Pest Inspection",
      description: "Comprehensive pest detection",
      icon: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`
    },
    {
      id: "combined-inspection",
      name: "Building & Pest Inspection",
      description: "Combined assessment package",
      icon: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`
    },
    {
      id: "termite-inspection",
      name: "Termite Inspection",
      description: "Specialized termite assessment", 
      icon: `<svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`
    }
  ];

  const selectedService = serviceTypes.find(s => s.id === serviceType);

  const renderButtonOpenDropdown = () => {
    return (
      <Popover.Button
        className={`w-full flex justify-between items-center text-left px-4 py-3 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-t-3xl`}
      >
        <div className="flex items-center flex-1 min-w-0">
          <div className="text-neutral-300 dark:text-neutral-400 mr-3 flex-shrink-0">
            <BuildingOfficeIcon className="w-5 h-5" />
          </div>
          <div className="flex-grow min-w-0">
            <span className="block xl:text-lg font-semibold truncate">
              {selectedService?.name}
            </span>
            <span className="block mt-1 text-sm text-neutral-400 leading-none font-light truncate">
              {selectedService?.description}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 ml-3">
          <ChevronDownIcon className="w-4 h-4 text-neutral-400" />
        </div>
      </Popover.Button>
    );
  };

  return (
    <Popover className={`ServiceTypesInput relative w-full ${className}`}>
      {renderButtonOpenDropdown()}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-0 right-0 z-10 mt-3 top-full w-full sm:px-0">
          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 p-4 w-full">
            <div className="space-y-4">
              {/* Service Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Select Service Type
                </label>
                <div className="space-y-2">
                  {serviceTypes.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center w-full p-3 rounded-lg border cursor-pointer transition-colors ${
                        serviceType === service.id
                          ? "bg-primary-50 dark:bg-primary-900 border-primary-200 dark:border-primary-700"
                          : "bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceType"
                        value={service.id}
                        checked={serviceType === service.id}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className="text-2xl mr-3 flex-shrink-0"
                        dangerouslySetInnerHTML={{ __html: service.icon }}
                      />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {service.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Property Size */}
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Property Size (levels/floors)
                </label>
                <NcInputNumber
                  className="w-full"
                  defaultValue={propertySize}
                  onChange={(value) => setPropertySize(value)}
                  max={5}
                  min={1}
                  label="Levels"
                  desc="Number of floors to inspect"
                />
              </div>

              {/* Urgent Service */}
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={urgentService}
                    onChange={(e) => setUrgentService(e.target.checked)}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Urgent service required (within 24 hours)
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ServiceTypesInput;