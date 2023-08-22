import { Link } from "react-router-dom";
import { Heading, List, StyledReactPaginate } from "./MovileList.styled";

const MovieList = ({ movies, heading,  location, handlePageChange, totalPages, currentPage }) => {


  return (
    <div>
      <Heading> {heading}</Heading>
     <List>
        {movies.map(({ title, id, poster_path }) => {
          return (
            <li key={id}>
                <Link to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  {poster_path ? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}

                <p>{title}</p>
              </Link>
            </li>
          )
        })}

      </List>
      <StyledReactPaginate
        activeClassName="active"
        marginPagesDisplayed ={1}
        pageRangeDisplayed={2}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage-1}
    />

      </div>
  )
}

export default MovieList;
