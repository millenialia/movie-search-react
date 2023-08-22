import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Item, HeadingSecondary } from "./SimilarSlider.styled";

const SimilarSlider = ({movies, location}) => {

  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 14
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

  return (
    <div>
      <HeadingSecondary>Similar movies</HeadingSecondary>
       <Carousel
        swipeable={false}
        draggable={false}
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

              <Link to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  {poster_path ? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}

                <p>{title}</p>
              </Link>
        </Item>


          )
        } )}
      </Carousel>
      </div>
  )
}

export default SimilarSlider;
