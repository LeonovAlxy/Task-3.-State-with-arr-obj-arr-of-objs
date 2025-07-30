import { useState } from "react";
import "./App.css";
import CompUser from "./comps/CompUser";
import CompTasks from "./comps/CompTasks";
import CompCart from "./comps/CompCart";

function App() {
  return (
    <>
      <CompUser></CompUser>
      <CompTasks></CompTasks>
      <CompCart></CompCart>
    </>
  );
}

export default App;
