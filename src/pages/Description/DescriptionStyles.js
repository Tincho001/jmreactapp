import styled from 'styled-components';


export const DescriptionSection = styled.div`
display: flex;
align-items: center;
flex-direction: row-reverse;
margin-top: 20vh;
padding: 5vh;

  @media (max-width: 992px) {
  }
`;



export const DescriptionSlogan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 32px;
  text-align: justify;


  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

export const SloganImage = styled.img`
width: 450px;
height: 450px;

@media (max-width: 992px) {
    display: none;
  }

`


