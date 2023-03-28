import React, { useState } from 'react';
import TabsComponent from '../baseComponents/TabsComponent';
import BaseSearchComponent from '../baseComponents/baseSearchComponent';
import { employeeDataTable } from '../../assets/tableHeads/employeeDataTable';
import { doctorDataTable } from '../../assets/tableHeads/doctorDataTable';
import TableDataComponent from '../baseComponents/TableDataComponent';

const DataComponent = () => {
  const [tabs, setTabs] = useState([
    { name: 'Employees', current: true, tableHeader: employeeDataTable },
    { name: 'Doctors', current: false, tableHeader: doctorDataTable },
  ])
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-36 pt-3 sm:pt-0 font-semibold text-lg text-gray-600">
        <TabsComponent
          tabs={tabs}
          setTabs={setTabs}
        />
      </div>
      <div className='px-3 pt-5'>
        <BaseSearchComponent placeholder={'Search'} />
      </div>
      {tabs.map(tab => {
        return (tab.current &&
          <div key={tab.name}>
            <TableDataComponent tableHeader={tab.tableHeader} comp={'dataComp'} />
          </div>)
      })}
    </div>
  )
}

export default DataComponent;