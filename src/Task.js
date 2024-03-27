import React, { useState } from 'react';
import './Task.css';

const Task = ({ task }) => {
  const [showOptions, setShowOptions] = useState(false); // State for dropdown visibility

  const toggleOptions = () => {
    setShowOptions(!showOptions); // Toggle visibility on click
  };

  return (
    <div className="task-card">
      {/* Task information */}
      <div className="task-info">
        <div className="task-header">
          <h3 className="task-title">{task.title}</h3>
          <div className="priority">{task.priority}</div>
        </div>
        <div className="line-separator"></div>
        <p className="task-description">{task.description}</p>
        <div className="assignee-options">
          <p className="assignee">
            Assignee: {task.assignee}
          </p>
          {/* Button with three dots */}
          <div className="more-actions-button" onClick={toggleOptions}>
            <span className="hamburger-icon">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </span>
            {showOptions && ( // Render menu only if visible
              <div className="dropdown-menu">
                <p onClick={() => console.log('Edit Task')}>Edit</p>
                <p onClick={() => console.log('Delete Task')}>Delete</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Task status */}
      <div className="status">
        {task.status}
      </div>
    </div>
  );
};

export default Task;
