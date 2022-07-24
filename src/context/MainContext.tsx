import {createContext, ReactNode, useContext, useState} from 'react';
import {IEpisode} from '../allTypes';
import CharacterModal from '../components/modals/CharacterModal';
import FilterModal from '../components/modals/FilterModal';

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
  showFilterModal: boolean;
  setShowFilterModal: setModalType;
  showCharacterModal: {
    id: string | null;
    name: string | null;
    show: boolean;
  };
  setShowCharacterModal: setCharacterType;
  handleCharacterModal: (id: string | null, name: string | null) => void;
  episode: IEpisode[] | undefined;
  setEpisode: React.Dispatch<React.SetStateAction<IEpisode[]>>;
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
  const [episode, setEpisode] = useState<IEpisode[]>([]);

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
        episode,
        setEpisode,
      }}
    >
      {children}
      <FilterModal />
      <CharacterModal />
    </MainContext.Provider>
  );
}
