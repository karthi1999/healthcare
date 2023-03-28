import React from 'react'
import { doctorComponentTable } from '../../assets/tableHeads/doctorComponentTable';
import BaseSearchComponent from '../baseComponents/baseSearchComponent';
import TableDataComponent from '../baseComponents/TableDataComponent';

const Doctors = () => {
  return (
    <div>
      <div className="px-3 pt-3 sm:pt-0 flex gap-8">
        <BaseSearchComponent placeholder={'Doctor Name or ID'} />
        <div className='flex items-center gap-3'>
          <p className='font-bold text-sm'>Speciality</p>
          <select
            id="location"
            name="location"
            className="block w-full md:w-80 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-400 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
            defaultValue="Search specialities"
          >
            <option value='Search specialities'>Search specialities</option>
          </select>
        </div>
      </div>
      <TableDataComponent tableHeader={doctorComponentTable} />
    </div>
  )
}

export default Doctors;