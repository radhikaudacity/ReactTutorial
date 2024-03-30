import React from 'react';
import ReactDOM from 'react-dom';
const Greeting = () => {
  return <h2>Hi there</h2>;
};

export default Greeting;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
