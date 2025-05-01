import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .min(1, "userame is required")
    .max(50),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" })
    .max(50),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" })
    .max(50),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});
