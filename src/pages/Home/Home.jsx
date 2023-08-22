
import { fetchTrendingMovies, fetchCategories, fetchTopRated } from "../../services/api"
import { useEffect, useState } from "react";
import Categories from "components/Categories/Categories";
import { Container, HomeBox } from "./Home.styled";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import TopRated from "components/TopRated/TopRated";




const Home = () => {

  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [topRated, setTopRated] = useState([])
  const [totalPageTopRated, setTotalPagesTopRated] = useState(1)
  const [currentPageTopRated, setCurrentPageTopRated] = useState(1)


  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { genres } = await fetchCategories()
        setGenres(genres)
      } catch (error) {
        console.log(error);
      }
    }

    const fetchMovies = async () => {
      try {
        const {results} = await fetchTrendingMovies()

        setMovies(results)
      } catch (error) {
        console.log(error);
      }
    }

    const fetchTopRatedMovies = async () => {
      try {
        const data = await fetchTopRated(currentPageTopRated)
        const results = data.results;
        const pages = data.total_pages
        setTotalPagesTopRated(pages)
        // console.log(results);

        setTopRated(results)
      } catch (error) {
        console.log(error);
      }
    }

    fetchGenres()
    fetchMovies()
    fetchTopRatedMovies()
  }, [currentPageTopRated]
  )

  const handlePageChange = (selectedPage) => {
    const chosenPage = selectedPage.selected + 1

    setCurrentPageTopRated(chosenPage);
    console.log(currentPageTopRated);
  };

  return (
    <div>
      <Container>
        <Categories genres={genres} />
        <HomeSlider movies={movies} />
        <HomeBox>
          <TopRated
            topRated={topRated}
            handlePageChange={handlePageChange}
            totalPageTopRated={totalPageTopRated}
            currentPageTopRated={currentPageTopRated}
          ></TopRated>
        </HomeBox>
        </Container>
    </div>
  )
}

export default Home;
