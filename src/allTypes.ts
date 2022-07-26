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
  next: number;
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
//Game
export interface ICard {
  url: string;
  id: number;
  matched: boolean;
}
