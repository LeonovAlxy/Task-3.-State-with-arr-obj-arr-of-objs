import { useState } from "react";
import "./App.css";
import CompUser from "./comps/CompUser";
import CompTasks from "./comps/CompTasks";
import CompCart from "./comps/CompCart";
import { GlobalStyles } from "./comps/darkTheme/GlobalStyles";
import { lightTheme, darkTheme } from "./comps/darkTheme/Themes";
import { ThemeProvider } from "styled-components";
import Toggler from "./comps/darkTheme/Toggler";

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

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div>
        <GlobalStyles />
        <Toggler theme={theme} toggleTheme={themeToggler} />
        <CompUser user={user} setUser={setUser} />
        <CompTasks tasks={tasks} setTasks={setTasks} />
        <CompCart cart={cart} setCart={setCart} />
      </div>
    </ThemeProvider>
  );
}

export default App;
