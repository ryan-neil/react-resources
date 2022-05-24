import { useEffect, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [boxColor, setBoxColor] = useState('');
  const [boxText, setBoxText] = useState('');

  useEffect(() => {
    setBoxColor(inputValue);
    setBoxText(inputValue);
  }, [inputValue]);

  return (
    <div className="App">
      <div className="box" style={{ backgroundColor: boxColor }}>
        {!boxText ? <p>Empty Value</p> : boxText}
      </div>
      <label htmlFor="color-input">
        <input
          type="text"
          id="color-input"
          placeholder="Add color name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
    </div>
  );
}

export default App;
