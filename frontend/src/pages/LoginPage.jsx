import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  const onSubmit = async (values) => {
    await login(values);
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <h1 className="text-4xl font-bold text-white">Login</h1>

      {registerErrors.length > 0 && (
        <div className="text-sm text-red-500 bg-red-100 p-4 rounded-lg mt-6">
          {registerErrors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-1/3 mx-auto mt-6 max-w-96 bg-slate-800 p-8 rounded-lg"
      >
        <input
          type="email"
          name="email"
          placeholder="jesusavilx@gmail.com"
          {...register("email", { required: true })}
          className="p-2 bg-slate-700 rounded-md border-blue-400 border-1 focus:ring-1 focus:outline-none focus:ring-blue-600 placeholder:text-sm text-base"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">Email is required</p>
        )}
        <input
          type="password"
          name="password"
          placeholder="**********"
          {...register("password", { required: true })}
          className="p-2 bg-slate-700 rounded-md border-blue-400 border-1 focus:ring-1 focus:outline-none focus:ring-blue-600 placeholder:text-sm text-base"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">Password is required</p>
        )}
        <button
          type="submit"
          className="hover:cursor-pointer bg-blue-500 p-2 rounded-md w-full hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-white mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
