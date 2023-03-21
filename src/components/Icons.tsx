import React from "react";

export default function Icons(props: any) {
  const handelButtonClick = (event: any) => {
    props.onClick(event);
  };
  const handelMoveUp = (event: any) => {
    props.onClicked(event);
  };
  const handleMoveDown = (event: any) => {
    props.ondownClicked(event);
  };
  const handleUp = (event: any) => {
    props.onhadleUp(event);
  };
  const handleDown = (event: any) => {
    props.onhandleDown(event);
  };
  return (
    <div className="basis-1/4">
      <button
        onClick={handleUp}
        type="button"
        className="text-white bg-blue-600 
      hover:bg-blue-700 
      focus:ring-4 
      focus:outline-none 
      active:ring-blue-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={handelMoveUp}
        className="text-white bg-blue-600 
      hover:bg-blue-700 
      focus:ring-4 
      focus:outline-none 
      active:ring-blue-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>

        <span className="sr-only">Icon description</span>
      </button>
      <button
        type="button"
        onClick={handleMoveDown}
        className="text-white bg-blue-600 
      hover:bg-blue-700 
      focus:ring-4 
      focus:outline-none 
      active:ring-blue-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>

        <span className="sr-only">Icon description</span>
      </button>
      <button
        type="button"
        onClick={handleDown}
        className="text-white bg-blue-600 
      hover:bg-blue-700 
      focus:ring-4 
      focus:outline-none 
      active:ring-blue-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>

        <span className="sr-only">Icon description</span>
      </button>
      <button
        onClick={handelButtonClick}
        type="button"
        className="text-white bg-blue-600 
      hover:bg-blue-700 
      focus:ring-4 
      focus:outline-none 
      active:ring-blue-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          ></path>
        </svg>
      </button>
    </div>
  );
}
