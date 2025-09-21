"use client";

import React, { Fragment, useState, FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CalendarDaysIcon, ClockIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { TimeSlots } from "./constant";

export interface AppointmentSchedulerProps {
  className?: string;
}

const AppointmentScheduler: FC<AppointmentSchedulerProps> = ({
  className = "flex-1",
}) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderButtonOpenDropdown = () => {
    const displayText = startDate && selectedTime 
      ? `${startDate.toLocaleDateString()} at ${selectedTime}`
      : "Select appointment date & time";

    return (
      <Popover.Button
        className={`w-full flex justify-between items-center text-left px-4 py-3 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-b-3xl`}
      >
        <div className="flex items-center flex-1 min-w-0">
          <div className="text-neutral-300 dark:text-neutral-400 mr-3 flex-shrink-0">
            <CalendarDaysIcon className="w-5 h-5" />
          </div>
          <div className="flex-grow min-w-0">
            <span className="block xl:text-lg font-semibold truncate">
              {displayText}
            </span>
            <span className="block mt-1 text-sm text-neutral-400 leading-none font-light truncate">
              {startDate && selectedTime ? "Appointment scheduled" : "Choose your preferred time"}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 ml-3">
          <ChevronDownIcon className="w-4 h-4 text-neutral-400" />
        </div>
      </Popover.Button>
    );
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayWeekday = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDayWeekday; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isDateSelected = (date: Date | null) => {
    if (!date || !startDate) return false;
    return date.toDateString() === startDate.toDateString();
  };

  const isDateDisabled = (date: Date | null) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <Popover className={`AppointmentScheduler relative w-full ${className}`}>
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
          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 p-6 w-full">
            <div className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Select Date
                </label>
                
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={goToPreviousMonth}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded"
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <h3 className="text-lg font-medium">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button
                    type="button"
                    onClick={goToNextMonth}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded"
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonth(currentMonth).map((date, index) => (
                    <button
                      key={index}
                      type="button"
                      disabled={isDateDisabled(date)}
                      onClick={() => date && setStartDate(date)}
                      className={`p-2 text-sm rounded-lg transition-colors ${
                        !date
                          ? "invisible"
                          : isDateDisabled(date)
                          ? "text-gray-300 cursor-not-allowed"
                          : isDateSelected(date)
                          ? "bg-primary-500 text-white"
                          : "hover:bg-gray-100 dark:hover:bg-neutral-700"
                      }`}
                    >
                      {date?.getDate()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Select Time
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {TimeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-sm rounded-lg border transition-colors ${
                        selectedTime === time
                          ? "bg-primary-500 text-white border-primary-500"
                          : "bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-primary-500"
                      }`}
                    >
                      <ClockIcon className="w-4 h-4 inline mr-1" />
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Emergency Service Option */}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Emergency service ($180/hour)
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

export default AppointmentScheduler;