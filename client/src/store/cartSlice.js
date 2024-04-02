import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from  'axios'



const initialState = {
    data: JSON.parse(localStorage.getItem('cartItems')) || [],
    quantity: JSON.parse(localStorage.getItem('cartQuantity')) || 0,
    total: JSON.parse(localStorage.getItem('cartTotal')) || 0

    
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            // Check if the item is already in the cart
            const existingItem = state.data.find(item => {
                console.log(item.mealId, action.payload.mealId)
               return item.mealId === action.payload.mealId});
            

            if (existingItem) {
                // If item already exists in cart, increase its quantity
                existingItem.quantity += action.payload.quantity;
            } else {
                // If item is not in cart, add it to the cart
                state.data.push(action.payload);

            }

            // Update total quantity and total price
            state.quantity = state.data.reduce((quantity) => quantity += 1, 0);

            state.total = state.data.reduce((total, item) => total + item.price * item.quantity, 0);

            // Store updated cart state in local storage
           
            localStorage.setItem('cartItems', JSON.stringify(state.data));
            localStorage.setItem('cartQuantity', JSON.stringify(state.quantity));
            localStorage.setItem('cartTotal', JSON.stringify(state.total));
        },
        removeItemFromCart: (state, action) => {
            const indexToRemove = state.data.findIndex(item => item.mealId === action.payload.mealId);
            
            if (indexToRemove !== -1) {
                state.quantity -= 1;
                state.total -= state.data[indexToRemove].price * state.data[indexToRemove].quantity;
                state.data.splice(indexToRemove, 1); // Remove item from array
            }

            // Store updated cart state in local storage
            localStorage.setItem('cartItems', JSON.stringify(state.data));
            localStorage.setItem('cartQuantity', JSON.stringify(state.quantity));
            localStorage.setItem('cartTotal', JSON.stringify(state.total));
        }
    }
});

export const {addItemToCart, removeItemFromCart} = cartSlice.actions
export default cartSlice.reducer

