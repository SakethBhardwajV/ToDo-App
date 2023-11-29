# ToDo Application

## Overview

This ToDo Application is built using React, providing users with the ability to add, edit, delete tasks, and mark tasks as completed. The application includes various components such as Task List, Add Task Form, and Edit Task Form, with a responsive design and local storage functionality for persistent data.

## Table of Contents

1. [Setup and Run](#setup-and-run)
2. [Project Structure](#project-structure)
3. [Design Choices](#design-choices)
4. [Additional Features](#additional-features)
5. [Screenshots](#screenshots)

## Setup and Run

To run the project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/SakethBhardwajV/ToDo-App.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd frontend
    ```

3.  **Install Dependencies:**

    ```bash
    npm install
    ```

4.  **Run the application:**

    ```bash
    npm start
    ```

    The application will be accessible at http://localhost:3000 in your web browser.

## Project Structure

The project is organized as follows:

- **src/components:** Contains React components such as TaskList, AddTaskForm, EditTaskForm, and ViewTaskModal.
- **src/styles** Includes CSS files for styling components.
- **src/slices:** Contains Redux slices for state management.
- **src/App.js:** Main entry point of the application.
- **src/index.js:** React DOM rendering.

## Design Choices

- **React Components:** Each major functionality is encapsulated within its own React component for better organization and maintainability..
- **React Router:** Used React Router for navigation, allowing users to move between the task list, add task, and edit task pages seamlessly
- **State Management:** Utilized React state within each component to manage their respective functionalities. Redux slices were used for global state management when necessary.
- **LocalStorage:** Tasks are saved in the browser's local storage to ensure data persistence even after a page refresh.
- **Styling:** Applied a responsive design using CSS, providing a visually appealing and user-friendly interface.

## Additional Features

### View Task

A View Task modal has been implemented, allowing users to view detailed information about a specific task. This modal is triggered by clicking on a task name in the Task List.

## Screenshots

![App Screenshot](https://i.imgur.com/Mz2L0z2.png)

_Task List - Displays tasks with status and options to mark as completed or delete._

![App Screenshot](https://i.imgur.com/n6x628B.gif)

_Add Task Form - Allows users to add new tasks with a name, description, priority, and due date._

![App Screenshot](https://i.imgur.com/ulfesJW.gif)

_Edit Task Form - Enables users to edit the task name, description, and priority._

![App Screenshot](https://i.imgur.com/wejTR2p.gif)

_Mark as Complete - Tasks can be marked as complete with a visual indication._

![App Screenshot](https://i.imgur.com/7kmh2SP.gif)

_Delete Task - Users can delete tasks, removing them from the list._

![App Screenshot](https://i.imgur.com/AZkRAl1.png)

_View Task - Detailed view of a specific task, including name, description, and priority._
