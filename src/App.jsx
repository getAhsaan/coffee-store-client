import { useLoaderData } from "react-router-dom";
import "./App.css";
import Coffee from "./components/Coffee";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="px-20">
      <h1 className="text-center text-6xl my-4">Super Hot & Cold Coffee</h1>
      <div className="grid grid-cols-2 gap-6 m-10">
      {coffees.map((coffee) => (
        <Coffee
          key={coffee._id}
          coffee={coffee}
        ></Coffee>
      ))}
      </div>
    </div>
  );
}

export default App;
