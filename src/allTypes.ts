export interface ICharacter {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
  location: {
    name: string;
  };
}
export interface IEpisode {
  id: string;
  episode: string;
  name: string;
}
type Info = {
  count: number;
  pages: number;
  prev: number | null;
  next: number | null;
};

export interface FetchCharactersQueryResponse {
  characters: {
    results: ICharacter[];
    info: Info;
  };
}
export interface FetchEpisodesQueryResponse {
  episodes: {
    results: IEpisode[];
    info: Info;
  };
}
