import axios from 'axios';

// const APIKEY = '983095db1c30c112af86c3e91626845d'
const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODMwOTVkYjFjMzBjMTEyYWY4NmMzZTkxNjI2ODQ1ZCIsInN1YiI6IjY0YzIyOTgwMmYxYmUwMDBjYTI3NTFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._7s7ANDTjvRolXC55iraUkBQjE0gdiu5wGUEiZzr4fE'
const baseUrl = 'https://api.themoviedb.org/3/'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: TOKEN
  }
};
const langParams = 'language=en-US'

export async function fetchTrendingMovies() {
  try{
  const {data} = await axios.get(`${baseUrl}/trending/movie/day?${langParams}`, options);

    return data
     } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieByName(name, page) {
   try{
  const {data} = await axios.get(`${baseUrl}/search/movie?query=${name}&${langParams}&include_adult=false&page=${page}`, options);
    return data
     } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetailsById(id) {
   try{
  const {data} = await axios.get(`${baseUrl}/movie/${id}?${langParams}`, options);
    return data
     } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieCreditsById(id) {
   try{
  const {data} = await axios.get(`${baseUrl}/movie/${id}/credits?${langParams}`, options);
    return data
     } catch (error) {
    console.error(error);
  }
}



export async function fetchMovieReviewsById(id) {
   try{
  const {data} = await axios.get(`${baseUrl}/movie/${id}/reviews?${langParams}`, options);
    return data
     } catch (error) {
    console.error(error);
  }
}

export async function fetchAllMovies(genre, page) {
   try{
    const {data} = await axios.get(`${baseUrl}/discover/movie?with_genres=${genre}&${langParams}&include_adult=false&page=${page}`, options);
    return data
     } catch (error) {
    console.error(error);
  }
}

export async function fetchCategories() {
   try{
    const {data} = await axios.get(`${baseUrl}/genre/movie/list`, options);
    return data
     } catch (error) {
    console.error(error);
  }
}

export async function fetchSimilarMoviesById(id) {
   try{
    const {data} = await axios.get(`${baseUrl}/movie/${id}/similar`, options);
    return data
     } catch (error) {
    console.error(error);
  }
}

export async function fetchTopRated(page) {
   try{
    const {data} = await axios.get(`${baseUrl}/movie/top_rated?language=en-US&page=${page}`, options);
    return data
     } catch (error) {
    console.error(error);
  }
}
