import styles from "./button.module.css";

type ButtonProps = {
  children?: React.ReactElement | React.ReactElement[] | string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <div className={styles.root}>
      <button className={styles.button} {...rest}>
        {children}
      </button>
    </div>
  );
}
