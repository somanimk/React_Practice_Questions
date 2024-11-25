import React, { useState } from 'react';

const Twentyseven = () => {
  const [state, setState] = useState({
    count: 0,
    text: 'Hello World',
    isActive: true,
  });

  function incrementCount() {
    setState({ ...state, count: state.count + 1 });
  }

  function changeText() {
    setState({ ...state, text: 'Updated Text' });
  }

  function toggleActive() {
    setState({ ...state, isActive: !state.isActive });
  }

  return (
    <div>
      <h1>Multiple State Example</h1>
      <h4>Count: {state.count}</h4>
      <h4>Text: {state.text}</h4>
      <h4>Active: {state.isActive ? 'True' : 'False'}</h4>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={changeText}>Change Text</button>
      <button onClick={toggleActive}>Toggle Active</button>
    </div>
  );
};

export default Twentyseven;
