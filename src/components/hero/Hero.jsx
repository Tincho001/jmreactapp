import React from "react";

import {
  HeroImage,
  // HeroParagraph,
  HeroSection,
  HeroSlogan,
  HeroTextContainer,
  HeroTitle,
} from "./HeroStyles";


const Hero = () => {
  return (
    <>
      <HeroSection src= "https://integradorjs-gray.vercel.app/assets/img/fondo1.png">
        <HeroSlogan>
          <HeroTextContainer>
            <HeroTitle>LA MAXIMA PROTECCION PARA TU TELEFONO</HeroTitle>
            {/* <HeroParagraph>
              En JM Telefonia nos preocupamos por la seguridad de tu pantalla
              con vidrios templados y tecnologia 9D, mezclados con estilos
              modernos de tu TPU y de excelente calidad para tu celular, con
              amplia variedad de modelos, colores y algunos otros accesorios
              utiles para vos...
            </HeroParagraph> */}
          </HeroTextContainer>
       
        </HeroSlogan>
        <HeroImage src="./images/logo.png" alt="Logo react" />
      </HeroSection>
          </>
  );
};

export default Hero;
