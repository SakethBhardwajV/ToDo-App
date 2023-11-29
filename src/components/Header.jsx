import { Link } from "react-router-dom";
import styles from "../styles/components/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles["navbar"]}>
        <Link to="/" className={styles["logo"]}>
          Todo App
        </Link>
        <div className={styles["page-links"]}>
          <Link to="/" className={styles["page-item"]} href="/">
            Home
          </Link>
          <Link to="/add" className={styles["page-item"]}>
            Add Task
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
