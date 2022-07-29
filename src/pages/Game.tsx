import {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import {ICard} from '../allTypes';
import '../App.css';
import SingleCard from '../components/game/SingleCard';

const Game = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<ICard | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<ICard | null>(null);
  const [disabled, setDisabled] = useState(false);

  const suffleCards = () => {
    const cardList: ICard[] = [];
    for (let i = 0; i < 6; i++) {
      let urlInt = Math.floor(Math.random() * 826);
      const card = {
        url: `https://rickandmortyapi.com/api/character/avatar/${urlInt}.jpeg`,
        id: Math.random(),
        matched: false,
      };
      cardList.push(card);
    }

    const shuffleCards = [...cardList, ...cardList]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));

    setCards(shuffleCards);
    setTurns(0);
  };

  // Handle Choice
  const handleChoice = (card: ICard) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.url === choiceTwo.url && choiceOne.id !== choiceTwo.id) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.url === choiceOne.url) {
              return {...card, matched: true};
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices & increase turn

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <>
      <div className='card-grid mt-5'>
        {cards.map((card, index) => {
          return (
            <SingleCard
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              handleChoice={handleChoice}
              key={index}
              card={card}
              disabled={disabled}
            />
          );
        })}
      </div>
      <div className='mt-5 d-flex flex-column align-items-center'>
        <Button className='w-50' onClick={suffleCards}>
          New Game
        </Button>
        <p className='text-light'>Turn: {turns}</p>
      </div>
    </>
  );
};

export default Game;
