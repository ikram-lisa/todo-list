const Form = () => {
  return (
    <>
      <section className="bg-white rounded-[5px] w-full h-16 flex items-center">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          className="input-search py-3 pl-4 pr-[20rem]"
          placeholder="Create a new todo..."
        />
        <button></button>
      </section>
    </>
  );
};
export default Form;
