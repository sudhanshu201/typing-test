import React, { useState, useEffect } from 'react';
import Results from './Results';

const sampleText = " A small bakery in a bustling city was celebrating a milestone: its 100th customer of the day. The owner, David, had started the business with just $1,000 in savings and a passion for baking. Through word-of-mouth and positive online reviews, the bakery had steadily grown its customer base. On this special day, David decided to surprise the 100th customer with a free cake and a handwritten thank-you note. The gesture went viral on social media, with the hashtag #100thCustomer trending locally. In the following weeks, the bakery saw a 30% increase in foot traffic and online orders. David's simple act of kindness had not only delighted one customer but also created a ripple effect of positive publicity and increased sales. ";

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
