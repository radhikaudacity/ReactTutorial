import React from 'react';

const Book = ({ author, title, id, img }) => (
  <li>
    <div style={{ textAlign: 'center' }}>
      <h2>{author}</h2>
      <h2>{title}</h2>
      <h2>{id}</h2>
    </div>
    <img src={img}></img>
  </li>
);

export default Book;
