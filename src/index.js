import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './Book';
import books from './books.js';

const BookList = () => (
  <ul>
    {books.map((book) => (
      <Book book={book} key={book.id} />
    ))}
  </ul>
);

export default BookList;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
