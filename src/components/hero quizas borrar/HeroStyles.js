import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroSection = styled.div`
  width: 50%;
  height: 76vh;
  align-items: center;
  display: flex;

  @media (max-width: 992px) {
  }
`;

export const HeroSlogan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  font-size: 65px;

  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;



export const HeroImage = styled.img`
  width: 500px;
  height: 500px;

  @media (max-width: 992px) {
    display: none;
  }
`;
export const LinkStyled = styled(Link)`
border: 1px solid white;
padding: 10px;
margin-top:20px;
  color: var(--blue);
  font-weight: 400;
  font-size: 25px;
  cursor: pointer;


`;
