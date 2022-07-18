type ResponsesData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [Number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  name?: string;
  original_name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Responses = {
  responses: {
    actionMovies: ResponsesData[];
    comedyMovies: ResponsesData[];
    documentaries: ResponsesData[];
    horrorMovies: ResponsesData[];
    netflixOriginals: ResponsesData[];
    romanceMovies: ResponsesData[];
    topRated: ResponsesData[];
    trending: ResponsesData[];
  };
};