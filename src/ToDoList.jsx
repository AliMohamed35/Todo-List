import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState(["delete this"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };
  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <>
      <main>
        <div className="app-container">
          <div className="to-do-list">
            <h2>Todo List</h2>

            <div>
              <input
                type="text"
                placeholder="Enter a task.."
                value={newTask} // So we go and adjust the newTask function that will update this one
                onChange={handleInputChange}
              />
              <button className="add-button" onClick={addTask}>
                Add
              </button>
            </div>

            <ol>
              {tasks.map((task, index) => (
                <li key={index}>
                  <span className="text">{task}</span>
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                  {/*{delete} */}
                  <button
                    className="move-button"
                    onClick={() => moveTaskUp(index)}
                  >
                    👆
                  </button>
                  {/*{up} */}
                  <button
                    className="move-button"
                    onClick={() => moveTaskDown(index)}
                  >
                    👇
                  </button>
                  {/*{down} */}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </>
  );
}
