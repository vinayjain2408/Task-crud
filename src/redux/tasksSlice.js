import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newId = state.tasks.length + 1; 
            state.tasks.push({
                id: newId,
                title: action.payload,
                completed: false,
            });
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            state.tasks.forEach((task, index) => {
                task.id = index + 1; 
              });
        },
        toggleTaskStatus: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        editTask: (state, action) => {
            const { id, title } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.title = title;
            }
        },
    },
});

export const { addTask, deleteTask, toggleTaskStatus, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
