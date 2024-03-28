import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';

const TaskFetch = ({ status }) => {
  const [tasks, setTasks] = useState([]);

  // Function to fetch tasks based on status
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/tasks?status=${status}`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [status]); // Run effect when status changes

  // Function to refetch tasks after creating a new task
  const handleTaskCreated = async () => {
    try {
      // Fetch tasks again to update the UI with the most recent data
      await fetchTasks();
    } catch (error) {
      console.error('Error refetching tasks after task creation:', error);
    }
  };

  // Filter tasks based on the status prop
  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskFetch;
