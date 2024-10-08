import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editTask } from '../redux/TasksSlice';

const EditTask = () => {
  const { id } = useParams();
  const tasks = useSelector(state => state.tasks.tasks);
  const task = tasks.find(task => task.id === Number(id));
  const [title, setTitle] = useState(task?.title || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return; 
    dispatch(editTask({ id: Number(id), title }));
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Task</h2>
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
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;