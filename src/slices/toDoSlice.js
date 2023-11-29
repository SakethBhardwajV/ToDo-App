import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("tasks")
  ? { taskItems: JSON.parse(localStorage.getItem("tasks")) }
  : { taskItems: [] };

const toDoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskItems = [...state.taskItems, action.payload];
      localStorage.setItem("tasks", JSON.stringify(state.taskItems));
    },
    deleteTask: (state, action) => {
      state.taskItems = state.taskItems.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(state.taskItems));
    },
    editTask: (state, action) => {
      state.taskItems = state.taskItems.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(state.taskItems));
    },
    markAsComplete: (state, action) => {
      state.taskItems = state.taskItems.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(state.taskItems));
    },
  },
});

export const { addTask, deleteTask, editTask, markAsComplete } =
  toDoSlice.actions;

export default toDoSlice.reducer;
