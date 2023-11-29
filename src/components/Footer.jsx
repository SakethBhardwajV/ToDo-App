import React from "react";
import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <span className={styles["language"]}>English</span>
      <span className={styles["copyright"]}>
        &copy; 2023 ToDo App by Saketh
      </span>
    </div>
  );
};

export default Footer;
