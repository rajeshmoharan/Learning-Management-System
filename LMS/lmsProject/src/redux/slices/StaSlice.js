import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../helper/axiosinstance"

const initialState = {
    allUserCount : 0,
    suscribedCount : 0
}

export const getStatsData = createAsyncThunk("stats/get", async() => {
    try {
        const response = await axiosInstance.get("/admin/stats/users");
        toast.promise(response,{
            loading  : "Getting the stats",
            success : (data) => {
                return data?.data?.message;
            },
            error : "Failed to load the stats"
        })

    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const statSlice = createSlice({
    name : 'state',
    initialState,
    reducers : {},
    extraReducers : () => {

    }
})

export default statSlice.reducer; 