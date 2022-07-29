import {ICard} from '../../allTypes';
import back from '../../assets/game/front.jpg';
type Props = {
  card: ICard;
  handleChoice: (card: ICard) => void;
  flipped: boolean;
  disabled: boolean;
};

const SingleCard = ({card, handleChoice, flipped, disabled}: Props) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className='game-card'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front rounded' src={card.url} width={100} />
        <img
          onClick={handleClick}
          className='back rounded'
          src={back}
          width={100}
        />
      </div>
    </div>
  );
};

export default SingleCard;
