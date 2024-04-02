import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'




const initialState = {
    data: JSON.parse(localStorage.getItem('cartItems')) || [],
    quantity: JSON.parse(localStorage.getItem('cartQuantity')) || 0,
    total: JSON.parse(localStorage.getItem('cartTotal')) || 0,
    orders: JSON.parse(localStorage.getItem('orders')) || [],
    ordersQuantity: JSON.parse(localStorage.getItem('ordersQuantity')) || 0,


    
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            // Check if the item is already in the cart
            const existingItem = state.data.find(item => {
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
        },
        moveToOrders: (state) => {
            state.orders = state.orders.concat(state.data)
            console.log(state.orders)
            state.ordersQuantity += state.quantity
            localStorage.removeItem('orders')
            localStorage.setItem('orders', JSON.stringify(state.orders));
            localStorage.setItem('ordersQuantity', JSON.stringify(state.ordersQuantity));
        },
        clearCart: state => {
            state.data = []
            state.quantity = 0
            state.total = 0
            localStorage.setItem('cartItems', JSON.stringify(state.data));
            localStorage.setItem('cartQuantity', JSON.stringify(state.quantity));
            localStorage.setItem('cartTotal', JSON.stringify(state.total));
        },
        removeItemFromOrder: (state, action) => {
            const indexToRemove = state.orders.findIndex(item => item.mealId === action.payload.mealId);
            
            if (indexToRemove !== -1) {
                state.ordersQuantity -= 1;
                state.orders.splice(indexToRemove, 1); // Remove item from array
            }

            // Store updated cart state in local storage
            localStorage.setItem('orders', JSON.stringify(state.orders));
            localStorage.setItem('ordersQuantity', JSON.stringify(state.ordersQuantity));
        },
    }
});

export const {addItemToCart, removeItemFromCart, moveToOrders, clearCart, removeItemFromOrder} = cartSlice.actions
export default cartSlice.reducer

