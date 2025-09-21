"use client";

import React, { FC, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowRightIcon, Squares2X2Icon, ShieldCheckIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import CommentListing from "@/components/CommentListing";
import FiveStartIconForRate from "@/components/FiveStartIconForRate";
import StartRating from "@/components/StartRating";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import ButtonCircle from "@/shared/ButtonCircle";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import ButtonClose from "@/shared/ButtonClose";
import Input from "@/shared/Input";
import LikeSaveBtns from "@/components/LikeSaveBtns";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Services_demos, PHOTOS, ServicePricing, ServiceAreas } from "./constant";
import AppointmentScheduler from "./AppointmentScheduler";
import ServiceTypesInput from "./ServiceTypesInput";
import SectionDateRange from "../SectionDateRange";
import { Route } from "next";

export interface ListingServiceDetailPageProps {}

const ListingServiceDetailPage: FC<ListingServiceDetailPageProps> = ({}) => {
  let [isOpenModalServices, setIsOpenModalServices] = useState(false);

  const thisPathname = usePathname();
  const router = useRouter();

  function closeModalServices() {
    setIsOpenModalServices(false);
  }

  function openModalServices() {
    setIsOpenModalServices(true);
  }

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        {/* 1 */}
        <div className="flex justify-between items-center">
          <Badge color="green" name="Licensed & Insured" />
          <LikeSaveBtns />
        </div>

        {/* 2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Brisbane Building & Pest Inspections
        </h2>

        {/* 3 */}
        <div className="flex items-center space-x-4">
          <StartRating />
          <span>·</span>
          <span>
            <MapPinIcon className="w-4 h-4 inline" />
            <span className="ml-1"> Brisbane, QLD</span>
          </span>
        </div>

        {/* 4 - Company Info */}
        <div className="flex items-center">
          <Avatar 
            hasChecked 
            sizeClass="h-10 w-10" 
            radius="rounded-full"
            userName="Professional Inspections"
          />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
            Service provided by{" "}
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              Professional Inspections Ltd
            </span>
          </span>
        </div>

        {/* 5 */}
        <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

        {/* 6 - Company Stats */}
        <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center space-x-3">
            <ShieldCheckIcon className="w-6 h-6" />
            <span className="">
              15+ <span className="hidden sm:inline-block">years experience</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="las la-certificate text-2xl"></i>
            <span className="">
              Licensed <span className="hidden sm:inline-block">Professional</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="las la-clock text-2xl"></i>
            <span className="">
              Same Day <span className="hidden sm:inline-block">Service</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <PhoneIcon className="w-6 h-6" />
            <span className="">
              24/7 <span className="hidden sm:inline-block">Emergency</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Company Information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300">
          <p>
            Brisbane Building & Pest Inspections is a family-owned business serving the Brisbane metropolitan area for over 15 years. 
            We specialize in comprehensive building and pest inspections for residential and commercial properties.
          </p>
          <br />
          <p>
            Our certified inspectors use the latest technology and equipment to provide thorough, accurate reports that give you 
            peace of mind when buying, selling, or maintaining your property. We're fully licensed, insured, and committed to 
            delivering exceptional service.
          </p>
          <br />
          <p>
            <strong>Certifications & Licenses:</strong>
            <br />• QBCC License #1234567
            <br />• Australian Institute of Building Consultants Member
            <br />• $2M Public Liability Insurance
            <br />• Thermal Imaging Certified
          </p>
        </div>
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Professional inspection services with detailed reporting
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          {Services_demos.filter((_, i) => i < 12).map((item) => (
            <div key={item.name} className="flex items-center space-x-3">
              <div 
                className="text-2xl flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
              <div>
                <span className="font-medium">{item.name}</span>
                <div className="text-xs text-neutral-500">{item.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>
          <ButtonSecondary onClick={openModalServices}>
            View all services
          </ButtonSecondary>
        </div>
        {renderModalServices()}
      </div>
    );
  };

  const renderModalServices = () => {
    return (
      <Transition appear show={isOpenModalServices} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalServices}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block py-8 h-screen w-full max-w-4xl">
                <div className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70"
                    >
                      Our Complete Service List
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalServices} />
                    </span>
                  </div>

                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                    {Services_demos.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center py-4 sm:py-6 lg:p-6 space-x-4 lg:space-x-6"
                      >
                        <div 
                          className="flex-shrink-0 text-3xl"
                          dangerouslySetInnerHTML={{ __html: item.icon }}
                        />
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3">
                            <i className={`text-4xl text-neutral-6000`}></i>
                            <div>
                              <span className="text-lg font-medium">{item.name}</span>
                              <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  const renderSection4 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Service Areas</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            We provide services across Brisbane and surrounding suburbs
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ServiceAreas.map((area, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <MapPinIcon className="w-4 h-4 text-primary-500" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSection5 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Service Pricing</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Transparent pricing with no hidden fees
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        <div className="space-y-6">
          {/* Per Service Pricing */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Per Service Pricing</h4>
            <div className="grid gap-3">
              {Object.entries(ServicePricing.perService).map(([service, price]) => (
                <div key={service} className="flex justify-between items-center py-2 border-b border-neutral-100 dark:border-neutral-800">
                  <span className="font-medium">{service}</span>
                  <span className="text-primary-500 font-semibold">{price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hourly Rates */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hourly Rates</h4>
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span>Standard Rate</span>
                <span className="font-semibold">{ServicePricing.hourlyRate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Emergency Rate</span>
                <span className="font-semibold">{ServicePricing.emergencyRate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSection6 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <div className="flex items-center space-x-4 mt-3">
            <StartRating />
            <span className="text-neutral-500 dark:text-neutral-400">
              · 142 reviews
            </span>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* comment */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <div className="pt-8">
            <ButtonSecondary>View more 138 reviews</ButtonSecondary>
          </div>
        </div>
      </div>
    );
  };

  const renderSection7 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Service Policies</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Important information about our services
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Cancellation Policy</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Free cancellation up to 24 hours before scheduled appointment.
            Cancellations within 24 hours may incur a 50% service fee.
            Emergency calls cannot be cancelled once technician is dispatched.
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Service Hours</h4>
          <div className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-md text-sm sm:text-base">
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>Regular Hours</span>
              <span>8:00 AM - 5:00 PM</span>
            </div>
            <div className="flex space-x-10 justify-between p-3">
              <span>Emergency Service</span>
              <span>24/7 Available</span>
            </div>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
                    <h4 className="text-lg font-semibold">What to Expect</h4>
          <div className="prose sm:prose">
            <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
              <li>Detailed written report within 24 hours</li>
              <li>Digital photos of any issues found</li>
              <li>Professional recommendations</li>
              <li>Follow-up consultation included</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap shadow-xl">
        {/* PRICING OVERVIEW */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">
            From $200
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
              /service
            </span>
          </span>
          <StartRating />
        </div>

        {/* BOOKING FORM */}
        <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl">
          <ServiceTypesInput className="flex-1 z-[11]" />
          <AppointmentScheduler className="flex-1" />
        </form>

        {/* ESTIMATE */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
            <span>Building Inspection</span>
            <span>$350-$600</span>
          </div>
          <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
            <span>Travel fee</span>
            <span>$0</span>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Estimated Total</span>
            <span>From $350</span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Final price may vary based on property size and specific requirements
          </p>
        </div>

        {/* SUBMIT */}
        <ButtonPrimary href={"/checkout" as Route}>Book Inspection</ButtonPrimary>

        {/* CONTACT INFO */}
        <div className="flex flex-col space-y-2 pt-4 border-t border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center space-x-2 text-sm">
            <PhoneIcon className="w-4 h-4" />
            <span>(07) 3123 4567</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <i className="las la-envelope w-4 h-4"></i>
            <span>info@brisbaneinspections.com.au</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="nc-ListingServiceDetailPage">
      {/*  HEADER */}
      <header className="rounded-md sm:rounded-xl">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={handleOpenModalImageGallery}
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={PHOTOS[0]}
              alt="Professional building inspector"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
            <div
              key={index}
              className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                index >= 3 ? "hidden sm:block" : ""
              }`}
            >
              <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                <Image
                  fill
                  className="object-cover rounded-md sm:rounded-xl"
                  src={item || ""}
                  alt="Service team and equipment"
                  sizes="400px"
                />
              </div>

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={handleOpenModalImageGallery}
              />
            </div>
          ))}

          <div
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
            onClick={handleOpenModalImageGallery}
          >
            <Squares2X2Icon className="w-5 h-5" />
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              Show all photos
            </span>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative z-10 mt-11 flex flex-col lg:flex-row ">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {renderSection1()}
          {renderSection2()}
          {renderSection3()}
          {renderSection4()}
          {renderSection5()}
          {renderSection6()}
          {renderSection7()}
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block flex-grow mt-14 lg:mt-0">
          <div className="sticky top-28">{renderSidebar()}</div>
        </div>
      </main>
    </div>
  );
};

export default ListingServiceDetailPage;