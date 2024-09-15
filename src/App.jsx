import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { AppContainer, Column, InputContainer, TaskListsContainer } from "./styled";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const moveToInProgress = (index) => {
    const taskToMove = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setInProgressTasks([...inProgressTasks, taskToMove]);
  };

  const moveToComplete = (index) => {
    const taskToMove = inProgressTasks[index];
    setInProgressTasks(inProgressTasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, taskToMove]);
  };

  const deleteTask = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  return (
    <AppContainer>
      <h1>To-Do List</h1>
      <InputContainer>
        <input
          type="text"
          value={newTask}
          ref={inputRef}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </InputContainer>
      <TaskListsContainer>
        <Column>
          <h2>To Do</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button className="move" onClick={() => moveToInProgress(index)}>
                  In Progress
                </button>
              </li>
            ))}
          </ul>
        </Column>
        <Column>
          <h2>In Progress</h2>
          <ul>
            {inProgressTasks.map((task, index) => (
              <li key={index}>
                {task}
                <button className="move" onClick={() => moveToComplete(index)}>
                  Done
                </button>
              </li>
            ))}
          </ul>
        </Column>
        <Column>
          <h2>Done</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                {task}
                <button className="delete" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </Column>
      </TaskListsContainer>
    </AppContainer>
  );
}

export default App;
