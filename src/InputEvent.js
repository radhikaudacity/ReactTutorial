import React from 'react';

const clickHandler = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

const InputEvent = () => {
  return (
    <div>
      <form>
        <input
          name='name'
          type='text'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '2rem 0' }}
        />
        <button onClick={clickHandler}>click</button>
      </form>
    </div>
  );
};

export default InputEvent;
