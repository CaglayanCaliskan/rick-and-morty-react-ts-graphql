import {useEffect, useState} from 'react';
import {Row, Col, Button, Nav, Container, Spinner} from 'react-bootstrap';
import {BiFilterAlt} from 'react-icons/bi';
import InfiniteScroll from 'react-infinite-scroll-component';
import {ICharacter} from '../allTypes';
import CharacterCard from '../components/CharacterCard';
import {useMainContext} from '../context/MainContext';
import {useGetAllCharacterQuery} from '../data/graphQl/queries/getAllCharactersQuery';

const Characters = () => {
  const {setShowFilterModal, showFilterModal} = useMainContext();
  const [searchBar, setSearchBar] = useState('');

  const handleOpen = () =>
    setShowFilterModal((prev) => ({...prev, show: true}));

  const {
    characters,
    count,
    currentPage,
    nextPage,
    getCharacters,
    getMoreCharacters,
    refetch,
  } = useGetAllCharacterQuery();

  useEffect(() => {
    getCharacters({
      variables: {
        mypage: 1,
        myfilter: showFilterModal.filter,
      },
    });
    if (showFilterModal.filter != '') {
      refetch({myfilter: showFilterModal.filter});
    }
  }, [getCharacters, showFilterModal.filter]);

  const loadMore = () => {
    nextPage && getMoreCharacters(currentPage + 1);
  };

  const filteredCharacters = characters?.filter((char) => {
    if (searchBar === '') {
      return characters;
    } else {
      return char.name.toLowerCase().includes(searchBar.toLowerCase());
    }
  });

  return (
    <Container>
      <Nav className='align-items-center text-light'>
        <span className='me-2'>Filter</span>
        <Button onClick={handleOpen} variant='outline-light'>
          <BiFilterAlt />
        </Button>

        <label className='ms-2' htmlFor='searchBar'>
          Search
        </label>
        <input
          className='ms-2 rounded'
          id='searchBar'
          value={searchBar}
          type='text'
          onChange={(e) => {
            setSearchBar(e.target.value);
          }}
        />

        {showFilterModal.filter && (
          <Button
            className='btn-danger mt-1'
            onClick={() => {
              setShowFilterModal((prev) => ({...prev, filter: ''}));
              refetch({myfilter: ''});
            }}
          >
            Clear filter {showFilterModal.filter.toUpperCase()}
          </Button>
        )}
      </Nav>

      <InfiniteScroll
        dataLength={count}
        next={loadMore}
        hasMore={true}
        loader={
          <Spinner animation='border' role='status' className='text-light'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        }
        className='p-3'
      >
        <Row className='mt-4' xs={1} md={2} lg={2} xl={3}>
          {filteredCharacters?.map((character: ICharacter) => {
            return (
              <Col key={character.id}>
                <CharacterCard {...character} />
              </Col>
            );
          })}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default Characters;
