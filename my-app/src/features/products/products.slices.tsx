import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./types";
import { getDummyProducts } from "./products.api";
import { IRate } from "./types";

const initialState: IState = {
    items: []
}

export const getAll = createAsyncThunk("products/get", async () => {
    return await getDummyProducts()
})

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setRate: (state, action: PayloadAction<IRate>) => {
            let product = state.items.find(prod => prod.id === action.payload.id)
            if (product) {
                product.rate = action.payload.rate
            }

        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.items = action.payload
            })
    }
})

export const reducer = ProductSlice.reducer
export const {setRate}=ProductSlice.actions