import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/TasksSlice';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(''); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (trimmedTitle === '') {
      setError('Task title cannot be empty'); 
      return; 
    }
    dispatch(addTask(trimmedTitle)); 
    setTitle('');
    setError(''); 
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add New Task</h1>
      <form onSubmit={handleSubmit} className="border rounded p-4 shadow">
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            id="taskTitle"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
          />
          {error && <div className="text-danger mt-2">{error}</div>} {/* Display error message */}
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
