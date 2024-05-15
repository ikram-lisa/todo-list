import { useState } from "react";
import Moon from "../assets/images/icon-moon.svg";
import Sun from "../assets/images/icon-sun.svg";

const Todolist = () => {
  const [theme, setTheme] = useState("light");
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <section className={`theme ${theme} min-h-screen`}>
        <div>
          <h1>TODO</h1>
          <button onClick={handleToggle}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </div>
      </section>
    </>
  );
};
export default Todolist;
