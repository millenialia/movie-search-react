import styled from "styled-components";
import ReactPaginate from "react-paginate";


export const Heading = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 24px;
  `

export const HeaderTopRated = styled.div`
  width:550px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const TopRatedList = styled.ul`
list-style: none;
margin: 0;
margin-bottom: 20px;
display: flex;
flex-direction: column;
gap: 10px;
height: 435px;
overflow: auto;
padding: 0;
  &::-webkit-scrollbar {
        display: none; }
    }
`
export const Item = styled.li`
width:550px;
min-height:150px;
position: relative;

  >a{
    text-decoration: none;
    color: white;
    >div{
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      background-color: rgba(0,0,0,0.5);
      // border-radius: 5px;
      &:hover{
        background-image: linear-gradient(rgba(83,127,231, 0.5) 0%, rgba(240, 46, 170, 0.5) 100%);
      }
    }

}

&:before{
  z-index:-1;
  content:'';
  width:100%; height:100%;
  position: absolute;
  overflow: hidden;
  background: url(${props => props.$backgroundUrl}) no-repeat;
  // filter: blur(2px) brightness(90%);
  background-size: cover;
}
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
export const StyledReactPaginate = styled(ReactPaginate)`
cursor: pointer;
list-style: none;
display: flex;
gap: 20px;
font-size: 24px;
>.btn{
  padding: 5px;
   &:hover{
    box-shadow: rgba(240, 46, 170, 0.5) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px;
  }

}
>.page-item-none{
  display: none;

}
`
