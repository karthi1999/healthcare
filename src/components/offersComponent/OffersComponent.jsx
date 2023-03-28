import React, { useState } from 'react'
import TabsComponent from '../baseComponents/TabsComponent'
import OffersTabs from './OffersTabs'

const OffersComponent = () => {
  const [tabs, setTabs] = useState([
    { name: 'Company', current: false },
    { name: 'Doctors', current: true },
    { name: 'Employee', current: false },
  ])

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-10 pt-3 sm:pt-0">
        <TabsComponent
          tabs={tabs}
          setTabs={setTabs}
        />
      </div>
      <OffersTabs />
    </div>
  )
}

export default OffersComponent