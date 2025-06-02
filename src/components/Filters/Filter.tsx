import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import "react-datepicker/dist/react-datepicker.css";
import "../../custom-datepicker.css";

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment';


const providers = ["Checkout.com", "Adyen", "CS-Ch"];
const paymentMethods = ["Saved Card", "GPay", "APay"];

const FilterComponent = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const [selectedProvider, setSelectedProvider] = useState("Adyen");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("NewCard");
  const [providerOpen, setProviderOpen] = useState(false);
const [paymentOpen, setPaymentOpen] = useState(false);

const providerRef = useRef<HTMLDivElement>(null);
const paymentRef = useRef<HTMLDivElement>(null);

// Close dropdown when clicking outside
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      providerRef.current &&
      !providerRef.current.contains(event.target as Node)
    ) {
      setProviderOpen(false);
    }
    if (
      paymentRef.current &&
      !paymentRef.current.contains(event.target as Node)
    ) {
      setPaymentOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  

  return (
    <div className="border rounded-2xl p-6 w-full shadow-sm">
      <h2 className="text-xl font-bold mb-4">Filter</h2>

      <div className="flex flex-col gap-4 md:gap-6 md:flex-row md:items-center md:flex-wrap">
        {/* Date Range */}
        {/* <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2 w-full md:w-auto">
          <label className="font-medium min-w-[90px]">Date Range:</label>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="border rounded-md p-2 text-sm w-full sm:w-44"
              dateFormat="dd/MM/yyyy"
            />
            <span className="text-sm">to</span>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate ?? undefined}
              className="border rounded-md p-2 text-sm w-full sm:w-44"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div> */}
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2 w-full md:w-auto">
  <label className="font-medium min-w-[90px]">Date Range:</label>
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto relative">

    
    {/* <div className="w-full sm:w-44">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className="border rounded-md p-2 text-sm w-full"
        dateFormat="dd/MM/yyyy"
        popperClassName="!z-50 custom-datepicker"
      />
    </div> */}

<div className="w-full sm:w-64">
  <DatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    showTimeSelect
    timeFormat="HH:mm"
    timeIntervals={15}
    dateFormat="dd/MM/yyyy h:mm aa"
    className="border rounded-md p-2 text-sm w-full"
    popperClassName="!z-50 custom-datepicker"
  />
</div>

{/* <div className="w-full sm:w-64">
  <Datetime
    value={startDate}
    onChange={(date) => setStartDate(moment(date).toDate())}
    dateFormat="DD/MM/YYYY"
    timeFormat="HH:mm"
    inputProps={{ className: "border rounded-md p-2 text-sm w-full" }}
  />
</div> */}


    <span className="text-sm">to</span>

    {/* <div className="w-full sm:w-44">
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate ?? undefined}
        className="border rounded-md p-2 text-sm w-full"
        dateFormat="dd/MM/yyyy"
        popperClassName="!z-50 custom-datepicker"
      />
    </div> */}

<div className="w-full sm:w-64">
  <DatePicker
    selected={endDate}
    onChange={(date) => setEndDate(date)}
    showTimeSelect
    startDate={startDate}
    endDate={endDate}
    timeFormat="HH:mm"
    timeIntervals={15}
    dateFormat="dd/MM/yyyy h:mm aa"
    className="border rounded-md p-2 text-sm w-full"
    popperClassName="!z-50 custom-datepicker"
  />
</div>
  </div>
</div>






        {/* Provider Dropdown */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 relative w-full md:w-auto"
                 ref={providerRef}
>
  <label className="font-medium min-w-[90px]">Provider:</label>
  <div className="relative w-full sm:w-44">
    <button
      className="w-full border rounded-md px-4 py-2 text-sm flex justify-between items-center"
      onClick={() => setProviderOpen(!providerOpen)}
    >
      <span className="truncate">{selectedProvider}</span>
      <svg
        className={`w-4 h-4 ml-2 transition-transform duration-200 ${
          providerOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {providerOpen && (
      <ul className="absolute bg-white shadow-md rounded-md mt-1 w-full z-10">
        {providers.map((p) => (
          <li
            key={p}
            onClick={() => {
              setSelectedProvider(p);
              setProviderOpen(false);
            }}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
          >
            {p}
          </li>
        ))}
      </ul>
    )}
  </div>
</div>


        {/* Payment Method Dropdown */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 relative w-full md:w-auto"
                 ref={paymentRef}
>
  <label className="font-medium min-w-[130px]">Payment Method:</label>
  <div className="relative w-full sm:w-44">
    <button
      className="w-full border rounded-md px-4 py-2 text-sm flex justify-between items-center"
      onClick={() => setPaymentOpen(!paymentOpen)}
    >
      <span className="truncate">{selectedPaymentMethod}</span>
      <svg
        className={`w-4 h-4 ml-2 transition-transform duration-200 ${
          paymentOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {paymentOpen && (
      <ul className="absolute bg-white shadow-md rounded-md mt-1 w-full z-10">
        {paymentMethods.map((method) => (
          <li
            key={method}
            onClick={() => {
              setSelectedPaymentMethod(method);
              setPaymentOpen(false);
            }}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
          >
            {method}
          </li>
        ))}
      </ul>
    )}
  </div>
</div>

      </div>
    </div>
  );
};

export default FilterComponent;
