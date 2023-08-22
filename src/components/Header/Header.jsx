import { Container, Link, HeaderBox, Form } from "./Header.styled";
import { useNavigate, createSearchParams } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    const query = e.target.query.value.trim()
    if (query === '') {
      return
    }
    navigate({pathname: "/movies", search: `?${createSearchParams({query})}&${createSearchParams({page:1})}` });
    e.target.reset()
  }

  return (
    <HeaderBox>
      <Container>
        <nav>
          <Link to="/">Home</Link>
          {/* <Link to="/movies">Movies</Link> */}
        </nav>

        <Form action="movie-search" onSubmit={onSubmit}>
          <input type="text" name="query" />
          <button type="submit">Search</button>

        </Form>

      </Container>
      </HeaderBox>
  )

}
