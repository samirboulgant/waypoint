import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function Calendar(props: any) {
  const [date, setDate] = useState(new Date());
  const handleDateChange = (date: any) => {
    setDate(date);
    props.onDateChange(date);
  };
  return (
    <div className="basis-1/4  mx-2 ">
      <DatePicker
        className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900"
        showTimeSelect
        selected={date}
        onSelect={(date) => {
          setDate(date);
        }}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd hh:mm aa"
        placeholderText="Arrival Date"
      />
    </div>
  );
}
