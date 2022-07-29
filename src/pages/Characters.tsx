import {useEffect} from 'react';
import {Row, Col, Button, Nav, Container, Spinner} from 'react-bootstrap';
import {BiFilterAlt} from 'react-icons/bi';
import InfiniteScroll from 'react-infinite-scroll-component';
import {ICharacter} from '../allTypes';
import CharacterCard from '../components/CharacterCard';
import {useMainContext} from '../context/MainContext';
import {useGetAllCharacterQuery} from '../data/graphQl/queries/getAllCharactersQuery';

const Characters = () => {
  const {setShowFilterModal} = useMainContext();
  const handleOpen = () => setShowFilterModal(true);

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
        myfilter: '',
      },
    });
    // if (showModal.filter !== '') {
    //   refetch({filtered: showModal.filter});
    // }
  }, [getCharacters]);

  const loadMore = () => {
    nextPage && getMoreCharacters(currentPage + 1);
  };

  return (
    <Container>
      <Nav className='align-items-center text-light'>
        <span className='me-2'>Filter</span>
        <Button onClick={handleOpen} variant='outline-light'>
          <BiFilterAlt />
        </Button>
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
          {characters?.map((character: ICharacter) => {
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
