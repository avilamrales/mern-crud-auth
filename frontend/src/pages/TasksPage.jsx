import { useEffect } from "react";
import { useTask } from "../context/TasksContext";

import TaskCard from "../components/TaskCard";

export default function TasksPage() {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  });

  if (tasks.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold my-4">Tasks</h1>
        <p>No tasks available</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
