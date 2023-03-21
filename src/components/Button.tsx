import React from "react";

export default function Button(props: any) {
  return (
    <div className="basis-1/4">
      <button
        onClick={props.onClick}
        type="button"
        className="text-white bg-blue-600 px-5 py-2.5 
            hover:bg-blue-700 
            focus:ring-4 
            focus:outline-none 
            active:ring-blue-600 font-medium rounded text-sm p-2.5 text-center inline-flex items-center mr-2"
      >
        <svg
          fill="none"
          className="w-5 h-5 mr-2 -ml-1"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        {props.message}
      </button>
    </div>
  );
}
