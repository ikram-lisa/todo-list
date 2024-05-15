import { useState } from "react";
import Light from "../assets/images/light.svg";
import Dark from "../assets/images/dark.svg";
import Form from "../components/Form";
const Todolist = () => {
  const [theme, setTheme] = useState("light");
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <section
        className={`container-todo ${
          theme === "light" ? "bg-white" : "bg-VeryDarkBlue"
        }`}
      >
        <div
          className={`theme  ${
            theme === "light" ? "bg-light-theme" : "bg-dark-theme"
          } `}
        >
          <div className="theme-content flex justify-between items-center">
            <h1>TODO</h1>
            <img src="../assets/images/moon.svg" alt="" />
            <button onClick={handleToggle}>
              {theme === "light" ? (
                <img src={Dark} alt="dark mode" />
              ) : (
                <img src={Light} alt="light mode" />
              )}
            </button>
          </div>
          <Form theme={theme} />
        </div>
      </section>
    </>
  );
};
export default Todolist;
