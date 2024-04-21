import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email" }),
  password: z.string(),
});
