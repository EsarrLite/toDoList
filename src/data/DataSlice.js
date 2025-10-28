import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const folderSlice = createSlice({
    name: "folders",
    initialState: [],
    reducers: {
        addFolder: (state, action) => {state.push(action.payload)},

        removeFolder: (state, action) => {return state.filter(folder => folder.id !== action.payload)},

        addTasks: (state, action) => {
            const { folderId, task } = action.payload
            const folder = state.find(f => f.id === folderId)
            if (folder) {
                folder.tasks.push(task) 
            }
        },

        removeTasks: (state, action) => {
            const { folderId, taskId } = action.payload
            const folder = state.find(f => f.id === folderId)

            if (folder) {
                folder.tasks = folder.tasks.filter(task => task.taskId !== taskId)
                console.log('deleted')
            }
        },

        handleChecked: (state, action) => {
            const {folderId, taskId} = action.payload
            const folder = state.find(f => f.id === folderId)
            const tasks = folder.tasks
            const task = tasks.find(t => t.taskId === taskId)

            const name = task.taskName

            task.completed = true
            console.log(name ,task.completed)
        },

        handleUnchecked: (state, action) => {

            const {folderId, taskId} = action.payload
            const folder = state.find(f => f.id === folderId)

            const tasks = folder.tasks
            const task = tasks.find(t => t.taskId === taskId)

            const name = task.taskName

            task.completed = false
            console.log(name ,task.completed)
        }
    }
})

export const {addFolder, removeFolder, addTasks, removeTasks, handleChecked, handleUnchecked}  = folderSlice.actions
export default folderSlice.reducer