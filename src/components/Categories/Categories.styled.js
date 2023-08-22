import styled from "styled-components";




export const List = styled.ul`

padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
column-gap: 20px;
row-gap: 25px;
justify-content: center;
margin-bottom: 20px;
> li{
  width: 120px;

  >a{
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  color: white;

  }


}

`

export const Button = styled.a`
  cursor: pointer;
  display: block;
  padding: 5px 6px;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  border: 1px rgba(83,127,231) solid;
  border-image: linear-gradient(rgba(83,127,231) 0%, rgb(240, 46, 170) 100%);
  border-image-slice: 1 1 1 1;
  background-image: transparent;
  transition: all .3s linear;
  box-shadow: rgba(240, 46, 170, 0.3) 0px 5px, rgba(240, 46, 170, 0.1) 0px 10px;



   &:hover {
      transform: scale(1.1);
      box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
      background-image: linear-gradient(rgba(83,127,231) 0%, rgb(240, 46, 170) 100%);
    }
  }

`

