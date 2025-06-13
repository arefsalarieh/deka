import { getCookie } from "cookies-next";
import styles from "@/styles/dashboard.module.scss";
import { User } from "@/types/user";

export default async function DashboardPage() {
  const userCookie = await getCookie("user");
  const user: User | null = userCookie ? JSON.parse(userCookie) : null;

  return (
    <div className={styles.container}>
      <h1>
        Welcome to the Dashboard
        {user ? `, ${user.name.first} ${user.name.last}` : ""}
      </h1>
    </div>
  );
}
