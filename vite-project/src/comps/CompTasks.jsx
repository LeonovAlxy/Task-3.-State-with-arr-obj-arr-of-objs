import { useState } from "react";
import "../App";

function CompTasks() {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  const tasksList = tasks.map((item) => <li>{item}</li>);

  const handleClickAddTask = () => {
    const setTasksCopy = [...tasks];
    setTasksCopy.push("random_task");
    setTasks(setTasksCopy);
  };

  const handleClickRemoveLastTask = () => {
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
        <button onClick={handleClickAddTask}>Добавить задачу</button>
        <button onClick={handleClickRemoveLastTask}>
          Удалить последнюю задачу
        </button>
      </div>
    </div>
  );
}
export default CompTasks;
