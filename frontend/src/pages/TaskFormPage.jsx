import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";

import { useTask } from "../context/TasksContext";

export default function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { createTask, getTask, updateTask } = useTask();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }

    loadTask();
  });

  const onSubmit = async (values) => {
    if (params.id) {
      await updateTask(values, params.id);
    } else {
      await createTask(values);
    }
    navigate("/tasks");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <h1 className="text-4xl font-bold text-white">Task Form</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-1/3 mx-auto mt-6 max-w-96 bg-slate-800 p-8 rounded-lg"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          {...register("title", { required: true })}
          className="p-2 bg-slate-700 rounded-md border-blue-400 border-1 focus:ring-1 focus:outline-none focus:ring-blue-600 placeholder:text-sm text-base"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">Title is required</p>
        )}
        <textarea
          rows="4"
          name="description"
          placeholder="Description"
          {...register("description", { required: true })}
          className="p-2 bg-slate-700 rounded-md border-blue-400 border-1 focus:ring-1 focus:outline-none focus:ring-blue-600 placeholder:text-sm text-base"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">Description is required</p>
        )}
        <button
          type="submit"
          className="hover:cursor-pointer bg-blue-500 p-2 rounded-md w-full hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Save
        </button>
      </form>
    </div>
  );
}
