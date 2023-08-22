import { useNavigate, createSearchParams } from "react-router-dom";
import { List, Button } from "./Categories.styled"

const Categories = ({ genres }) => {

  const navigate = useNavigate()

  const onClick = (e) => {
    const genre = e.target.id
    const name = e.target.name
    navigate({pathname: "/movies", search: `?${createSearchParams({genre})}&${createSearchParams({name})}&${createSearchParams({page:1})}` });
  }


  return (
    <List>
      {genres.map(({ name, id }) => {
        return (
          <li key={id}>
            <Button onClick={onClick} id={id} name={name} $animated>{name}</Button>
        </li>
        )
      })
      }

      </List>
  )
}


export default Categories;
