import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../styles/components/AddTaskComponent.module.css";
import { addTask } from "../slices/toDoSlice.js";

const AddTaskComponent = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("3");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(
        addTask({
          id: crypto.randomUUID(),
          name: taskName,
          description: taskDescription,
          priority: taskPriority,
          date: selectedDate,
          completed: false,
        })
      );
      setTaskName("");
      setTaskDescription("");
      setTaskPriority("");
      navigate("/");
      console.log("Task added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["add-task-modal"]}>
      <p className={styles["add-task-title"]}>New Task</p>
      <form className={styles["add-task-form"]} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Task Name"
          required
          autoFocus
          className={styles["add-task-input"]}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          className={styles["add-task-textarea"]}
          value={taskDescription}
          rows="4"
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>
        <select
          className={styles["add-task-select"]}
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="1" className={styles["add-task-option"]}>
            High
          </option>
          <option value="2" className={styles["add-task-option"]}>
            Medium
          </option>
          <option value="3" className={styles["add-task-option"]}>
            Low
          </option>
        </select>
        <label className={styles["add-task-label"]}>
          Select Due Date:
          <input
            className={styles["add-task-date"]}
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </label>
        <button type="submit" className={styles["add-task-button"]}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskComponent;
