import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  position: relative;
  padding: 25px 0;
  border-radius: 50px;
  box-shadow: 0px 0px 10px rgba(83,127,231);
  background-color: transperent;
  margin:16px auto;

  max-width: 1400px;

  > nav {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
  }
`;



export const Main = styled.main`

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
`;


