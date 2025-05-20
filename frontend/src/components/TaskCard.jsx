import { Link } from "react-router";

import { useTask } from "../context/TasksContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useTask();

  return (
    <div className="bg-slate-700 max-w-sm w-full p-4 rounded-lg">
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">{task.title}</h3>
        <div className="flex gap-x-4 items-center">
          <button>Edit</button>
          <button
            onClick={() => deleteTask(task._id)}
            className="px-2 py-1 bg-rose-700 rounded-lg"
          >
            Delete
          </button>
        </div>
      </header>
      <p className="">{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
}
