import React from "react";

export default function Select(props: any) {
  return (
    <div className="basis-1/4  mx-2">
      <select
        value={props.city}
        onChange={props.onChange}
        className="w-full rounded-lg  bg-gray-50 border border-gray-300 text-gray-900"
      >
        {props.options.map((city: any) => (
          <option key={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}
