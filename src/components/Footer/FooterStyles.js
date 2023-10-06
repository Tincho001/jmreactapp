import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 90px;
  width:100%;
  text-align: center;
  font-size: 1rem;
  background: #000000;
  opacity: 0.5;
  /* position: fixed;
bottom: 0; */

 
 
  @media (max-width: 992px) {
    position: fixed;
  bottom: 0;
  }
`;
export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1rem 0;
  font-size: 1.9rem;
`;
