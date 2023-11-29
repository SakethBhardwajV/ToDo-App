import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "../styles/components/TaskListComponent.module.css";
import { MdDelete } from "react-icons/md";
import { GrFormEdit } from "react-icons/gr";
import { deleteTask, markAsComplete } from "../slices/toDoSlice";
import ViewTaskModal from "./ViewTaskModal";

const TaskListComponent = ({ title, tasks }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("activePage"), 10) || 1;

  const [showModal, setShowModal] = useState(false);
  const [modalTask, setModalTask] = useState({});
  const [pagination, setPagination] = useState({
    totalPages: Math.ceil(tasks.length / 5),
    currentPage: page,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (id) => {
    try {
      dispatch(markAsComplete(id));
      console.log("Task marked as completed");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteHandler = (id) => {
    try {
      dispatch(deleteTask(id));

      console.log("Task deleted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const paginatedTasks = tasks.slice((page - 1) * 5, (page - 1) * 5 + 5);

  return (
    <>
      {showModal && (
        <ViewTaskModal task={modalTask} close={() => setShowModal(false)} />
      )}
      <div className={styles["task-list"]}>
        <p className={styles["task-title"]}>{title}</p>

        {tasks.length > 0 ? (
          <>
            {paginatedTasks.map((task) => (
              <div
                key={task.id}
                className={`${styles["task-item"]} ${
                  task.priority === "3" && styles["low"]
                } ${task.priority === "2" && styles["medium"]} ${
                  task.priority === "1" && styles["high"]
                }`}
              >
                <div className={styles["task-content"]}>
                  <input
                    type="checkbox"
                    className={styles["task-checkbox"]}
                    onChange={() => handleChange(task.id)}
                    checked={task.completed}
                  />
                  <p
                    className={`${styles["task-text"]} ${
                      task.completed && styles["strike"]
                    }`}
                    onClick={() => {
                      setShowModal(true);
                      setModalTask(task);
                    }}
                  >
                    {task.name}
                  </p>
                </div>
                <div className={styles["task-actions"]}>
                  <GrFormEdit
                    className={styles["task-edit"]}
                    onClick={() => navigate(`/edit/${task.id}`)}
                  />
                  <MdDelete
                    className={styles["task-delete"]}
                    onClick={() => deleteHandler(task.id)}
                  />
                </div>
              </div>
            ))}

            <div className={styles["pagination"]}>
              {pagination.currentPage > 1 && (
                <button
                  onClick={() => {
                    setPagination((prev) => ({
                      ...prev,
                      currentPage: pagination.currentPage - 1,
                    }));

                    setSearchParams({
                      activePage: pagination.currentPage - 1,
                    });
                  }}
                >
                  Prev
                </button>
              )}
              {pagination.currentPage < pagination.totalPages && (
                <button
                  onClick={() => {
                    setPagination((prev) => ({
                      ...prev,
                      currentPage: pagination.currentPage + 1,
                    }));

                    setSearchParams({
                      activePage: pagination.currentPage + 1,
                    });
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <p className={styles["no-tasks"]}>
            {title === "Tasks" ? "Add a task" : "Finish Tasks!!"}
          </p>
        )}
      </div>
    </>
  );
};

export default TaskListComponent;
