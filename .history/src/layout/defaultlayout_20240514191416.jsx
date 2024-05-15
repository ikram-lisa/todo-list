import { useState } from "react";

const defaultlayout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <section className={`${theme} min-h-screen`}>
        <div>
          <h1></h1>
          <button>
            <i className="fa-solid fa-sun"></i>
            <i className="fa-solid fa-moon"></i>
          </button>
        </div>
        {children}
      </section>
    </>
  );
};
export default defaultlayout;
