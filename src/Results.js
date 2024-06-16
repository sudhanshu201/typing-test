import React from 'react';

function Results({ words, characters }) {
  return (
    <div>
      <h2>Results</h2>
      <p>Words per minute: {words}</p>
      <p>Characters typed: {characters}</p>
    </div>
  );
}

export default Results;
