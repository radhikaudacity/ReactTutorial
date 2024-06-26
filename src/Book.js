import React from 'react';

const Book = ({ author, title, id, img, displayTitle, index }) => (
  <li className='card'>
    <div className='redCorner'>{index + 1}</div>
    <div style={{ textAlign: 'center' }}>
      <h2>{author}</h2>
      <h2>{title}</h2>
      <h2>{id}</h2>
      <button onClick={() => displayTitle(id)}>displayTitle</button>
    </div>
    <img src={img}></img>
  </li>
);

export default Book;
