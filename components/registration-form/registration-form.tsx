import Button from "../button/button";
import TextArea from "../textarea/textarea";
import styles from "./registration-form.module.css";
import { useRouter } from "next/router";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  message?: string;
  title?: string;
}

function RegistrationForm() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data: User = {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
        title: event.target.title.value,
        message: event.target.message.value,
      };

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
          <TextArea />
        </label>

        <Button callToAction="Submit" type="submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;
