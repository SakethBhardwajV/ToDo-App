import React from "react";
import styles from "../styles/AddTaskScreen.module.css";
import AddTaskComponent from "../components/AddTaskComponent";

const AddTaskScreen = () => {
  return (
    <div className={styles["container"]}>
      <main className={styles["main"]}>
        <AddTaskComponent />
      </main>
    </div>
  );
};

export default AddTaskScreen;
