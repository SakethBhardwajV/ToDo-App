import { useParams } from "react-router-dom";
import styles from "../styles/EditTaskScreen.module.css";
import EditTaskComponent from "../components/EditTaskComponent";

const EditTaskScreen = () => {
  const { taskId } = useParams();

  return (
    <div className={styles["container"]}>
      <main className={styles["main"]}>
        <EditTaskComponent taskId={taskId} />
      </main>
    </div>
  );
};

export default EditTaskScreen;
