import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: "wishis",
  initialState: {
    value: JSON.parse(localStorage.getItem('wishlist')) ||[]
  },
  reducers: {
    toggleEvent(state, action){
      let inx = state.value?.findIndex(el => el.id === action.payload.id)
      if(inx < 0){
        state.value =[...state.value,action.payload]
      }
      else{
        state.value = state.value?.filter(el => el.id !== action.payload.id)
      }
      localStorage.setItem('wishlist',JSON.stringify(state.value))
    
    },
  }

})

export const { toggleEvent } = counterSlice.actions
export default counterSlice.reducer