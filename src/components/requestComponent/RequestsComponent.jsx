import React from 'react'
import { HiArrowDown } from "react-icons/hi";
import { requestList } from '../../assets/requestList/requestList';
import BaseSearchComponent from '../baseComponents/baseSearchComponent';

const Requests = () => {
  return (
    <div>
      <div className="px-3 pt-3 sm:pt-0 flex gap-8">
        <BaseSearchComponent placeholder={'Search'} />
      </div>
      <div className="pt-5 mx-3">
        <div className='grid grid-cols-9 gap-5 border p-3'>
          <div className='col-span-2'>
            <p className='flex items-center gap-1 text-sm text-gray-500 font-semibold justify-center'>
              Name <HiArrowDown className='h-4 w-5' />
            </p>
          </div>
          <div className='col-span-1'>
            <p className='flex items-center gap-1 text-sm text-gray-500 font-semibold'>
              Mob.No <HiArrowDown className='h-4 w-5' />
            </p>
          </div>
          <div className='col-span-4'>
            <p className='flex items-center gap-1 text-sm text-gray-500 font-semibold'>
              Requests & Notification <HiArrowDown className='h-4 w-5' />
            </p>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm text-gray-500 font-semibold'>
              Date <HiArrowDown className='h-4 w-5' />
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="mx-3">
        {
          Array.isArray(requestList) && requestList.length ?
            requestList.map((list, index) => {
              const {
                name,
                mobile,
                address,
                date
              } = list
              return (
                <div key={index} className='grid grid-cols-9 gap-5 border border-t-0 p-3' >
                  <div className='col-span-2 flex items-center gap-5'>
                    <div className='h-5 w-5 relative rounded-full border-gray-300 border-2 overflow-hidden'>
                      <input
                        name={`person`}
                        type="checkbox"
                        className="h-[21px] w-[21px] -right-[3px] bottom-[0.5px] -top-[0.6px] -left-[1.5px] absolute outline-none focus:outline-none accent-primary text-xs font-thin"
                      />
                    </div>
                    <p className='capitalize'>{name}</p>
                  </div>
                  <div className='flex items-center'>
                    <p>{mobile}</p>
                  </div>
                  <div className='flex items-center col-span-4 text-sm'>
                    <p>
                      {address}
                    </p>
                  </div>
                  <div className='flex items-center'>
                    <p className='text-green-700'>
                      {date}
                    </p>
                  </div>
                  <div className='flex gap-3 items-center justify-around'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </div>
                </div>)
            }) : ""
        }
      </div>
    </div>
  )
}

export default Requests;