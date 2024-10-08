import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const maxId = state.tasks.length > 0 ? Math.max(...state.tasks.map(task => task.id)) : 0; // Get the maximum current ID
            state.tasks.push({
                id: maxId + 1,
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
