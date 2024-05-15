import Defaultlayout from "./layout/defaultlayout";
import Todolist from "./pages/Todolist";
const App = () => {
  return (
    <>
      <Defaultlayout>
        <Todolist />
      </Defaultlayout>
    </>
  );
};
export default App;
