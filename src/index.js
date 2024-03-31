import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './Book';
import books from './books.js';
import InputEvent from './InputEvent.js';

const displayTitle = (id) =>
  console.log(books.find((book) => book.id === id).title);

const BookList = () => (
  <>
    <InputEvent />
    <ul>
      {books.map((book) => (
        <Book {...book} key={book.id} displayTitle={displayTitle} />
      ))}
    </ul>
  </>
);

export default BookList;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
