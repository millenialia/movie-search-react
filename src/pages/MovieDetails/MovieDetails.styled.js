import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Heading = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  color: white;
    font-size: 44px;
    margin-bottom: 13px;
    position: relative;
`
export const MovieContainer = styled.div`
margin-top: 20px;
display: flex;
gap: 30px;


>img{
  width: 300px;
  height: 450px;
  margin-top: -150px;
  margin-left: 20px;
  z-index: 1000000000;
}

>div{

  >p{
    font-size: 14px;
    width: 600px;
    margin-bottom: 40px;
    min-height: 80px;
  }
}
`
export const HeadingSecondary = styled.h2`
font-weight: 300;
font-size: 26px;
width: 200px;
margin: 0;
margin-bottom: 40px;
text-transform: uppercase;
box-shadow: rgba(240, 46, 170, 0.3) 0px 5px, rgba(240, 46, 170, 0.2) 0px 10px;
`
export const Genres = styled.ul`
list-style: none;
display: flex;
gap: 10px;
padding: 0;
align-items: flex-start;
>li{
  font-size: 14px;
}
`
export const List = styled.ul`
 list-style: none;
display: flex;
font-size: 20px;
gap: 10px;
padding: 0 25px;
`

export const Back = styled(NavLink)`
color: white;
font-size: 35px;
text-decoration: none;
transition: all .3s linear;
&:hover{
  color: rgba(83,127,231);
}
`

export const Hero = styled.div`
  height: 342px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  z-index:1;


  &:before{
      content:'';
  width:100%; height:100%;
  position:absolute;
  overflow: hidden;
  top:-55px; left:0;

  background: url(${props => props.$backgroundUrl}) no-repeat;
  filter: blur(3px) brightness(50%);
  background-size: cover;

  z-index:-1;

  transform: skewY(2.2deg);
  transform-origin:0 0;

  //chrome antialias fix
  -webkit-backface-visibility: hidden;
  }
`
export const Details = styled.div`
margin: 30px 0 0 50px;

`
export const Year = styled.h2`
  color: #C7C1BA;
  font-size: 23px;
  font-weight: 300;
  margin-bottom: 15px;
  margin-left: 15px;
`
export const Likes = styled.span`
margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
>svg{
  fill: yellow;
}
`
export const SimilarMoviesContainer = styled.div`
padding: 0 25px;
margin-top: 40px;
`
export const Link = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  &.active {
    box-shadow: rgba(240, 46, 170, 0.5) 0px 5px;
  }
`
