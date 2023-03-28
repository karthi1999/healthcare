import React from 'react'
import { PhotoIcon } from '@heroicons/react/24/solid'

const OffersTabs = () => {
  return (
    <div className='grid grid-cols-1 gap-8 p-3 mt-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <div className='col-span-1 h-40 sm:h-full rounded-lg bg-black bg-opacity-10'>
          <div
            className="w-full h-full sm:w-full sm:h-full flex justify-center items-center  border-gray-900/25 relative"
            htmlFor="file-upload">
            <div className="relative z-10 flex justify-center items-center rounded-md text-sm font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary w-full h-full">
              <input id="file-upload" name="file-upload" type="file" className="absolute inset-0 w-full h-full focus:outline-none focus:border-transparent opacity-0 cursor-pointer appearance-none" />
              <PhotoIcon className="mx-auto w-16 h-16 sm:h-28 sm:w-28" fill="#6b6969" aria-hidden="true" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#e6e6e6" className="w-9 h-9 sm:w-14 sm:h-14 fill-primary absolute bottom-3 right-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div>
            <input
              type="text"
              name="title"
              id="title"
              className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
              placeholder="Type here your title"
            />
          </div>
          <div className="mt-4">
            <textarea
              rows={4}
              name="comment"
              id="comment"
              className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:py-1.5 sm:text-sm sm:leading-6 focus:outline-none"
              defaultValue={''}
              placeholder='Add your description'
            />
          </div>
          <div className='mt-4 flex justify-center items-center gap-10'>
            <button
              type="button"
              className="rounded-md bg-primary py-2 px-5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Upload
            </button>
            <button
              type="button"
              className="rounded-md bg-primary py-2 px-5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <div className='col-span-1 rounded-lg bg-black bg-opacity-10 h-40 sm:h-full'>
          <div
            className="w-full h-full sm:w-full sm:h-full flex justify-center items-center  border-gray-900/25 relative"
            htmlFor="file-upload">
            <div className="relative z-10 flex justify-center items-center rounded-md text-sm font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary w-full h-full">
              <input id="file-upload" name="file-upload" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none" />
              <PhotoIcon className="mx-auto w-16 h-16 sm:h-28 sm:w-28" fill="#6b6969" aria-hidden="true" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#e6e6e6" className="w-9 h-9 sm:w-14 sm:h-14 fill-primary absolute bottom-3 right-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div>
            <input
              type="text"
              name="title"
              id="title"
              className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 focus:outline-none"
              placeholder="Type here your title"
            />
          </div>
          <div className="mt-4">
            <textarea
              rows={4}
              name="comment"
              id="comment"
              className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:py-1.5 sm:text-sm sm:leading-6 focus:outline-none"
              defaultValue={''}
              placeholder='Add your description'
            />
          </div>
          <div className='mt-4 flex justify-center items-center gap-10'>
            <button
              type="button"
              className="rounded-md bg-primary py-2 px-5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Upload
            </button>
            <button
              type="button"
              className="rounded-md bg-primary py-2 px-5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OffersTabs