import React from 'react';

const Game = () => {
  const arr = 'Lorem impus bu ne lan';

  function mixer(arr: any) {
    for (let i = 0; i < 4; i++) {
      console.log(Math.floor(Math.random() * arr.length));
    }
  }
  mixer(arr.split(''));

  return <div>Game</div>;
};

export default Game;
