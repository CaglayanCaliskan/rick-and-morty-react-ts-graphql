import {useLazyQuery, gql} from '@apollo/client';
import {FetchCharactersQueryResponse, ICharacter} from '../../../allTypes';

interface IQuery {
  characters: ICharacter[] | undefined;
  count: number;
  currentPage: number;
  nextPage: number | null;
  getCharacters: (payload: {
    variables: {mypage: number; myfilter: string};
  }) => any;
  getMoreCharacters: (mypage: number) => any;
  refetch: (payload: {myfilter: string}) => any;
}

export const GET_ALL_CHARACTERS = gql`
  query Characters($mypage: Int!, $myfilter: String!) {
    characters(page: $mypage, filter: {name: $myfilter}) {
      info {
        count
        pages
        prev
        next
      }
      results {
        name
        id
        status
        species
        image
        gender
        location {
          name
        }
      }
    }
  }
`;

export function useGetAllCharacterQuery(): IQuery {
  const [getCharacters, {data, fetchMore, refetch}] =
    useLazyQuery<FetchCharactersQueryResponse>(GET_ALL_CHARACTERS);

  const prevPage = data?.characters.info.prev;
  const currentPage = prevPage && prevPage != null ? prevPage + 1 : 1;
  const nextPage = data?.characters.info?.next || null;

  const getMoreCharacters = (nextPageNumber: number) => {
    fetchMore({variables: {mypage: nextPageNumber}});
  };
  return {
    characters: data?.characters?.results,
    count: data?.characters.results?.length || 0,
    currentPage,
    nextPage,
    getCharacters,
    getMoreCharacters,
    refetch,
  };
}
