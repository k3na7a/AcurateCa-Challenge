import { 
    // createAsyncThunk, 
    createSlice 
} from "@reduxjs/toolkit"

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        STS: `OK`
    },
    reducers: {
        // State Actions Here
    },
    extraReducers: (builder) => {
        // Add Async Actions Here
    }
})
export const {
    // State Actions Here
} = appSlice.actions;
export default appSlice.reducer;