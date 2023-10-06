import React from 'react';

import { HeroImage, HeroSection, HeroSlogan, LinkStyled } from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroSlogan>
        LA MAXIMA PROTECCION PARA TU TELEFONO
        <LinkStyled to='/description'>¿Quienes somos?</LinkStyled>
      </HeroSlogan>

      <HeroImage src='./images/logo.png' alt='Logo react' />
    </HeroSection>
  );
};

export default Hero;
