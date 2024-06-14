// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],  // Array of items in the cart
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },
        increment: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find(item => item.id === itemId);
            if (item) {
                item.quantity++;
            }
        },
        decrement: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find(item => item.id === itemId);
            if (item && item.quantity > 0) {
                item.quantity--;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, increment, decrement, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
