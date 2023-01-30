import Button from "../button/button";
import TextArea from "../textarea/textarea";
import styles from "./registration-form.module.css";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  message?: string;
}

function RegistrationForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data: User = {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
        message: event.target.message.value,
      };
      const response = await fetch("api/newuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
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
        <label className={styles.input} htmlFor="message">
          <TextArea />
        </label>

        <Button callToAction="Submit" type="submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;
