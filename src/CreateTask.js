import React, { useState, useEffect } from "react";
import axios from 'axios';
import './CreateTask.css';

const CreateTask = ({ taskDetails, isEditing, setIsEditing }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [team, setTeam] = useState('');
  const [priority, setPriority] = useState('P0');
  const [status, setStatus] = useState('Pending');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (isEditing && taskDetails) {
      // Set initial values from taskDetails if in editing mode
      setTitle(taskDetails.title);
      setDescription(taskDetails.description);
      setAssignee(taskDetails.assignee);
      setTeam(taskDetails.team);
      setPriority(taskDetails.priority);
      setStatus(taskDetails.status);
    }
  }, [isEditing, taskDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/tasks', {
        title,
        description,
        assignee,
        team,
        priority,
        status,
      });
      console.log('Task created:', response.data);
      window.location.reload();
      setFormSubmitted(true);
      handleReset();
      setIsEditing(false);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setAssignee('');
    setTeam('');
    setPriority('P0');
    setStatus('Pending');
  };

  return (
    <div>
      {!formSubmitted && (
        <div className="form-container">
          <h2 className="form-title">{isEditing ? 'Edit Task' : 'Create Task'}</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label">Title:</label>
            <input className="form-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required disabled={isEditing} />

            <label className="form-label">Description:</label>
            <input className="form-input" type="text" value={description} onChange={(e) => setDescription(e.target.value)} required disabled={isEditing} />

            <label className="form-label">Assignee:</label>
            <input className="form-input" type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} required disabled={isEditing} />

            <label className="form-label">Team:</label>
            <input className="form-input" type="text" value={team} onChange={(e) => setTeam(e.target.value)} required disabled={isEditing} />

            <label className="form-label">Priority:</label>
            <select className="form-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </select>

            <label className="form-label">Status:</label>
            <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Deployed">Deployed</option>
              <option value="Deferred">Deferred</option>
            </select>
            
            <button className="form-button" type="submit">Submit</button>
            <button className="form-button form-button-reset" type="button" onClick={handleReset}>Reset</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateTask;
