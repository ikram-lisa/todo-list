const Form = () => {
  return (
    <>
      <section className="bg-white rounded-[5px] w-full h-16">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <input type="text" className="input-search" />
        <button></button>
      </section>
    </>
  );
};
export default Form;
