import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email Is Required" }),
  password: z.string().min(1, { message: "Password Is Required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email Is Required" }),
  password: z
    .string()
    .min(6, { message: "Password Is Required & Minimum 6 Characters" }),
  name: z.string().min(1, { message: "Name Is Required" }),
});
