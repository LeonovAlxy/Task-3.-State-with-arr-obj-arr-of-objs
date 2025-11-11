import { memo } from "react";
import "../App";

function CompTasks({ tasks, setTasks }) {
  const tasksList = tasks.map((item) => <li key={`${item}`}>{item}</li>);

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
  console.log("Tasks", tasks);
  return (
    <div className="Card" name="TasksCard">
      <ul>
        <h3>Список задач</h3>
        {tasksList}
      </ul>
      <div className="TasksButtons">
        <button onClick={handleClickAddTask}>Добавить задачу</button>
        <button onClick={handleClickRemoveLastTask}>
          Удалить последнюю задачу
        </button>
      </div>
    </div>
  );
}
export default memo(CompTasks);
