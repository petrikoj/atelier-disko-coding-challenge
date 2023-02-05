import Button from "../button/button";
import TextArea from "../textarea/textarea";
import styles from "./registration-form.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TextAreaInputCounter } from "../textarea/textarea_counter";
import Input from "../input/input";
import Label from "../label/label";

export interface User {
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
      if (response.status === 409) {
        result.message;
      }
      if (response.status === 403) alert(result.message);
      if (response.status === 405) alert(result.message);
    } catch (error) {
      console.log(error);
      router.push("/error");
    }
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="firstname" title="First Name" />
        <Input
          required
          type="text"
          name="firstname"
          id="firstname"
          pattern="^[a-zA-Z-' ]+$"
          minLength={1}
          maxLength={36}
        />
        <Label htmlFor="lastname" title="Last Name" />
        <Input
          required
          type="text"
          name="lastname"
          id="lastname"
          pattern="^[a-zA-Z-' ]+$"
          minLength={1}
          maxLength={36}
        />
        <Label htmlFor="email" title="Email" />
        <Input
          type="email"
          required
          name="email"
          id="email"
          //pattern="\A[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\z"
          maxLength={36}
        />
        <Label htmlFor="title" title="Title?" />
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
