import { useState } from "react";
import Moon from "../assets/images/icon-moon.svg";
import Sun from "../assets/images/icon-sun.svg";
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
          <button></button>
        </div>
        {children}
      </section>
    </>
  );
};
export default defaultlayout;
