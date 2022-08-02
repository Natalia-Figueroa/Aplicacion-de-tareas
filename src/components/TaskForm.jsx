import React, { useState } from "react";
import "../style-sheets/TaskForm.css";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: "",
      text: input,
      completed: false,
    };

    props.onSubmit(newTask);

    return (
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          placeholder="Escribe una tarea"
          name="text"
          onChange={handleChange}
        />
        <button className="task-button">Agregar tarea</button>
      </form>
    );
  };
}

export default TaskForm;
