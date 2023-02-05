import styles from "./label.module.css";

export type LabelProps = {
  title: string;
  className?: string;
  htmlFor?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

function Label({ title, ...rest }: LabelProps) {
  return (
    <label className={styles.root} {...rest}>
      {title}
    </label>
  );
}

export default Label;
