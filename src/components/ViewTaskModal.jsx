import styles from "../styles/components/ViewTaskModal.module.css";
const ViewTaskModal = ({ task, close }) => {
  return (
    <div className={styles["view-task-modal-container"]}>
      <div
        className={`${styles["view-task-modal"]} ${
          task.priority === "3" && styles["low"]
        } ${task.priority === "2" && styles["medium"]} ${
          task.priority === "1" && styles["high"]
        }`}
      >
        <p className={styles["view-task-title"]}>To Do</p>
        <div className={styles["view-task-content"]}>
          <p className={styles["view-task-name"]}>{task.name}</p>
          {task.description && (
            <p className={styles["view-task-description"]}>
              {task.description}
            </p>
          )}
          <div className={styles["view-task-details"]}>
            <label className={styles["view-task-label"]}>
              Priority:
              <p className={styles["view-task-priority"]}>
                {task.priority === "3"
                  ? "Low"
                  : task.priority === "2"
                  ? "Medium"
                  : "High"}
              </p>
            </label>
            <label className={styles["view-task-label"]}>
              Due by:
              <p className={styles["view-task-date"]}>{task.date}</p>
            </label>
          </div>
        </div>
        <button className={styles["view-task-close"]} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewTaskModal;
