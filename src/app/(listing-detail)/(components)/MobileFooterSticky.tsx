import React, { useState } from "react";
import { usePathname } from "next/navigation";
import ModalSelectDate from "@/components/ModalSelectDate";
import ButtonPrimary from "@/shared/ButtonPrimary";
import converSelectedDateToString from "@/utils/converSelectedDateToString";
import ModalReserveMobile from "./ModalReserveMobile";
import ModalServiceBookingMobile from "./ModalServiceBookingMobile";

const MobileFooterSticky = () => {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2023/02/06")
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date("2023/02/23"));
  
  const pathname = usePathname();
  const isServiceDetail = pathname?.includes("/listing-service-detail");
  const isCarDetail = pathname?.includes("/listing-car-detail");
  const isExperienceDetail = pathname?.includes("/listing-experiences-detail");

  // Service provider mobile footer
  if (isServiceDetail) {
    return (
      <div className="block lg:hidden fixed bottom-0 inset-x-0 py-2 sm:py-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-6000 z-40">
        <div className="container flex items-center justify-between">
          <div className="">
            <span className="block text-xl font-semibold">
              From $200
              <span className="ml-1 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                /service
              </span>
            </span>
            <span className="block text-sm text-neutral-500 dark:text-neutral-400">
              Building & Pest Inspections
            </span>
          </div>
          <ModalServiceBookingMobile
            renderChildren={({ openModal }) => (
              <ButtonPrimary
                sizeClass="px-5 sm:px-7 py-3 !rounded-2xl"
                onClick={openModal}
              >
                Book Service
              </ButtonPrimary>
            )}
          />
        </div>
      </div>
    );
  }

  // Car rental mobile footer
  if (isCarDetail) {
    return (
      <div className="block lg:hidden fixed bottom-0 inset-x-0 py-2 sm:py-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-6000 z-40">
        <div className="container flex items-center justify-between">
          <div className="">
            <span className="block text-xl font-semibold">
              $45
              <span className="ml-1 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                /day
              </span>
            </span>
            <ModalSelectDate
              renderChildren={({ openModal }) => (
                <span
                  onClick={openModal}
                  className="block text-sm underline font-medium"
                >
                  {converSelectedDateToString([startDate, endDate])}
                </span>
              )}
            />
          </div>
          <ModalReserveMobile
            renderChildren={({ openModal }) => (
              <ButtonPrimary
                sizeClass="px-5 sm:px-7 py-3 !rounded-2xl"
                onClick={openModal}
              >
                Book Car
              </ButtonPrimary>
            )}
          />
        </div>
      </div>
    );
  }

  // Experience mobile footer
  if (isExperienceDetail) {
    return (
      <div className="block lg:hidden fixed bottom-0 inset-x-0 py-2 sm:py-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-6000 z-40">
        <div className="container flex items-center justify-between">
          <div className="">
            <span className="block text-xl font-semibold">
              $128
              <span className="ml-1 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                /person
              </span>
            </span>
            <ModalSelectDate
              renderChildren={({ openModal }) => (
                <span
                  onClick={openModal}
                  className="block text-sm underline font-medium"
                >
                  {converSelectedDateToString([startDate, endDate])}
                </span>
              )}
            />
          </div>
          <ModalReserveMobile
            renderChildren={({ openModal }) => (
              <ButtonPrimary
                sizeClass="px-5 sm:px-7 py-3 !rounded-2xl"
                onClick={openModal}
              >
                Book Experience
              </ButtonPrimary>
            )}
          />
        </div>
      </div>
    );
  }

  // Default stay mobile footer
  return (
    <div className="block lg:hidden fixed bottom-0 inset-x-0 py-2 sm:py-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-6000 z-40">
      <div className="container flex items-center justify-between">
        <div className="">
          <span className="block text-xl font-semibold">
            $311
            <span className="ml-1 text-sm font-normal text-neutral-500 dark:text-neutral-400">
              /night
            </span>
          </span>
          <ModalSelectDate
            renderChildren={({ openModal }) => (
              <span
                onClick={openModal}
                className="block text-sm underline font-medium"
              >
                {converSelectedDateToString([startDate, endDate])}
              </span>
            )}
          />
        </div>
        <ModalReserveMobile
          renderChildren={({ openModal }) => (
            <ButtonPrimary
              sizeClass="px-5 sm:px-7 py-3 !rounded-2xl"
              onClick={openModal}
            >
              Reserve
            </ButtonPrimary>
          )}
        />
      </div>
    </div>
  );
};

export default MobileFooterSticky;
