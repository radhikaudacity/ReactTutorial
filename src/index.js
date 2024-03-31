import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './Book';
import books from './books.js';
import InputEvent from './InputEvent.js';
import './index.css';

const displayTitle = (id) =>
  console.log(books.find((book) => book.id === id).title);

const BookList = () => (
  <>
    <InputEvent />
    <ul className='bookList'>
      {books.map((book, index) => (
        <Book {...{ ...book, displayTitle, index }} key={book.id} />
      ))}
    </ul>
  </>
);

export default BookList;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
