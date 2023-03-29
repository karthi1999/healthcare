import React from 'react';
import { IoFilter } from "react-icons/io5";
import BaseSearchComponent from '../baseComponents/baseSearchComponent'
import CAETableComponent from './CAETableComponent';

const CAEComponent = () => {
  return (
    <div>
      <div className='flex justify-between mx-3'>
        <div>
          <button
            type="button"
            className="w-32 inline-flex items-center gap-x-4 ring-1 ring-inset ring-gray-300  justify-center rounded-md border-0 py-1 shadow-sm focus:outline-none"
          >
            <IoFilter className='h-5 w-5' />
            Filters
          </button>
        </div>
        <div>
          <BaseSearchComponent placeholder={'Search'} />
        </div>
      </div>
      <div>
        <CAETableComponent />
      </div>
    </div>
  )
}

export default CAEComponent