import { useForm } from "react-hook-form";
import { useTask } from "../context/TasksContext";

export default function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createTask } = useTask();

  const onSubmit = async (values) => {
    await createTask(values);
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
