import React from 'react';
import { HiArrowDown } from "react-icons/hi";
import { doctorsList } from '../../assets/doctorList/doctorsList';

const TableDataComponent = ({ tableHeader, comp }) => {
  return (
    <>
      <div className="pt-5 mx-3">
        <div className='grid grid-cols-10 gap-5 border py-3'>
          {
            Array.isArray(tableHeader) && tableHeader.length ?
              tableHeader.map((list, index) => {
                const {
                  header,
                  className,
                  additionalStyle,
                } = list
                return (
                  <div key={index} className={className}>
                    <p className={`flex items-center gap-1 text-sm text-gray-500 font-semibold ${additionalStyle}`}>
                      {header} <HiArrowDown className='h-4 w-5' />
                    </p>
                  </div>
                )
              }) : ''}
        </div>
      </div>
      <div className="mx-3">
        {
          Array.isArray(doctorsList) && doctorsList.length ?
            doctorsList.map((list, index) => {
              const {
                name,
                subname,
                gender,
                experience,
                mobile,
                address,
                status,
                date
              } = list
              return (
                <div key={index} className='grid grid-cols-10 gap-5 border border-t-0 p-3' >
                  <div className='col-span-3 flex items-center gap-5'>
                    <input
                      name={`person`}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 focus:outline-none accent-primary"
                    />
                    <div className='flex items-center gap-3 text-sm text-gray-500 font-semibold'>
                      <p>
                        <img
                          className="inline-block h-9 w-9 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </p>
                      <div>
                        <p className='capitalize'>{name}</p>
                        <p className='text-sm text-gray-400 capitalize'>{subname}</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center col-span-1'>
                    <p>{gender}</p>
                  </div>
                  <div className='flex items-center col-span-1'>
                    <p>{experience}</p>
                  </div>
                  <div className='flex items-center col-span-1'>
                    <p>{mobile}</p>
                  </div>
                  <div className='flex items-center col-span-2 text-sm'>
                    <p> {address} </p>
                  </div>
                  <div className={`flex items-center justify-between ${comp ? 'col-span-2' : 'col-span-1'}`}>
                    <p className='text-green-700 pl-2.5'>{comp ? date : status}</p>
                    {comp &&
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>}
                  </div>
                  {!comp &&
                    <div className='flex gap-3 items-center justify-around'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </div>}
                </div>)
            }) : ""
        }
      </div>
      <div className='flex items-center justify-end gap-7 mr-10 mt-5'>
        <button
          type="button"
          className="w-36 inline-flex justify-center items-center gap-x-2 rounded-md bg-primary py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
          </svg>
          Upload File
        </button>
        <button
          type="button"
          className="w-36 inline-flex items-center justify-center gap-x-2 rounded-md bg-primary py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default TableDataComponent