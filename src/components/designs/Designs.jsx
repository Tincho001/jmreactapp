import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import {
  DesignsImage,
  DesignsParagraph,
  DesignsSection,
  DesignsSlogan,
  DesignsTextContainer,
  DesignsTitle,
} from "./DesignsStyles";
import { Divider } from "../globalComponents/GlobalComponents";


const Designs = () => {
  return (
    <>
      <DesignsSection >
        <DesignsSlogan>
          <DesignsTextContainer >
            <DesignsTitle >CREA TUS DISEÑOS PERSONALIZADOS</DesignsTitle>
            <DesignsParagraph >
              Podemos realizar la personalización de tu TPU, combinando colores,
              fotos, y cualquier cosa que se te ocurra en tu Case personalizado
            </DesignsParagraph>
          </DesignsTextContainer>
        </DesignsSlogan>
        <DesignsImage src="./images/fund.ip.jpg" alt="Logo react" />
      </DesignsSection>
      <Divider/>
    </>
  );
};

export default Designs;
AOS.init();