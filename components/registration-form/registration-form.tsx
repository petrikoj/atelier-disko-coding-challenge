import Button from "../button/button";
import TextArea from "../textarea/textarea";
import styles from "./registration-form.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TextAreaInputCounter } from "../textarea/textarea_counter";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  message?: string;
  title?: string;
}

function RegistrationForm() {
  const router = useRouter();
  const [messageText, setMessageText] = React.useState<string>("");
  const handleMessageHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessageText(event.target.value);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
      const response = await fetch("api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      if (response.status === 201) {
        router.push("/success");
      }
    } catch (error) {
      console.log(error);
      router.push("/error");
    }
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="firstname">
          First Name
        </label>
        <input
          className={styles.input}
          type="text"
          required
          name="firstname"
          id="firstname"
          //pattern=""
        />
        <label className={styles.label} htmlFor="lastname">
          Last Name
        </label>
        <input
          className={styles.input}
          type="text"
          required
          name="lastname"
          id="lastname"
          //pattern:""
        />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          required
          name="email"
          id="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label className={styles.label} htmlFor="title">
          Title?
        </label>
        <select className={styles.select} name="title" id="title">
          <option value="">--</option>
          <option value="Dr.">Dr.</option>
          <option value="Prof.">Prof.</option>
          <option value="Prof. Dr.">Prof Dr.</option>
        </select>
        <label className={styles.input} htmlFor="message">
          <TextArea
            onChange={handleMessageHandler}
            value={messageText}
            maxLength={100}
            name="message"
            id="message"
            placeholder="Anything else we should know?"
          />
          <TextAreaInputCounter
            currentValue={messageText.length}
            thresholdValue={80}
            maxValue={100}
          />
        </label>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default RegistrationForm;
