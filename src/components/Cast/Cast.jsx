import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCreditsById } from "../../services/api"
import { Loader } from "components/Loader/Loader";

import { List, Profile } from "./Cast.styled";

const Cast = () => {

  const [cast, setCast] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
    setIsLoading(true);
  try {
    const { cast } = await fetchMovieCreditsById(movieId)

    setCast(cast)
      } catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false)
      }
    }

    fetchCast()
  }, [movieId])

  return (
    isLoading ? <Loader /> :
    <List>
      {  cast.length === 0 ? <p>No cast available</p> :
        cast.map(({ name, character, profile_path, id }) => {
          return (

            <li key={id}>

                {profile_path ? <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="profile" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}

              <Profile>
                <p>{name}</p>
                <p>{character}</p>
              </Profile>
            </li>
          )
        })
      }
    </List>
  )
}

export default Cast;
