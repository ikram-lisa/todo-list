const Form = () => {
  return (
    <>
      <section className="bg-white rounded-[5px] w-full h-16 flex items-center">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          className="input-search p-10"
          placeholder="Create a new todo..."
        />
        <button></button>
      </section>
    </>
  );
};
export default Form;
