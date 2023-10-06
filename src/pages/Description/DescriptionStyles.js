import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DescriptionSection = styled.div`
  width: 50%;
  height: 76vh;
  align-items: center;
  display: flex;

  @media (max-width: 992px) {
  }
`;



export const DescriptionSlogan = styled.div`
   display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  font-size: 25px;

  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

export const DescriptionImage = styled.img`
  width: 50%;

  @media (max-width: 992px) {
    display: none;
  }
`;
export const LinkStyled = styled(Link)`
  margin-top: 20px;
  color: var(--blue);
  font-weight: 400;
  font-size: 35px;
  cursor: pointer;
`;
