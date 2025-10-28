import { configureStore } from "@reduxjs/toolkit";
import folderReducer from './DataSlice'

export const store = configureStore({
    reducer: {
        folders: folderReducer
    }
})