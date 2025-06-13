import { z } from "zod";


export const authValidationSchema = z.object({
  phoneNumber: z.string().regex(/^(\+98|0098|0)?9[0-39]\d{8}$/),
});
