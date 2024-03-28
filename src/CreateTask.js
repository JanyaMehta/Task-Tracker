import React, { useState } from "react";
import axios from 'axios';
import './CreateTask.css';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [team, setTeam] = useState('');
  const [priority, setPriority] = useState('P0');
  const [status, setStatus] = useState('Pending'); // State for status option
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/tasks', {
        title,
        description,
        assignee,
        team,
        priority,
        status, // Include status in the request payload
      });
      console.log('Task created:', response.data);
      
      window.location.reload(); // Reload the page to fetch the updated task list
      setFormSubmitted(true);
      // Reset form fields after successful submission
      handleReset();
      // Set formSubmitted to true to hide the form
      
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleReset = () => {
    // Clear form fields
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
          <h2 className="form-title">Create A Task</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label">Title:</label>
            <input className="form-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label className="form-label">Description:</label>
            <input className="form-input" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

            <label className="form-label">Assignee:</label>
            <input className="form-input" type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} />

            <label className="form-label">Team:</label>
            <input className="form-input" type="text" value={team} onChange={(e) => setTeam(e.target.value)} />

            <label className="form-label">Priority:</label>
            <select className="form-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </select>

            {/* Status select */}
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
