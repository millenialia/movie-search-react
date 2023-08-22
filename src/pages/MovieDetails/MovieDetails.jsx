import { Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchMovieDetailsById, fetchSimilarMoviesById } from "../../services/api"
import SimilarSlider from "../../components/SimilarSlider/SimilarSlider"
import { Loader } from "components/Loader/Loader";

import { Heading, MovieContainer, HeadingSecondary, List, Genres, Back, Container, Hero, Details, Year, Likes, SimilarMoviesContainer, Link } from "./MovieDetails.styled";

const MovieDetails = () => {

  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [overview, setOverview] = useState('')
  const [genres, setGenres] = useState([])
  const [poster, setPoster] = useState('')
  const [backdrop, setBackdrop] = useState('')
  const [rating, setRating] = useState(0)
  const [similarMovies, setSimilarMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const location = useLocation();
  const backPath =  useRef(location.state?.from ?? '/')

const { movieId } = useParams();

  useEffect(() => {

    const fetchMovie = async () => {
    setIsLoading(true);
      try {
        const data = await fetchMovieDetailsById(movieId)
        const title = data.title
        const year = data.release_date.split('-')[0]
        const overview = data.overview
        const genres = data.genres
        const poster = data.poster_path
        const backdrop = data.backdrop_path
        const rating = data.vote_average.toFixed(1);

        // console.log(data);

        setTitle(title)
        setYear(year)
        setOverview(overview)
        setGenres(genres)
        setBackdrop(backdrop)
        setPoster(poster)
        setRating(rating)
      } catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false)
      }
    }

    const fetchSimilarMovies = async () => {
    setIsLoading(true);
      try {
        const {results} = await fetchSimilarMoviesById(movieId)
        setSimilarMovies(results)
      } catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false)
      }
    }

    fetchMovie()
    fetchSimilarMovies()
  }, [movieId])

  return (

    isLoading ? <Loader /> :
    <div>
      <Container>

          <Back to={backPath.current}>&larr;</Back>

          <Hero $backgroundUrl = {`https://image.tmdb.org/t/p/w500${backdrop}`}>

       <Details>

              <Heading>{title}</Heading>

              <Year>{year}</Year>
              <Likes><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>{rating}</Likes>

            </Details>
            </Hero>



        <MovieContainer>
          {poster ? <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="poster" />}

          <div>
      <HeadingSecondary>Overview</HeadingSecondary>
      <p>{overview}</p>

      <HeadingSecondary>Genres</HeadingSecondary>
      <Genres>
        {genres.map(({id, name}) =>{
          return (
            <li key={id}>{name}</li>
          )
        })}
            </Genres>


            </div>
          </MovieContainer>

          <SimilarMoviesContainer>
      <SimilarSlider movies={similarMovies} location={location} />
</SimilarMoviesContainer>

      <List>
        <li>
            <Link to={"cast"}>Cast</Link>
        </li>
        <li>
            <Link to="reviews">Reviews</Link>
        </li>
      </List>

        <Outlet />
        </Container>
    </div>


  )
}

export default MovieDetails;


