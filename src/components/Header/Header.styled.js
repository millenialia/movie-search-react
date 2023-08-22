import styled from "styled-components";
import { NavLink } from "react-router-dom";





export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBox = styled.header`

  padding: 10px 0;

  box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;


  background-color: transperent;
  margin: 10px auto;
  margin-bottom: 50px;

  max-width: 1400px;

  > nav {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
  }
`;


export const Link = styled(NavLink)`
  padding: 8px 16px;

  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  color: white;

  &.active {
    color: rgba(83,127,231);
  }
`

export const Form = styled.form`


>input{
  width: 200px;
  height: 40px;
  padding-left: 40px;
  border: none;
  border-bottom: 2px solid white;
  font-size: 20px;
  color: white;
  background-color: transparent;
  outline: none;

}

>input:focus{
  border-bottom: 1px solid white;
}


  button{
   width: 150px;
  height: 40px;
  font-size: 20px;
  color: white;
  background-color: transparent;
border: none;
cursor: pointer;
transition: all .3s linear;

&:hover{
color: rgba(83,127,231);
}
}
`

