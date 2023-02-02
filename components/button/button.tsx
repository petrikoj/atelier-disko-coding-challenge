import styles from "./button.module.css";

type ButtonContentProps = {
  children?: React.ReactElement | React.ReactElement[] | string;
};
type ButtonProps = ButtonContentProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <div className={styles.root}>
      <button className={styles.button}>{children}</button>
    </div>
  );
}
