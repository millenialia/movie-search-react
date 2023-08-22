import styled from "styled-components";

export const Heading = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 26px;
`


export const Item = styled.div`

  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  >a{
  width: 170px;
  text-decoration: none;
  color: white;
  text-transform: uppercase;

  >img{
    width: 170px;
    height: 255px;
    transition: transform .3s linear;
    &:hover{
      transform: scale(1.03);
    }
    +p{
      overflow: auto;
      white-space: nowrap;
      &::-webkit-scrollbar {
        display: none; }
    }
  }

`
