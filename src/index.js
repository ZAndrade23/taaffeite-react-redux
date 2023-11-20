import React from 'react';
import ReactDOM from 'react-dom/client';

// step 1: import Provider, applyMIddleware, combineReducers, createstore

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
// End Step 1


import App from './components/App/App';
import './index.css';

// Create a reducer to store a counter
// const [count, setCount] = useState();
//    name     value = initial value      action
const count = (state= 0,                  action) => {
 if (action.type === 'INCREASE') {
  return state + 1; // ! NOT state += 1
 }else if (action.type === 'DECREASE') {
  return state -1;
 } else if (action.type === 'RESET') {
  return  0;
 }
 // Returning state means the reducer is unchanged
  return state;
}

const listName = (state = 'title', action) => {
  if (action.type === 'SET_LIST_NAME') {
    //passing new list name via action.payload
    return action.payload;
  }
  // ! Reducers must always return state by default
return state;
}


const bookList = (state = [], action) => {
  // TODO - set book list with data from server
 if(action.type === 'ADD_BOOK') {
// combine existing state (array) with new book (action.payload)
return [...state,action.payload]; // similar to .push
 } else if(action.type === 'SET_BOOK_LIST') {
// if recieving a full list, replace list
  return action.payload;
 }
 /// ! Note: for reducers, you will generally have an ADD action type or a SET action type.
  return state; 
}

const reduxStore = createStore(
  combineReducers({
   // Step 2: Only part of this block of code needed to be changed
    bookList,
    count,
    listName
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Step 3: Wrap the App in a Provider */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
