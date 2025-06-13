import styles from "@/styles/auth.module.scss";

interface InputProps {
  name: string;
  value?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ name, value, error }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        name={name}
        defaultValue={value}
        placeholder="Phone Number"
        className={styles.input}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
