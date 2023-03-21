import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import Calendar from "./Calendar";
import Button from "./Button";

export default function Waypointcreate(props: any) {
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState();

  const handleButtonClick = () => {
    props.onStateChange(selectedValue, inputValue, date);
    setSelectedValue("");
    setInputValue("");
  };
  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const onClick = () => {
    handleButtonClick();
  };

  const handleDateChange = (date: any) => {
    setDate(date);
  };
  return (
    <div
      className="flex flex-row p-2 rounded shadow-md items-center"
      onChange={props.values}
    >
      <p>{inputValue}</p>
      <Select options={props.options} onChange={handleSelectChange} />
      <Input
        driverName={props.driverName}
        onChange={handleInputChange}
        value={inputValue}
      />
      <Calendar onDateChange={handleDateChange} />
      <Button message="Add waypoint" onClick={onClick} />
    </div>
  );
}
