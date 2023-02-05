import styles from "./input.module.css";

export type InputProps = {
  className?: string;
  required?: boolean;
  name: string;
  id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ className, ...rest }: InputProps) {
  return <input className={styles.root} {...rest} />;
}

export default Input;
