import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const isChecked = (selectedTemporal, color) => {
    return selectedTemporal.some((c) => c.id === color.id)
}

export const getRandom = (selectedColors) => Math.floor(Math.random() * selectedColors.length);

export const getDb = createAsyncThunk(
    'get-data',
    async () => {
        return axios.get("http://localhost:3000/usuarios")
    })

export const postColors = createAsyncThunk(
    'post-colors',
    async () => {
        return axios.post("http://localhost:3000/colors")
    }
)



export const typeOfData = (color) => typeof color === "string" ? color : color.color