import React from "react";

export default function Input(props: any) {
  return (
    <div className="basis-1/4 mx-2">
      <input
        placeholder="Driver name"
        type="text"
        value={props.value}
        onChange={props.onChange}
        className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900"
      />
    </div>
  );
}
