import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviewsById } from "../../services/api"
import { Loader } from "components/Loader/Loader";

import { List } from "./Reviews.styled";

const Reviews = () => {

  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { movieId } = useParams();

useEffect(() => {
  const fetchReviews = async () => {
  setIsLoading(true);
  try {
    const { results } = await fetchMovieReviewsById(movieId)
    // console.log(results);
    setReviews(results)
      } catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [movieId])

  return (

    isLoading ? <Loader /> :
    <List>
        {reviews.length === 0 ? <p>No reviews available</p> :
          reviews.map(({ author, content, id, author_details }) => {
        return (
          <li key={id}>

            <span>
              {author_details.avatar_path ? <img src={`https://image.tmdb.org/t/p/w500${author_details.avatar_path}`} alt="profile" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}
            <p>
              {author}
            </p>
            </span>

            <p>
              {content}
            </p>
          </li>
        )
      })}
    </List>
  )
}

export default Reviews;
