import { useState } from "react";
import Moon from "../assets/images/moon.svg";
import Sun from "../assets/images/sun.svg";

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
          <img src="../assets/images/moon.svg" alt="" />
          <button onClick={handleToggle}>
            {theme === "light" ? (
              <img src="../assets/images/moon.svg" alt="dark mode" />
            ) : (
              <img src="../assets/images/sun.svg" alt="light mode" />
            )}
          </button>
        </div>
      </section>
    </>
  );
};
export default Todolist;
