import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { useTask } from "../context/TasksContext";

dayjs.extend(utc);

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
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
      }
    }

    loadTask();
  });

  const onSubmit = async (values) => {
    const validData = {
      ...values,
      date: values.date ? dayjs(values.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      await updateTask(validData, params.id);
    } else {
      await createTask(validData);
    }
    navigate("/tasks");
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <h1 className="text-4xl font-bold text-white">Task Form</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-1/3 mx-auto mt-6 max-w-96 bg-slate-800 p-8 rounded-lg"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-2 font-semibold">
            Title
          </label>
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
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="mb-2 font-semibold">
            Description
          </label>
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
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="mb-2 font-semibold">
            Date
          </label>
          <input
            type="date"
            {...register("date")}
            className="p-2 bg-slate-700 rounded-md border-blue-400 border-1 focus:ring-1 focus:outline-none focus:ring-blue-600 placeholder:text-sm text-base"
          />
        </div>
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
