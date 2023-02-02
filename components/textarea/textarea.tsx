import React from "react";
import styles from "./textarea.module.css";

function TextArea({
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={styles.root} {...rest} />;
}
export default TextArea;
