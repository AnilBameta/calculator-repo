import React, { useState, useMemo } from 'react';
import { add } from './stringCalculator';

function App() {
  const [input, setInput] = useState('');
// runs only when input changes
  const { result, error } = useMemo(() => {
    try {
      const sum = add(input);
      return { result: sum, error: null };
    } catch (e) {
      return { result: null, error: e.message };
    }
  }, [input]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>🧮 String Calculator</h2>
      <textarea
        rows="5"
        cols="40"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your numbers string here"
      />
      <br />
      <div style={{ marginTop: '1rem' }}>
        {result !== null && <strong>Result: {result}</strong>}
        {error && <strong style={{ color: 'red' }}>Error: {error}</strong>}
      </div>
    </div>
  );
}

export default App;
