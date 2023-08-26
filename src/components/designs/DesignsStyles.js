import styled from "styled-components";

export const DesignsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  position: relative;
  height: 70vh;
`;

export const DesignsSlogan = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 30px;
  width: 500px;

  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;
export const DesignsTextContainer = styled.div`
  max-width: max(80%, 500px);
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const DesignsTitle = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 45px;
  line-height: 45px;
  color: white;
`;

export const DesignsParagraph = styled.p`
  font-size: 18px;
  font-weight: 400px;
  line-height: 30px;
  color: white;
`;

export const DesignsImage = styled.img`
  height: 300px;
  margin-top: 40px;
  margin-bottom: 20px;
  @media (max-width: 992px) {
    height: 200px;
  }
`;
