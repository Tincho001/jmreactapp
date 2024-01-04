import styled from 'styled-components';

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  flex-direction:column; 
  grid-template-columns: repeat(auto-fit, 280px);
  row-gap: 2.5rem;
  width: 100%;
  padding: 6rem 0;
`;

export const ProductosCard = styled.div`
  background: rgb(67 73 77 / 39%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  height: 340px;
  border-radius: 5px;
  position: relative;
  padding-top: 50px;

  img {
    width: 150px;
  height: 160px;
  border-radius: 20%;
  font-size: 70px;
  font-weight: 300;
 
  position: absolute;
  top: -7px;
  background-size: cover;
  cursor: pointer;
 
  }
  h2 {
    font-weight: 800;
    margin-top: 70px;
  }
  p {
    
    color: #fff;
    font-size: ${props => props.fontSize};
    margin-top: 10px;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
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
