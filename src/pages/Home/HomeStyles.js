import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (max-width: 992px) {
  }
`;

export const HomeContent = styled.div`

display: flex;

align-items: center;


@media (max-width: 992px) {
}

`

export const HomeSlogan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 65px;
  text-align: center;

  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

export const HomeImage = styled.img`
  width: 600px;
  height: 600px;

  @media (max-width: 992px) {
    display: none;
  }
`;
export const LinkStyled = styled(Link)`
  border: 1px solid white;
  padding: 10px;
  margin-top: 20px;
  color: var(--blue);
  font-weight: 400;
  font-size: 25px;
  cursor: pointer;
`;
export const RecomendadosWrapper = styled.section`
  margin-top: 5rem;
  width: 100%;

  h2 {
    font-weight: 400;
  }
`;