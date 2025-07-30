import { useState } from "react";
import "../App";

function CompTasks() {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  const tasksList = tasks.map((item) => <li>{item}</li>);

  const AddTask = () => {
    const setTasksCopy = [...tasks];
    setTasksCopy.push("random_task");
    setTasks(setTasksCopy);
  };

  const RemoveLastTask = () => {
    const setTasksCopy = [...tasks];
    setTasksCopy.pop();
    setTasks(setTasksCopy);
  };
  return (
    <div class="Card" name="TasksCard">
      <ul>
        <h3>Список задач</h3>
        {tasksList}
      </ul>
      <div class="TasksButtons">
        <button onClick={AddTask}>Добавить задачу</button>
        <button onClick={RemoveLastTask}>Удалить последнюю задачу</button>
      </div>
    </div>
  );
}
export default CompTasks;
