/* eslint-disable react/prop-types */
const Form = ({ theme }) => {
  return (
    <>
      <section className="search rounded-[5px] w-full h-16 flex items-center">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          className={`input-search  block w-full p-4 text-lg text-gray-900  ${
            theme === "dark"
              ? "bg-VeryDarkBlueish text-white"
              : "bg-white text-gray-900"
          } rounded-[5px] w-full h-16 flex items-center`}
          placeholder="Create a new todo..."
        />
        <button></button>
      </section>
      <section className="result mt-7">
        <ul
          className={`w-full text-sm font-medium ${
            theme === "dark"
              ? "bg-VeryDarkBlueish text-white border-gray-600"
              : "bg-white text-gray-900 border-gray-200"
          } rounded-lg`}
        >
          <li className="w-full border-b border-gray-500 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <label className="custom-checkbox flex items-center gap-3 w-full py-3 ms-2 text-sm font-medium">
                <input type="checkbox" className="mr-5 mt-2" />
                <div className="checkbox-custom"></div>
                Vue JS
              </label>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5  text-[transparent] font-bold hover:text-gray-900  p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-11 w-11 "
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          </li>

          <li className="w-full ">
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
