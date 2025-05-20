import { useState } from "react";

import { TaskContext } from "./TasksContext";
import { createTaskRequest, getTasksRequest } from "../api/tasks";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, getTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
