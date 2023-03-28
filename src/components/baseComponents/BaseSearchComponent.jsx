import React from 'react'

const BaseSearchComponent = ({ placeholder }) => {
  return (
    <div className="w-full md:w-80">
      <div className="relative flex w-full flex-wrap items-stretch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          strokeWidth='1'
          className="h-5 w-5 absolute top-2 left-2 stroke-neutral-200">
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd" />
        </svg>
        <input
          type="search"
          className="block w-full md:w-80 rounded-md border-0 py-1.5 pr-10 text-gray-400 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none pl-8"
          placeholder={placeholder}
          aria-label="Search"
          aria-describedby="button-addon1" />
      </div>
    </div>
  )
}

export default BaseSearchComponent