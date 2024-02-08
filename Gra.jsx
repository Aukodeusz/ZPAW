import React, { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('Kto jest prezydentem Polski?');
  const [answer, setAnswer] = useState('');
  const [points, setPoints] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    setGameEnded(false);
    setPoints(0);
  };

  const handleSubmitAnswer = () => {
    if (answer.toLowerCase() === 'andrzej duda') {
      setPoints(points + 1);
    }
    setAnswer('');
  };

  const handleRestartGame = () => {
    setGameStarted(false);
    setGameEnded(false);
    setPoints(0);
  };

  return (
    <div>
      <h1>Tajemnicza Gra</h1>
      {gameStarted ? (
        <div>
          <p>{question}</p>
          <input
            type="text"
            placeholder="Odpowiedź"
            value={answer}
            onChange={handleAnswerChange}
          />
          <button onClick={handleSubmitAnswer}>Zatwierdź odpowiedź</button>
          <p>Zdobyte punkty: {points}</p>
          <button onClick={handleRestartGame}>Rozpocznij od nowa</button>
        </div>
      ) : (
        <div>
          <p>{gameEnded ? 'Koniec gry!' : 'Czy chcesz zacząć grę?'}</p>
          <button onClick={handleStartGame}>Rozpocznij grę</button>
        </div>
      )}
    </div>
  );
}

export default App;
