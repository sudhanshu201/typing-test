import React, { useState, useEffect } from 'react';
import Results from './Results';

const sampleText = "The quick brown fox jumps over the lazy dog.";

function TypingTest() {
  const [input, setInput] = useState('');
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
    setWords(value.split(' ').filter(Boolean).length);
    setCharacters(value.length);
  };

  const handleStart = () => {
    setIsRunning(true);
    setTime(60);
    setInput('');
    setWords(0);
    setCharacters(0);
  };

  return (
    <div>
      <p>{sampleText}</p>
      <textarea
        value={input}
        onChange={handleChange}
        disabled={!isRunning}
      />
      <div>
        <button onClick={handleStart} disabled={isRunning}>Start</button>
      </div>
      <div>Time: {time}s</div>
      {time === 0 && (
        <Results words={words} characters={characters} />
      )}
    </div>
  );
}

export default TypingTest;
