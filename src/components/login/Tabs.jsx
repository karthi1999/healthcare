const tabs = [
  { name: 'Company', href: '#', current: false },
  { name: 'Doctors', href: '#', current: true },
  { name: 'Employee', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  return (
    <div className="pt-4">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block px-6">
        <div className="border-b-2 border-gray-200">
          <nav className="-mb-px flex justify-center" aria-label="Tabs">
            {tabs.map((tab, index) => (
              <div
                key={index}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'w-1/3 border-b-4 py-4 px-1 text-center text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
