import styled from "styled-components";

//react router
import { NavLink as Link } from "react-router-dom";

import {FaSearch} from 'react-icons/fa'

export const Nav = styled.nav`
  background: black;
  height: 50px;
  display: flex;
  justify-content: left;
  font-weight: 700;
`;
export const NavLink = styled(Link)`
  color: rgba(203,208,211,1);
  font-size: 1rem;
  display: flex;
  margin-left: 20px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  white-space: nowrap;
  color: rgba(203,208,211,1);

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaSearch)`
margin-top:1rem;
font-size:2rem;
transform:translate(-50%,-15%);
`
