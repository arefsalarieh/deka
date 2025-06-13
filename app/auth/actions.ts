"use server";
import { redirect } from "next/navigation";

import { setCookie } from "cookies-next";
import { z } from "zod";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
});

export default async function login(formData: FormData) {
  const rawFormData = {
    phone: formData.get("phone"),
  };

  const validatedFields = schema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  else{
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us")
      const data = await res.json()
      await setCookie('user' , data)
      redirect("/dashboard")
    } catch (error) {
      console.log(error)
    }

  }
}
