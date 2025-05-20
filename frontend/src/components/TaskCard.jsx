import { Link } from "react-router";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

import { useTask } from "../context/TasksContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useTask();

  return (
    <div className="bg-slate-700 max-w-sm w-full p-4 rounded-lg">
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">{task.title}</h3>
        <div className="flex gap-x-2 items-center">
          <Link
            to={`/tasks/${task._id}`}
            className="px-2 py-1 bg-sky-600 rounded-md"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteTask(task._id)}
            className="px-2 py-1 bg-rose-500 rounded-md"
          >
            Delete
          </button>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p className="text-slate-400">
        {dayjs.utc(task.date).utc().format("DD/MM/YYYY")}
      </p>
    </div>
  );
}
