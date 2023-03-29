import React from 'react';
import { caeHead } from '../../assets/c&eTables/caeHead';
// import { ceaList } from '../../assets/c&eTables/caeList';
import { employeeHead } from '../../assets/c&eTables/employeeHead';
import CompanyTable from './CompanyTable';
import TableDataComponent from '../baseComponents/TableDataComponent';

const CAETableComponent = () => {

  const ceaList1 = [
    {
      name: "Brooklyn Simmons",
      count: '45',
      mobile: '9087654321',
      address: "Reference site about Lorem Ipsum, giving information.",
      additionalStyle: 'bg-black bg-opacity-10 font-semibold',
      checkboxStyle: 'accent-primary'
    },
    {
      name: "Brooklyn Simmons",
      count: '45',
      mobile: '9087654321',
      address: "Reference site about Lorem Ipsum, giving information.",
      additionalStyle: 'bg-primary text-white font-semibold',
      checkboxStyle: 'accent-white'
    }
  ]
  const ceaList2 = [
    {
      name: "Brooklyn Simmons",
      count: '45',
      mobile: '9087654321',
      address: "Reference site about Lorem Ipsum, giving information.",
      additionalStyle: 'bg-black bg-opacity-10 font-semibold',
      checkboxStyle: 'accent-primary'
    },
    {
      name: "Brooklyn Simmons",
      count: '45',
      mobile: '9087654321',
      address: "Reference site about Lorem Ipsum, giving information.",
      additionalStyle: 'bg-black bg-opacity-10 font-semibold',
      checkboxStyle: 'accent-primary'
    },
  ]
  return (
    <>
      <div className="pt-5 mx-3">
        <div className='grid grid-cols-11 gap-5 py-3'>
          {
            Array.isArray(caeHead) && caeHead.length ?
              caeHead.map((list, index) => {
                const {
                  header,
                  className,
                  additionalStyle,
                } = list
                return (
                  <div key={index} className={className}>
                    <p className={`flex items-center gap-1 text-sm text-gray-500 font-semibold ${additionalStyle}`}>
                      {header}
                    </p>
                  </div>
                )
              }) : ''}
        </div>
      </div>
      <CompanyTable data={ceaList1} />
      <TableDataComponent tableHeader={employeeHead} comp={'caeComp'} />
      <CompanyTable data={ceaList2} />
    </>
  )
}

export default CAETableComponent