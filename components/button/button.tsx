import styles from "./button.module.css";

type ButtonProps = {
  callToAction: string;
  type?: string;
};
function Button({ callToAction }: ButtonProps) {
  return (
    <div className={styles.root}>
      <button className={styles.button}>{callToAction}</button>
    </div>
  );
}
export default Button;
