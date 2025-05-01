import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-1/3 mx-auto mt-10 max-w-96 bg-slate-800 p-8 rounded-lg"
      >
        <input
          type="text"
          name="username"
          placeholder="jesusavilx"
          {...register("username", { required: true })}
          className="p-2 bg-slate-700 rounded-md border-blue-400 border-1 focus:ring-1 focus:outline-none focus:ring-blue-600 placeholder:text-sm text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="jesusavilx@gmail.com"
          {...register("email", { required: true })}
          className="p-2 bg-slate-700 rounded-md border-blue-400 border-1 focus:ring-1 focus:outline-none focus:ring-blue-600 placeholder:text-sm text-base"
        />
        <input
          type="password"
          name="password"
          placeholder="**********"
          {...register("password", { required: true })}
          className="p-2 bg-slate-700 rounded-md border-blue-400 border-1 focus:ring-1 focus:outline-none focus:ring-blue-600 placeholder:text-sm text-base"
        />
        <button
          type="submit"
          className="hover:cursor-pointer bg-blue-500 p-2 rounded-md w-full hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Register
        </button>
      </form>
    </>
  );
}
