import styled from "styled-components";
import ReactPaginate from "react-paginate";


export const Heading = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
`

export const List = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
column-gap: 5px;
row-gap: 15px;
justify-content: center;

> li{
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  >a{
  width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  color: white;
  >img{
    width: 250px;
    height: 372px;
  }
  }


}

`


export const StyledReactPaginate = styled(ReactPaginate)`
list-style: none;
     display: flex;
     gap: 15px;
     flex-wrap: nowrap;
     align-items: center;
     justify-content: center;
     font-size: 26px;
     color: white;
     margin: 50px auto;
     cursor: pointer;
     >.active{

      box-shadow: rgba(240, 46, 170, 0.5) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px;
      padding: 5px;
     }
`;
