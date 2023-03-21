import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";
import Divider from "./components/Divider";

import Waypoint from "./components/Waypoint";
import Waypointcreate from "./components/Waypointcreate";
// city driver name label date
const cities = [
  "Casablanca",
  "El Kelaa des Srarhna",
  "Fès",
  "Tangier",
  "Marrakech",
  "Sale",
  "Rabat",
  "Meknès",
  "Kenitra",
  "Agadir",
  "Oujda-Angad",
  "Tétouan",
];
const allwaypoint = [
  {
    id: 1,
    driverName: "Samir",
    city: "Tétouan",
    arrivedDtae: new Date(),
  },
  {
    id: 2,
    driverName: "boulgant",
    city: "casablanca",
    arrivedDtae: new Date(),
  },
  {
    id: 3,
    driverName: "ahmad",
    city: "Oujda-Angad",
    arrivedDtae: new Date(),
  },
];
let waypoints = allwaypoint;

function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState();
  const [waypoint, setPoints] = useState(waypoints);

  const handleDateChange = (index: any, date: any) => {
    const updatedWaypoints = [...waypoint];
    updatedWaypoints[index].arrivedDtae = date;
    setPoints(updatedWaypoints);
  };

  const handleChildState = (selectedValue: any, inputValue: any, date: any) => {
    setSelectedValue(selectedValue);
    setInputValue(inputValue);
    const updatedWaypoints = [
      ...waypoint,
      { id: 0, driverName: inputValue, city: selectedValue, arrivedDtae: date },
    ];
    setPoints(updatedWaypoints);
  };

  const buttonClick = (index: any) => {
    const updatedWaypoints = [...waypoint];
    console.log(waypoint);
    waypoint.splice(index, 1);
    updatedWaypoints.splice(index, 1);
    setPoints(updatedWaypoints);
  };
  const buttonUpClicked = (index: any) => {
    if (index > 0) {
      let temp = waypoint[index];
      waypoint[index] = waypoint[index - 1];
      waypoint[index - 1] = temp;
      const updatedWaypoints = [...waypoint];
      setPoints(updatedWaypoints);
      console.log(updatedWaypoints);
    }
  };
  const buttonDownClicked = (index: any) => {
    if (index < waypoint.length - 1) {
      let temp = waypoint[index];
      waypoint[index] = waypoint[index + 1];
      waypoint[index + 1] = temp;
      const updatedWaypoints = [...waypoint];
      setPoints(updatedWaypoints);
      console.log(updatedWaypoints);
    }
  };

  const buttonUp = (index: any) => {
    let temp = waypoint[index];
    let tempwaypoint = [...waypoint];
    if (index > 0) {
      for (let i = 1; i <= index; i++) {
        tempwaypoint[i] = waypoint[i - 1];
      }
      tempwaypoint[0] = temp;
      setPoints(tempwaypoint);
    }
  };

  const buttonDown = (index: any) => {
    let temp = waypoint[index];
    if (index < waypoint.length - 1) {
      for (let i = index; i < waypoint.length - 1; i++) {
        waypoint[i] = waypoint[i + 1];
      }
      waypoint[waypoint.length - 1] = temp;
      const updatedWaypoints = [...waypoint];
      setPoints(updatedWaypoints);
    }
  };

  return (
    <div className="mx-75 mt-10">
      {waypoint.map((point, index) => {
        point.id = index + 1;
        return (
          <Waypoint
            id={point.id}
            key={index}
            index={index}
            options={cities}
            city={point.city}
            driverName={point.driverName}
            arrivedDtae={point.arrivedDtae}
            onClick={() => buttonClick(index)}
            onMoveClicked={() => buttonUpClicked(index)}
            onMoveDown={() => {
              buttonDownClicked(index);
            }}
            onUp={() => {
              buttonUp(index);
            }}
            onDown={() => {
              buttonDown(index);
            }}
          />
        );
      })}

      <Divider />
      <Waypointcreate
        options={cities}
        driverName="samir boulguant"
        onStateChange={handleChildState}
        onDateChange={handleDateChange}
      />
    </div>
  );
}

export default App;
