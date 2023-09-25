import styled from 'styled-components';

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 6rem 0;
`;

export const ProductosCard = styled.div`
  background: var(--dark-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  height: 270px;
  border-radius: 5px;
  position: relative;
  padding-top: 50px;

  img {
    width: 130px;
  height: 130px;
  border-radius: 20%;
  font-size: 70px;
  font-weight: 300;
  color: var(--grey);
  position: absolute;
  top: -20px;
  background-size: cover;
  cursor: pointer;
 
  }
  h2 {
    font-weight: 700;
    margin: 0;
  }
  p {
    
    color: #fff;
    font-size: ${props => props.fontSize};
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.span`
  font-weight: 600;
  font-size: 2rem;
color:white;
 
`;
export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
`;
