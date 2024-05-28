import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	value: JSON.parse(localStorage.getItem("cart")) || []
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			let index = state.value.findIndex(i => i?.id === action?.payload?.id);
			if (index < 0) {
				state.value = [...state.value, { ...action.payload, quantity: 1 }];
			}
			toast.success("Ma'lumot qushildi")
			localStorage.setItem("cart", JSON.stringify(state.value));
		},
        incremented(state,action) {
			let index = state.value?.findIndex(i => i.id === action.payload.id);
			state.value = state.value?.map((item, inx) =>{
				if(index === inx){
					return {...item, quantity: item.quantity + 1 }
				}
				else{
					return item;
				}
			}
		);
		localStorage.setItem("cart", JSON.stringify(state.value));
		},
		decrementCart: (state, action) => {
			let index = state.value?.findIndex(i => i.id === action.payload.id);
			state.value = state.value?.map((item, inx) =>{
				if(index === inx){
					return {...item, quantity: item.quantity - 1 }
				}
				else{
					return item;
				}
			}
		);
		localStorage.setItem("cart", JSON.stringify(state.value));
		},
		removeFromCart: (state, action) => {
			state.value = state.value.filter(el => el.id !== action.payload.id)
			localStorage.setItem("cart", JSON.stringify(state.value));
		
		},

		deleteAllCart:(state)=>{
		state.value = [];
			
		}
	}
});

export const { addToCart, 
	           removeFromCart, 
			   decrementCart, 
			   incremented,
			   deleteAllCart
			 } = cartSlice.actions;
export default cartSlice.reducer;