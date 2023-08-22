import { useEffect, useState, Suspense } from "react";
import { Outlet, useSearchParams, useLocation } from "react-router-dom";
import { fetchMovieByName, fetchAllMovies } from "../../services/api"
import { Loader } from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import { Container, Heading } from "./Movies.styles"

const Movies = () => {

  const [movies, setMovies] = useState([])
  const [heading, setHeading] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") ?? ""
  const searchGenre = searchParams.get("genre") ?? ""
  const genreName = searchParams.get("name") ?? ""
  const page = searchParams.get("page") ?? ""

  const location = useLocation();

  useEffect(() => {


    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieByName(searchQuery, page)
        setMovies(data.results)
        setTotalPages(data.total_pages<300 ? data.total_pages : 300)
        setHeading(searchQuery)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }

    const fetchMoviesByGenre = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAllMovies(searchGenre, page)
        setMovies(data.results)
        setTotalPages(500)
        setHeading(genreName)
      } catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false)
      }
        }

  if (searchQuery !== '') {
    fetchMovies()
  } else if (searchGenre !== '') {
    fetchMoviesByGenre()
  }
  }, [searchParams, searchQuery, searchGenre, genreName, page])

  const handlePageChange = (selectedPage) => {
    const chosenPage = selectedPage.selected + 1

    const newSearchParams = {
  page: chosenPage,
};

setSearchParams((prevParams) => {
  return new URLSearchParams({
    ...Object.fromEntries(prevParams.entries()),
    ...newSearchParams,
  });
});
  };


  return (
    isLoading ? <Loader /> :
    <Container>
      <div>
          {movies.length === 0 ? <Heading> No movies found </Heading> :

            <MovieList
          heading={ heading }
          movies={movies}
          searchQuery={searchQuery}
          location={location}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          currentPage={page}
        />}


      <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
      </div>
      </Container>
  )
}

export default Movies;
