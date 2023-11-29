// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/HomeScreen.module.css";
import TaskListComponent from "../components/TaskListComponent";

const HomeScreen = () => {
  const tasks = useSelector((state) => state.tasks.taskItems);

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const filteredActiveTasks = activeTasks.toSorted(
    (a, b) => Number(a.priority) - Number(b.priority)
  );
  return (
    <div className={styles["container"]}>
      <main className={styles["main"]}>
        <div className={styles["list"]}>
          <TaskListComponent title="Tasks" tasks={filteredActiveTasks} />
        </div>
        <div className={styles["finished"]}>
          <TaskListComponent title="Finished" tasks={completedTasks} />
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
