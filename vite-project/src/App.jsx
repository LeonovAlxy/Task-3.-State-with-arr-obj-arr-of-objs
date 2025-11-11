import { useState } from "react";
import "./App.css";
import CompUser from "./comps/CompUser";
import CompTasks from "./comps/CompTasks";
import CompCart from "./comps/CompCart";

function App() {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);
  console.log("app");

  return (
    <>
      <CompUser user={user} setUser={setUser} />
      <CompTasks tasks={tasks} setTasks={setTasks} />
      <CompCart cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
