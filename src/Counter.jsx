
import { useState } from 'react';

function Counter() {
  // Initialize counter state to 0
  const [count, setCount] = useState(0);

  // Handle increment button click
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Handle decrement button click
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="bg-pink-100 flex justify-center items-center h-screen">
  <div className="bg-red-500 w-80 h-60 flex flex-col justify-center items-center rounded-lg md:w-96 md:h-80">
    <h1 className="text-3xl font-bold text-white text-center">{count}</h1>
    <div className="flex justify-center mt-8 space-x-4">
      <button className="bg-white px-4 py-3" onClick={handleIncrement}>
        Increment
      </button>
      <button className="bg-white px-4 py-3" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  </div>
</div>
  );
}

export default Counter;
