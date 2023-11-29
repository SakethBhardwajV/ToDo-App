import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../styles/components/EditTaskComponent.module.css";
import { editTask } from "../slices/toDoSlice";

const EditTaskComponent = ({ taskId }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tasks = useSelector((state) => state.tasks.taskItems);

  const task = tasks.find((task) => task.id === taskId);

  useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setTaskDescription(task.description);
      setTaskPriority(task.priority);
      setSelectedDate(task.date);
    }
  }, [task]);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(
        editTask({
          id: taskId,
          name: taskName,
          description: taskDescription,
          priority: taskPriority,
          date: selectedDate,
          completed: false,
        })
      );
      navigate("/");
      console.log("Task edited successfully");
    } catch (error) {}
  };

  return (
    <div className={styles["edit-task-modal"]}>
      <p className={styles["edit-task-title"]}>Edit Task</p>
      <form className={styles["edit-task-form"]} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Task Name"
          required
          autoFocus
          className={styles["edit-task-input"]}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          className={styles["edit-task-textarea"]}
          value={taskDescription}
          rows="4"
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>
        <select
          className={styles["edit-task-select"]}
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="1" default className={styles["edit-task-option"]}>
            High
          </option>
          <option value="2" className={styles["edit-task-option"]}>
            Medium
          </option>
          <option value="3" className={styles["edit-task-option"]}>
            Low
          </option>
        </select>
        <label className={styles["edit-task-label"]}>
          Select Due Date:
          <input
            className={styles["edit-task-date"]}
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </label>
        <button type="submit" className={styles["edit-task-button"]}>
          Edit Task
        </button>
      </form>
    </div>
  );
};

export default EditTaskComponent;
