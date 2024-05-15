const Tab = () => {
  return (
    <>
      <ul className="tab flex justify-between items-center">
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
      <ul
        className="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-styled-tab"
        data-tabs-toggle="#default-styled-tab-content"
        data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
        data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
        role="tablist"
      >
        <li className="me-2" role="presentation">
          <button
            className="inline-block p-4 border-b-2 rounded-t-lg"
            id="profile-styled-tab"
            data-tabs-target="#styled-profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            All
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="dashboard-styled-tab"
            data-tabs-target="#styled-dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="false"
          >
            Active
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="settings-styled-tab"
            data-tabs-target="#styled-settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
          >
            Completed
          </button>
        </li>
        <li role="presentation">
          <button
            className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="contacts-styled-tab"
            data-tabs-target="#styled-contacts"
            type="button"
            role="tab"
            aria-controls="contacts"
            aria-selected="false"
          >
            Contacts
          </button>
        </li>
      </ul>
    </>
  );
};
export default Tab;
