import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/TasksSlice';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return; // Validation: Task title shouldn't be empty
    dispatch(addTask(title));
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





// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../redux/TasksSlice';
// import { useNavigate } from 'react-router-dom';

// const AddTask = () => {
//   const [title, setTitle] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title.trim() === '') return; // Validation: Task title shouldn't be empty
//     dispatch(addTask(title));
//     navigate('/');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Add New Task</h1>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Enter task title"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default AddTask;
