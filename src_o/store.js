import { createStore } from 'redux';

// Define a simple reducer
const reducer = (state = {}, action) => {
    switch (action.type) {
        // Define actions here
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
