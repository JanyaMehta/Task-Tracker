import React, { useState } from "react";
import axios from 'axios';
import './CreateTask.css'

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [team, setTeam] = useState('');
  const [priority, setPriority] = useState('P0'); // Set initial priority to 'P0'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/tasks', {
        title,
        description,
        assignee,
        team,
        priority,
        status: 'Pending',
      });
      console.log('Task created:', response.data);
      // Handle successful submission (e.g., display success message, reset form)
    } catch (error) {
      console.error('Error creating task:', error);
      // Handle error (e.g., display error message)
    }
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setAssignee('');
    setTeam('');
    setPriority('P0'); // Reset priority to 'P0'
  };

  return ( 
    <div>
      <h2>Create A Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Assignee:</label>
        <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} />

        <label>Team:</label>
        <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} />

        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
        
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}
 
export default CreateTask;
