import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button  style={{textAlign:'center',justifyContent:'center'}}onClick={decrement}>-</button>
        <span>{count}</span>
        <button style={{textAlign:'center',justifyContent:'center'}} onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;
