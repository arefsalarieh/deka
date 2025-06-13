import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "@/styles/auth.module.scss";
import login from "./actions";

export default function AuthPage() {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form action={login}>
        <Input name="phone" />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
