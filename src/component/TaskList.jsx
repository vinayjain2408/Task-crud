
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskStatus } from '../redux/TasksSlice';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("tasks" ,tasks)
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Task List</h1>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-primary" onClick={() => navigate('/add-task')}>
          Add Task
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className="text-center">No tasks available. Please add a task.</p>
      ) : (
        <div className="d-flex justify-content-center">
          <table className="table table-bordered table-striped w-75">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                  </td>
                  <td>
                    <span className={task.completed ? 'text-success' : 'text-warning'}>
                      {task.completed ? 'Completed' : 'Incomplete'}
                    </span>
                  </td>
                  <td>
                    <button
                      className={`btn btn-${task.completed ? 'warning' : 'success'} btn-sm me-2`}
                      onClick={() => dispatch(toggleTaskStatus(task.id))}
                    >
                      {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
                    </button>
                    <button
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => navigate(`/edit-task/${task.id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => dispatch(deleteTask(task.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TaskList;






// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTask, toggleTaskStatus } from '../redux/TasksSlice';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TaskList = () => {
//   const tasks = useSelector(state => state.tasks.tasks);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Task List</h1>
//       <div className="d-flex justify-content-center mb-3">
//         <button className="btn btn-primary" onClick={() => navigate('/add-task')}>
//           Add Task
//         </button>
//       </div>
//       {tasks.length === 0 ? (
//         <p className="text-center">No tasks available. Please add a task.</p>
//       ) : (
//         <table className="table table-bordered table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th>Title</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map(task => (
//               <tr key={task.id}>
//                 <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//                   {task.title}
//                 </td>
//                 <td>
//                   <span className={task.completed ? 'text-success' : 'text-warning'}>
//                     {task.completed ? 'Completed' : 'Incomplete'}
//                   </span>
//                 </td>
//                 <td>
//                   <button
//                     className={`btn btn-${task.completed ? 'warning' : 'success'} btn-sm me-2`}
//                     onClick={() => dispatch(toggleTaskStatus(task.id))}
//                   >
//                     {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
//                   </button>
//                   <button
//                     className="btn btn-secondary btn-sm me-2"
//                     onClick={() => navigate(`/edit-task/${task.id}`)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => dispatch(deleteTask(task.id))}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default TaskList;



// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { deleteTask, toggleTaskStatus } from '../redux/TasksSlice';
// // import { useNavigate } from 'react-router-dom';

// // const TaskList = () => {
// //   const tasks = useSelector(state => state.tasks.tasks);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   return (
// //     <div className="container mt-5">
// //       <h1 className="text-center mb-4">Task List</h1>
// //       <div className="d-flex justify-content-center mb-3">
// //         <button className="btn btn-primary" onClick={() => navigate('/add-task')}>
// //           Add Task
// //         </button>
// //       </div>
// //       {tasks.length === 0 ? (
// //         <p className="text-center">No tasks available. Please add a task.</p>
// //       ) : (
// //         <ul className="list-group">
// //           {tasks.map(task => (
// //             <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
// //               <div>
// //                 <span
// //                   style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
// //                   className={task.completed ? 'text-muted' : ''}
// //                 >
// //                   {task.title}
// //                 </span>
// //               </div>
// //               <div>
// //                 <button
// //                   className={`btn btn-${task.completed ? 'warning' : 'success'} btn-sm me-2`}
// //                   onClick={() => dispatch(toggleTaskStatus(task.id))}
// //                 >
// //                   {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
// //                 </button>
// //                 <button
// //                   className="btn btn-secondary btn-sm me-2"
// //                   onClick={() => navigate(`/edit-task/${task.id}`)}
// //                 >
// //                   Edit
// //                 </button>
// //                 <button
// //                   className="btn btn-danger btn-sm"
// //                   onClick={() => dispatch(deleteTask(task.id))}
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default TaskList;










// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { deleteTask, toggleTaskStatus } from '../redux/TasksSlice';
// // import { useNavigate } from 'react-router-dom';

// // const TaskList = () => {
// //   const tasks = useSelector(state => state.tasks.tasks);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   return (
// //     <div>
// //       <h1>Task List</h1>
// //       <button onClick={() => navigate('/add-task')}>Add Task</button>
// //       <ul>
// //         {tasks.map(task => (
// //           <li key={task.id}>
// //             <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
// //               {task.title}
// //             </span>
// //             <button onClick={() => dispatch(toggleTaskStatus(task.id))}>
// //               {task.completed ? 'Incomplete' : 'Completed'}
// //             </button>
// //             <button onClick={() => navigate(`/edit-task/${task.id}`)}>Edit</button>
// //             <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default TaskList;
