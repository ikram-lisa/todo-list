const Form = ({ theme }) => {
  return (
    <>
      <section className="bg-white rounded-[5px] w-full h-16 flex items-center">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          className="input-search  block w-full p-4 text-lg text-gray-900  "
          placeholder="Create a new todo..."
        />
        <button></button>
      </section>
      <section className="result mt-7">
        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="checkbox-custom rounded-full"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                className="checkbox-custom rounded-full "
              />
              <label
                htmlFor="react-checkbox"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                React
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center justify-between p-4">
              <span>items</span>
              <div className="tab">tab</div>
              <button>clear</button>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Form;
