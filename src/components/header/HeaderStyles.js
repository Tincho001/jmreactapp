import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 80px 0 50px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  background-color: #131415;
  background-image: var(--bg-img);

  @media (max-width: 992px) {
    padding: 0 50px 0 10px;
  }
`;

export const Logo = styled.img`
  height: 160%;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    position: absolute;
    background-color: var(--black);
    background-image: var(--bg-img);
    flex-direction: column;
    top: 100px;
    right: 0;
    width: 100%;
    height: calc(70vh - 100px);
    z-index: 5;
    transition: all 0.4s ease-in-out;
    transform: ${props =>
      props.isOpen ? 'translateX(0)' : 'translateX(200%)'};
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  font-size: 22px;
  cursor: pointer;

  &::after {
    content: '';
    height: 0.5px;
    width: 100%;
    background: var(--white);
    position: absolute;
    bottom: -4px;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.15s ease;
  }

  &:hover::after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;

export const CartNavStyled = styled.div`
  position: relative;
  font-size: 24px;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;
    top: -20px;
    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: black;
    font-size: 0.9rem;
  }

`;

export const NavLinkContact =  styled(NavLink)`

position: relative;
font-size: 25px;
cursor: pointer;


`


