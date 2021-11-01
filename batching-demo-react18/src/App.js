import { useState, useRef } from 'react';

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const renderCount = useRef(0);

  const increment = () => {
    setCounter1(counter1 + 1);
    setCounter2(counter2 + 1);
  };

  return (
    <div>
      <p>counter1: {counter1}</p>
      <p>counter2: {counter2}</p>
      <p>renderCount: {renderCount.current++}</p>
      <button onClick={increment}>increment both counters</button>
    </div>
  );
};

export default App;
