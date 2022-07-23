import {useLazyQuery, gql} from '@apollo/client';
import {FetchEpisodesQueryResponse, IEpisode} from '../../../allTypes';

interface IQuery {
  episodes: IEpisode[] | undefined;
  count: number;
  currentPage: number;
  nextPage: number | null;
  getEpisodes: (payload: {variables: {mypage: number}}) => any;
  getMoreEpisodes: (mypage: number) => any;
}

export const GET_ALL_EPISODES = gql`
  query Episodes($mypage: Int!) {
    episodes(page: $mypage) {
      info {
        count
        pages
        prev
        next
      }
      results {
        id
        episode
        name
      }
    }
  }
`;
export function useGetAllEpisodesQuery(): IQuery {
  const [getEpisodes, {data, fetchMore, refetch}] =
    useLazyQuery<FetchEpisodesQueryResponse>(GET_ALL_EPISODES);

  const prevPage = data?.episodes.info.prev;
  const currentPage = prevPage && prevPage != null ? prevPage + 1 : 1;
  const nextPage = data?.episodes.info?.next || null;

  const getMoreEpisodes = (nextPageNumber: number) => {
    fetchMore({variables: {mypage: nextPageNumber}});
  };

  return {
    episodes: data?.episodes?.results,
    count: data?.episodes.results?.length || 0,
    currentPage,
    nextPage,
    getEpisodes,
    getMoreEpisodes,
  };
}
