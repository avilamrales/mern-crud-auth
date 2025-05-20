import { useEffect } from "react";
import { useTask } from "../context/TasksContext";

export default function TasksPage() {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  });

  if (tasks.length === 0) {
    return (
      <div>
        <h1>Tasks</h1>
        <p>No tasks available</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Tasks</h1>

      <div>
        {tasks.map((task) => (
          <div key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
