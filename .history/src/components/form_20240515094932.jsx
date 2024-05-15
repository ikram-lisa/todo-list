import { useState } from "react";
import Tab from "./TabBar";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
/* eslint-disable react/prop-types */
const Form = ({ theme }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: todos.length + 1,
      text: inputValue,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
    console.log(todos);
  };
  const handleToggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    console.log("deleted");
  };
  const handleDeleteAll = () => {
    setTodos([]);
  };
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.isCompleted);
      case "completed":
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  };
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const items = Array.from(getFilteredTodos());
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    setTodos(todos.map((todo) => items.find((i) => i.id === todo.id) || todo));
  };

  const filteredTodos = getFilteredTodos();
  return (
    <>
      <section className="search rounded-[5px] relative w-full h-16 flex items-center">
        <form
          onSubmit={handleSubmit}
          className="search rounded-[5px] relative w-full h-16 flex items-center"
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className={`input-search block w-full p-4 text-lg text-gray-900 ${
              theme === "dark"
                ? "bg-VeryDarkBlueish text-white"
                : "bg-white text-gray-900"
            } rounded-[5px] w-full h-16 flex items-center`}
            placeholder="Create a new todo..."
          />
        </form>
      </section>
      <section className="result mt-7">
        <ul
          className={`w-full text-sm font-medium ${
            theme === "dark"
              ? "bg-VeryDarkBlueish text-white border-gray-600"
              : "bg-white text-gray-900 border-gray-200"
          } rounded-lg`}
        >
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={`w-full border-b border-gray-500 rounded-t-lg dark:border-gray-600 ${
                todo.isCompleted ? "checked" : ""
              }`}
            >
              <div className="flex items-center justify-between ps-3">
                <label className="custom-checkbox flex items-center gap-3 w-full py-5 ms-2 text-sm font-medium">
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => handleToggleCompleted(todo.id)}
                    className="mr-5 mt-2"
                  />
                  <div className="checkbox-custom"></div>
                  {todo.text}{" "}
                </label>
                <button
                  type="button"
                  onClick={() => handleDelete(todo.id)}
                  className="ms-auto -ml-1.5 mr-[0.625rem] text-[transparent] font-bold hover:text-gray-500  p-1.5 
       inline-flex items-center justify-center h-7 w-7 "
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}

          <li className="w-full">
            <div className="flex items-center justify-between py-2 px-3">
              <span>{completedCount} items left</span>
              <div className="tab">
                <Tab setFilter={setFilter} currentFilter={filter} />
              </div>
              <button onClick={handleDeleteAll}>Clear Completed</button>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Form;
