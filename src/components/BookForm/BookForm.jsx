import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import axios from 'axios'

function BookForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
// const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding book`, {title, author});

    // TODO - axios request to server to add book

//! THIS BLOCK OF CODE ONLY ADDS TO REDUX, NOT THE DATABASE
    // let action = {
//    type: 'ADD_BOOK', 
//    payload: {title: title, author: author}
// };
// dispatch(action);


//sendatatoserver
axios.post('/books',{title,author}).then((response) => {
  props.getBookList();
}).catch((error) => {
  console.log('error posting book', error);
  alert('SOmething went wrong');
})
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input 
          required 
          placeholder="Title" 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          required 
          placeholder="Author" 
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </section>
  );
}

export default BookForm;
