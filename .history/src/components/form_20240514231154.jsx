const Form = () => {
  return (
    <>
      <section className="bg-white rounded-[5px] w-full h-16 flex items-center">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          className="input-search  block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Create a new todo..."
        />
        <button></button>
      </section>
    </>
  );
};
export default Form;
