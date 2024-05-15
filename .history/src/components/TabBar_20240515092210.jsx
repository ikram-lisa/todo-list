/* eslint-disable no-unused-vars */
const Tab = ({ setFilter, currentFilter }) => {
  return (
    <>
      <ul
        className="flex flex-wrap -mb-px text-sm font-medium text-center"
        role="tablist"
      >
        {["All", "Active", "Completed"].map((tab) => (
          <li key={tab} className="me-2" role="presentation">
            <button
              className={`inline-block p-4 ${
                currentFilter === tab.toLowerCase()
                  ? "text-purple-600 border-purple-600"
                  : "text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300"
              }`}
              onClick={() => setFilter(tab.toLowerCase())}
              role="tab"
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Tab;
