import { api } from "./api";

export const fetchData = async () => {
  const [
    trending,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    api.get(`trending/all/week?api_key=${process.env.TMDB_API_KEY}`),
    api.get(
      `discover/movie?api_key=${process.env.TMDB_API_KEY}&with_networks=213`
    ),
    api.get(
      `movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    ),
    api.get(
      `discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&with_genres=28`
    ),
    api.get(
      `discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&with_genres=35`
    ),
    api.get(
      `discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&with_genres=27`
    ),
    api.get(
      `discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&with_genres=27`
    ),
    api.get(
      `discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&with_genres=10749`
    ),
    api.get(
      `discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&with_genres=99`
    ),
  ]);

  return {
    trending: trending.data.results,
    netflixOriginals: netflixOriginals.data.results,
    topRated: topRated.data.results,
    actionMovies: actionMovies.data.results,
    comedyMovies: comedyMovies.data.results,
    horrorMovies: horrorMovies.data.results,
    romanceMovies: romanceMovies.data.results,
    documentaries: documentaries.data.results,
  };
};
