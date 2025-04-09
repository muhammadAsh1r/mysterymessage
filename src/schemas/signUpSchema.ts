import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(3, "Username must be atleast 3 characters")
  .max(20, "Username must be no nore than 20 characters")
  .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special character");

export const signUpSchema = z.object({
  username: userNameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});
