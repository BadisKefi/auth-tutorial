import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password Is Required & Minimum 6 Characters" }),
  confirmPassword: z
    .string()
    .min(6, { message: "Confirm password Is Required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
export const LoginSchema = z.object({
  email: z.string().email({ message: "Email Is Required" }),
  password: z.string().min(1, { message: "Password Is Required" }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email Is Required" }),
  password: z
    .string()
    .min(6, { message: "Password Is Required & Minimum 6 Characters" }),
  name: z.string().min(1, { message: "Name Is Required" }),
});
