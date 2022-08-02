import React from "react";
import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "../style-sheets/TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTask = [task, ...tasks];
      setTasks(updatedTask);
    }
  };

  const removeTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  const completeTask = (id) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTask);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="tasks-list-container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
