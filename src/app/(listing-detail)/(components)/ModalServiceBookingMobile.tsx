"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonClose from "@/shared/ButtonClose";
import ServiceTypesInput from "../listing-service-detail/ServiceTypesInput";
import AppointmentScheduler from "../listing-service-detail/AppointmentScheduler";
import { Route } from "next";

interface ModalServiceBookingMobileProps {
  renderChildren?: (p: { openModal: () => void }) => React.ReactNode;
}

const ModalServiceBookingMobile = ({ renderChildren }: ModalServiceBookingMobileProps) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  function handleBookingSubmit() {
    closeModal();
    // Navigate to checkout page with service booking context
    router.push("/checkout?type=service" as Route);
  }

  const renderContent = () => {
    return (
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="HeroSearchFormMobile__Dialog relative z-50"
          onClose={closeModal}
        >
          <div className="fixed inset-0 bg-neutral-100 dark:bg-neutral-900">
            <div className="flex h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out transition-transform"
                enterFrom="opacity-0 translate-y-52"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in transition-transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-52"
              >
                <Dialog.Panel className="relative h-full overflow-hidden flex-1 flex flex-col justify-between ">
                  {/*  */}
                  <div className="absolute left-4 top-4">
                    <ButtonClose onClick={closeModal} />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 pt-12 py-1 flex flex-col ">
                    <div className="flex-1 bg-white dark:bg-neutral-800 px-4 flex flex-col ">
                      <h2 className="text-2xl font-semibold mb-6">Book Your Service</h2>
                      
                      {/* Service Selection */}
                      <div className="mb-6">
                        <ServiceTypesInput />
                      </div>

                      {/* Appointment Scheduling */}
                      <div className="mb-6">
                        <AppointmentScheduler />
                      </div>

                      {/* Service Summary */}
                      <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl mb-6">
                        <h3 className="font-semibold mb-3">Service Summary</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Building Inspection</span>
                            <span>$350-$600</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Travel fee</span>
                            <span>$0</span>
                          </div>
                          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-2 mt-2">
                            <div className="flex justify-between font-semibold">
                              <span>Estimated Total</span>
                              <span>From $350</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Your Details</h3>
                        <div className="space-y-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800"
                          />
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800"
                          />
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800"
                          />
                          <textarea
                            placeholder="Property Address & Additional Notes"
                            rows={3}
                            className="w-full p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BUTTON SUBMIT OF FORM */}
                  <div className="px-4 py-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 flex space-x-2">
                    <ButtonPrimary
                      sizeClass="px-6 py-3 !rounded-xl"
                      onClick={handleBookingSubmit}
                      className="flex-1"
                    >
                      Proceed to Checkout
                    </ButtonPrimary>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      {renderChildren && renderChildren({ openModal })}
      {renderContent()}
    </>
  );
};

export default ModalServiceBookingMobile;