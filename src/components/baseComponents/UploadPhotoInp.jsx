import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const UploadPhotoInp = () => {
  return (
    <>
      <label htmlFor="file-upload" className="block text-sm font-normal leading-6">
        Upload Photo
      </label>
      <div
        className="w-full h-32 sm:w-2/4 sm:h-2/3 mt-2 flex justify-center items-center rounded-lg bg-black bg-opacity-10 border-gray-900/25 relative"
        htmlFor="file-upload">
        <div className="relative z-10 flex justify-center items-center rounded-md shadow-sm text-sm font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary w-full h-full">
          <input id="file-upload" name="file-upload" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none" />
          <PhotoIcon className="mx-auto w-10 h-10 sm:h-16 sm:w-16 " fill="#6b6969" aria-hidden="true" />
        </div>
      </div>
    </>
  )
}

export default UploadPhotoInp