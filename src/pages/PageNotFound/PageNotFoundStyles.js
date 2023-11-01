import styled from 'styled-components';

export const MessageSection = styled.div`
height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 412px) {
    margin-top: 220px;
  }
`;

export const MessageError = styled.h1`
  @media (max-width: 100px) {
  }
`;
export const NotFoundImage = styled.img`
  width: 260px;
  height: 260px;

  filter: grayscale(100%);
  @media (max-width: 412px) {
  }
`;
