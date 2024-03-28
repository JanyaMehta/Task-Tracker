import React, { useState } from 'react';
import './index.css';
import CreateTask from './CreateTask';
import TaskFetch from './TaskFetch'; // Import TaskFetch component

const Home = ({ tasks }) => { // Pass tasks data as props
  const [showCreateTask, setShowCreateTask] = useState(false);

  const handleAddTaskClick = () => {
    setShowCreateTask(true);
  };

  const handleCloseModal = () => {
    setShowCreateTask(false);
  };

  return (
    <div className="home">
      <h1>Task Board</h1>
      <div className="add-task-button">
        <button className="add-task-button" onClick={handleAddTaskClick}>
          Add New Task
        </button>
      </div>
      {showCreateTask && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={handleCloseModal}>
              &times;
            </button>
            <CreateTask />
          </div>
        </div>
      )}
      <div className="task-filters">
        <p>Filter By:</p>
        <input type="text" placeholder="Assignee" />
        <select>
          <option value="">Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
        <input type="date" placeholder="Filter by Start Date" />
        <input type="date" placeholder="Filter by End Date" />
      </div>
      <div className="sort-filters">
        <p>Sort By:</p>
        <select>
          <option value="">Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
      </div>
      <div className="task-columns">
        <div className="column">
          <div className="column-heading" style={{ backgroundColor: '#8C8B90' }}>
            <h3>Pending</h3>
          </div>
          {/* Display tasks with status "Pending" */}
          <TaskFetch tasks={tasks} status="Pending" />
        </div>
        <div className="column">
          <div className="column-heading" style={{ backgroundColor: '#E99921' }}>
            <h3>In Progress</h3>
          </div>
          {/* Display tasks with status "In Progress" */}
          <TaskFetch tasks={tasks} status="In Progress" />
        </div>
        <div className="column">
          <div className="column-heading" style={{ backgroundColor: '#42A81F' }}>
            <h3>Completed</h3>
          </div>
          {/* Display tasks with status "Completed" */}
          <TaskFetch tasks={tasks} status="Completed" />
        </div>
        <div className="column">
          <div className="column-heading" style={{ backgroundColor: '#353976' }}>
            <h3>Deployed</h3>
          </div>
          {/* Display tasks with status "Deployed" */}
          <TaskFetch tasks={tasks} status="Deployed" />
        </div>
        <div className="column">
          <div className="column-heading" style={{ backgroundColor: '#F8876F' }}>
            <h3>Deferred</h3>
          </div>
          {/* Display tasks with status "Deferred" */}
          <TaskFetch tasks={tasks} status="Deferred" />
        </div>
      </div>
    </div>
  );
};

export default Home;
