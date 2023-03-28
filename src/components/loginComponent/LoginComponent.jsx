import React, { useState } from 'react';
import CompanyTabs from './CompanyTab';
import DoctorTab from './DoctorTab';
import EmployeeTab from './EmployeeTab';
import TabsComponent from '../baseComponents/TabsComponent';

const Login = () => {
  const [tabs, setTabs] = useState([
    { name: 'Company', component: CompanyTabs, current: true },
    { name: 'Doctors', component: DoctorTab, current: false },
    { name: 'Employee', component: EmployeeTab, current: false },
  ])

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-10 pt-3 sm:pt-0">
        <TabsComponent
          tabs={tabs}
          setTabs={setTabs}
        />
      </div>
      {tabs.map(tab => {
        return (tab.current &&
          <div key={tab.name} className="px-4 sm:px-6 lg:px-10">
            <tab.component />
          </div>)
      })}
    </div>
  )
}

export default Login