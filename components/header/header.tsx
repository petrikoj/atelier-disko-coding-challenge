import styles from "./header.module.css";
import typography from "../../styles/typography.module.css";
import layout from "../../styles/layout.module.css";
import cx from "classix";

export type HeaderProps = {
  className?: string;
  pageName: string;
};

function Header({ className, pageName }: HeaderProps) {
  return (
    <header className={styles.root}>
      <h1 className={typography.title400}>
        <strong>Atelier Disko</strong> Coding Challenge
        <br />
        <br />
      </h1>
      <h2 className={typography.title400}>{pageName}</h2>
    </header>
  );
}

export default Header;
