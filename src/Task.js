import React from 'react';
import './index.css';

const Task = ({ task }) => {
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
          <p className="assignee">Assignee: {task.assignee}</p>
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
