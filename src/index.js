import React from 'react';
import ReactDOM from 'react-dom/client';
import img1 from './images/book-1.jpg';
import img2 from './images/book-2.jpg';
import img3 from './images/book-3.jpg';

const books = [img1, img2, img3];

const BookList = () => (
  <ul>
    {books.map((item) => (
      <li>
        <img src={item}></img>
      </li>
    ))}
  </ul>
);

export default BookList;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
