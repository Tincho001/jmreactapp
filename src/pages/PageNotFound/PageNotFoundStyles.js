import styled from 'styled-components';

export const MessageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
  @media (max-width: 100px) {
    margin-top: 610px;
  }
`;

export const MessageError = styled.h1`
  font-size: 40px;
  text-align: center;
  @media (max-width: 100px) {
  }
`;
export const NotFoundImage = styled.img`
  width: 250px;
  height: 250px;
  filter: grayscale(100%);
  @media (max-width: 100px) {
    display: none;
  }
`;
