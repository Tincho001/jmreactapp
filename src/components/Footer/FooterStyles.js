import styled from 'styled-components';

export const FooterContainer = styled.footer`
height:90px;
text-align: center;
font-size: 1rem;
background: #000000;
opacity: 0.3;
@media (max-width: 992px) {
   display:flex;
   flex-direction: column;
  }
`;
export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1rem 0;
  font-size: 1.9rem;


`