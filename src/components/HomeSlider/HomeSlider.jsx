import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Heading, Item } from "./HomeSlider.styled";

const HomeSlider = ({movies}) => {

  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div>
    <Heading>Trending today</Heading>
       <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 1s linear"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px">

        {movies.map(({ title, id, poster_path }) => {

          return (
            <Item key={id}>

              <Link to={`/movies/${id}`} state={{ from: "/" }}>
                {poster_path ? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}
                  <p className="title">{title}</p>
              </Link>
        </Item>


          )
        } )}
      </Carousel>
      </div>
  )
}

export default HomeSlider;
