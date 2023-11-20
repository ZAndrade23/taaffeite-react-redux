import BookForm from '../BookForm/BookForm';
import BookList from '../BookList/BookList';
import ListName from '../ListName/ListName';
// use useSelector to pull info out th Redux store
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import axios from 'axios';
import { useEffect } from 'react';

function App() {
  // Connect a local variable to the reducer
const count = useSelector(store => store.count);
const listName = useSelector(store => store.listName);
// dispatch is used to send data to Redux
  const dispatch = useDispatch();

const increaseCount = () => {
  // send data to redux using dispatch
  const action = { type: 'INCREASE' };
  dispatch(action)
}
const decreaseCount = () => {
  const action = { type: 'DECREASE'};
  dispatch(action)
}

const resetCount = () => {
  const action = { type: 'RESET'};
  dispatch(action)
}
// TODO - GET Book List from server
const getBookList = () => {
  axios.get('/books').then((response) => {
    const action = { type: 'SET_BOOK_LIST', payload: response.data};
    dispatch(action);
  }).catch((error) => {
  console.error('error getting bookList',error);
    alert('something went wrong!');
  }) 
}
useEffect(() => {
  getBookList();
}, []);




  return (
    <div className="App">
      <header><h1>{listName}</h1></header>
      <div>
        <button onClick={increaseCount}
        >Increase</button>
        <button onClick={decreaseCount}
        >Decrease</button>
        <button onClick={resetCount}
        >Reset</button>
      </div>
      <div>Count: {count} </div>
      <h4>Name Your Book List</h4>
      <ListName/>
      <main>
        <BookForm getBookList={getBookList}/>
        <BookList />
      </main>
    </div>
  );
}

export default App;
