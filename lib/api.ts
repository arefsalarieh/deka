import { User } from "@/types/user";

export async function fetchRandomUser(): Promise<User> {
  const res = await fetch("https://randomuser.me/api/?results=1&nat=us", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  const data = await res.json();
  const user = data.results[0];
  return {
    name: user.name,
    email: user.email,
    login: { uuid: user.login.uuid },
  };
}
