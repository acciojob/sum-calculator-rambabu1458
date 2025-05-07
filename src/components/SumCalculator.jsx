import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [sum, setSum] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const num = parseInt(inputValue, 10);
      if (!isNaN(num)) {
        setNumbers((prev) => [...prev, num]);
        setInputValue('');
      }
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const total = numbers.reduce((acc, val) => acc + val, 0);
      setSum(total);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [numbers]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a number and press Enter"
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
