import React from 'react'

const SearchComponent = () => {
  return (
    <div className="flex justify-start w-full">
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
            className="relative m-0 -mr-px block w-full min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding pl-8 px-2.5 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-400"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1" />
          <button
            className="absolute right-0 z-[2] flex items-center rounded-full bg-primary p-2 border border-primary text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchComponent