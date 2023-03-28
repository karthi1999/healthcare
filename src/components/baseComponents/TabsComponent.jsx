export default function TabsComponent(
  {
    tabs,
    setTabs,
  }
) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const tabsHandler = (tab) => {
    const updatedTab = tabs.map(tabItem => {
      if (tabItem === tab) {
        return { ...tabItem, current: true };
      } else {
        return { ...tabItem, current: false };
      }
    });
    setTabs(updatedTab);
  };

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          onChange={(e) => tabsHandler(tabs.filter((item) => item.name == e.target.value)[0])}
          className="block w-40 mx-auto rounded-md font-semibold border-gray-300 focus:border-primary focus:ring-primary focus:outline-primary"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name} className="w-10">{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex justify-between" aria-label="Tabs">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                onClick={() => { tabsHandler(tab) }}
                className={classNames(
                  tab.current
                    ? 'border-b-4 border-primary text-primary'
                    : 'text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'w-1/2 border-b-2 pb-2 px-1 text-center text-base font-medium cursor-pointer'
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
