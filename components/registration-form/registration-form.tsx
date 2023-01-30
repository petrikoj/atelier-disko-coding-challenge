import Button from "../button/button";
import styles from "./registration-form.module.css";

function RegistrationForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
      email: event.target.email.value,
    };
    console.log(data);
  };
  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="first">
          First Name
        </label>
        <input
          className={styles.input}
          type="text"
          required
          name="firstname"
          id="first"
        />
        <label className={styles.label} htmlFor="last">
          Last Name
        </label>
        <input
          className={styles.input}
          type="text"
          required
          name="lastname"
          id="last"
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
        <Button callToAction="Submit" type="submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;
