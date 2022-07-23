import {createContext, ReactNode, useContext, useState} from 'react';
import CharacterModal from '../components/modals/CharacterModal';
import FilterModal from '../components/modals/FilterModal';

type ICard = {
  id: number;
  name: string;
  foto: string;
};
const arr2: ICard[] = [
  {id: 0, name: 'caglayan', foto: 'image'},
  {id: 1, name: 'büsra  ', foto: 'image'},
  {id: 2, name: 'yogi', foto: 'image'},
  {id: 3, name: 'maho', foto: 'image'},
  {id: 4, name: 'bilo', foto: 'image'},
];

type CardProviderProps = {
  children: ReactNode;
};
type setModalType = React.Dispatch<React.SetStateAction<boolean>>;
type setCharacterType = React.Dispatch<
  React.SetStateAction<{
    id: string | null;
    name: string | null;
    show: boolean;
  }>
>;

//Main Context TYPES

type MainCartContextTypes = {
  arr2: ICard[];
  showFilterModal: boolean;
  setShowFilterModal: setModalType;
  showCharacterModal: {
    id: string | null;
    name: string | null;
    show: boolean;
  };
  setShowCharacterModal: setCharacterType;
  handleCharacterModal: (id: string | null, name: string | null) => void;
};

const MainContext = createContext({} as MainCartContextTypes);

export function useMainContext() {
  return useContext(MainContext);
}

export function CartProvider({children}: CardProviderProps) {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showCharacterModal, setShowCharacterModal] = useState<{
    id: string | null;
    name: string | null;
    show: boolean;
  }>({
    id: null,
    name: null,
    show: false,
  });

  function handleCharacterModal(id: string | null, name: string | null) {
    setShowCharacterModal({id, name, show: true});
  }

  return (
    <MainContext.Provider
      value={{
        showFilterModal,
        setShowFilterModal,
        showCharacterModal,
        setShowCharacterModal,
        handleCharacterModal,
        arr2,
      }}
    >
      {children}
      <FilterModal />
      <CharacterModal />
    </MainContext.Provider>
  );
}
