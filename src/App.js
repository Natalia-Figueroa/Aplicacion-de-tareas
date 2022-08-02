import "./App.css";
import imagentareas from "./images/imagentareas.png";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="mi-app">
      <div className="logo-container">
        <img src={imagentareas} className="imagentareas-logo" />
      </div>
      <div className="tasks-list">
        <h1>Mis tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
