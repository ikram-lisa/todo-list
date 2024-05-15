import { useState } from "react";
import Light from "../assets/images/light.svg";
import Dark from "../assets/images/dark.svg";

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
              <img src="../assets/images/dark.svg" alt="dark mode" />
            ) : (
              <img src="../assets/images/light.svg" alt="light mode" />
            )}
          </button>
        </div>
      </section>
    </>
  );
};
export default Todolist;
