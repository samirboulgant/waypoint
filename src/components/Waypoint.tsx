import React, { useState } from "react";

import Select from "./Select";
import Input from "./Input";
import Calendar from "./Calendar";
import Icons from "./Icons";
export default function Waypoint(props: any) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };
  const handleButtonClick = (event: any) => {
    props.onClick(event);
  };
  const handleButtonUp = (event: any) => {
    props.onMoveClicked(event);
  };
  const handleButtonDown = (event: any) => {
    props.onMoveDown(event);
  };
  const handleUp = (event: any) => {
    props.onUp(event);
  };
  const handleDown = (event: any) => {
    props.onDown(event);
  };
  return (
    <div className="flex flex-row p-2 rounded shadow-md items-center">
      <div className="flex-none  mx-2">{props.index + 1}</div>
      <Select city={props.city} options={props.options} />
      <Input value={props.driverName} />
      <Calendar onDateChange={handleDateChange} />
      <Icons
        onClick={handleButtonClick}
        onClicked={handleButtonUp}
        ondownClicked={handleButtonDown}
        onhadleUp={handleUp}
        onhandleDown={handleDown}
      />
    </div>
  );
}
