import React from "react";
import styles from "./textarea.module.css";

export type TextAreaProps = {
  id: string;
  name: string;
  value?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextArea({ value, id, name, ...rest }: TextAreaProps) {
  return <textarea className={styles.root} {...rest} value={value} />;
}
export default TextArea;
