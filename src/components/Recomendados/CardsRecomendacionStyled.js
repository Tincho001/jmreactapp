import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: start;
  grid-template-columns: repeat(auto-fit, 380px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 3rem 0;
`;

export const Card = styled.div`
 background: rgb(67 73 77 / 39%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  height: 320px;
  border-radius: 5px;
  position: relative;
  padding-top: 50px;


  h2 {
    font-size:2rem;
    font-weight: 800;
    margin-top: 70px;
  }
  p {
    
    color: #fff;
    font-size: ${props => props.fontSize};
    margin-top: 10px;
  }
`;



export const CardImg = styled.img`
      width: 150px;
  height: 160px;
  border-radius: 20%;
  font-size: 100px;
  font-weight: 300;
  position: absolute;
  top: -30px;
  background-size: cover;
  cursor: pointer;
 
`;

export const CardText = styled.div`
    color: #fff;
    font-size: ${props => props.fontSize};
    margin-top: 10px;
`;

export const CardTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;

export const InfoCard = styled.p`
  margin: 0;
  color: #666;
  font-size: 1.4rem;
  padding: 4px;
`;

export const CardPrice = styled.span`
  font-weight: 600;
  font-size: 2rem;
color:white;
`;
