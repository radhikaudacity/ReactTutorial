import React from 'react';

const Book = ({ book }) => {
  const { author, title, id, img } = book;
  console.log(author);
  return (
    <li>
      <div style={{ textAlign: 'center' }}>
        <h2>{author}</h2>
        <h2>{title}</h2>
        <h2>{id}</h2>
      </div>
      <img src={img}></img>
    </li>
  );
};

export default Book;
