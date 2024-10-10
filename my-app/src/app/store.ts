import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "../features/products/products.slices"
import type{ IState } from "../features/products/types"


export const store = configureStore({
  reducer
})



export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  IState,
  unknown,
  Action
  >
