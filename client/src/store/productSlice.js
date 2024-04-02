import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios  from 'axios'
import StatusCode from 'src/utilities/StatusCode'
const initialState = {
    data: [],
    status: StatusCode.IDLE
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = StatusCode.LOADING

        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = StatusCode.IDLE

        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = StatusCode.ERROR

        })
    }
})

export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const response = await axios.get('http://localhost:8000/api/meal/meals')
    const result = response.data
    return result;
})