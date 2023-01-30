import { type } from "os";
import styles from "./textarea.module.css";
import { useState } from "react";

type TextAreaInput = {
  input: string;
};

function TextArea({ input }: TextAreaInput) {
  const [messageText, setMessageText] = useState("");
  const handleMessageHandler = (event) => {
    setMessageText(event.target.value);
  };

  return (
    <div>
      <textarea
        className={styles.root}
        name="message"
        id="message"
        placeholder="Anything else we should know?"
        maxLength="100"
        onChange={handleMessageHandler}
      >
        {input}
      </textarea>
      <div
        className={
          messageText.length < 80 ? styles.counter : styles.counterWarning
        }
        id="counter"
      >
        {100 - messageText.length} characters left
      </div>
    </div>
  );
}
export default TextArea;
