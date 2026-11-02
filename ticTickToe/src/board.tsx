import React from 'react';

interface BoardProps {
  boardCells: string[];
  onPlay: (index: number) => void;
}

function TicTacToeBoard({ boardCells, onPlay }: BoardProps) {
  return (
    <div className="container d-flex justify-content-center align-items-center py-2">
      <div style={{ width: '320px' }}>
        
        <div className="row g-2"> 
          {boardCells.map((value, index) => (
            <div key={index} className="col-4 d-flex justify-content-center">
              
              <button 
                className="btn btn-outline-dark bg-light d-flex align-items-center justify-content-center fs-1 fw-bold shadow-sm rounded"
                style={{ width: '90px', height: '90px' }}
                onClick={() => onPlay(index)}
              > 
                {value}
              </button>

            </div>
          ))} 
        </div>

      </div>
    </div>
  );
}

export default TicTacToeBoard;
