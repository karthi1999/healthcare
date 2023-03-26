import React, { useState } from 'react';
import LoginTabs from './LoginTabs';
import CompanyTabs from './CompanyTab';
import DoctorTab from './DoctorTab';
import EmployeeTab from './EmployeeTab';

const Login = () => {
  const tabs = [
    { name: 'Company', component: CompanyTabs, current: true },
    { name: 'Doctors', component: DoctorTab, current: false },
    { name: 'Employee', component: EmployeeTab, current: false },
  ]
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const renderTab = (tab) => {
    const Component = tab.component;
    return <Component />;
  };
  return (
    <div>
      <div className="py-3">
        <div className="px-4 py-3 sm:py-0 sm:px-6 lg:px-10 text-center">
          <h1 className="text-2xl sm:text-xl font-bold text-gray-900">Login In Creation</h1>
        </div>
        <div className="px-4 sm:px-6 lg:px-10 pt-3 sm:pt-0">
          <LoginTabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
        <div className="px-4 sm:px-6 lg:px-10">
          {renderTab(currentTab)}
        </div>
      </div>
    </div>
  )
}

export default Login