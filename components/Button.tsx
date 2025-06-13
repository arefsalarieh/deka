import styles from "@/styles/auth.module.scss";

interface ButtonProps {
  type?: "submit" | "button";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type = "button", children }) => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
