import React, { useState } from 'react';
import TicTacToeBoard from './board';

const winingPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

function handleVictory(cells: string[]){
    for(let i = 0 ; i < winingPatterns.length ; i++){
      if(
        cells[winingPatterns[i][0]] !== "" &&
        cells[winingPatterns[i][0]] == cells[winingPatterns[i][1]] &&
        cells[winingPatterns[i][0]] == cells[winingPatterns[i][2]] 
      ){
        return cells[winingPatterns[i][0]];
      }
    }
    return null;
};

function App() {
  const [boardCells, setBoardCells] = useState<string[]>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);


  const winner = handleVictory(boardCells);
  const isDraw = currentPlayer >= 9 && !winner;
  const currentSymbol = currentPlayer % 2 === 0 ? "X" : "O";


  const handlePlay = (index: number) => {
    if (boardCells[index] !== "" || winner) return;

    const nextCells = [...boardCells];
    nextCells[index] = currentSymbol;

    setBoardCells(nextCells);
    setCurrentPlayer(currentPlayer + 1);
  };

  const handleReset = () => {
    setCurrentPlayer(0);
    setBoardCells(Array(9).fill(""));
  }

  return (
    <div className='container text-center py-4'>
      {winner && (
        <p className='display-4 text-success fw-bold mb-4'>WYGRAŁ: {winner}</p>
      )}
      
      {isDraw && (
        <p className='display-4 text-warning fw-bold mb-4'>REMIS!</p>
      )}
      
      {!winner && !isDraw && (
        <p className="h1 mb-4 text-secondary">Tura gracza: {currentSymbol}</p>
      )}
      
      <TicTacToeBoard 
        boardCells={boardCells} 
        onPlay={handlePlay} 
      />

      {currentPlayer > 0 &&(
        <button
        className='btn btn-primary btn-lg mt-4 shadow-sm'
        onClick={handleReset}
        >
          RESET GRY
        </button>
      )}
      
      
    </div>
  );
}

export default App;
