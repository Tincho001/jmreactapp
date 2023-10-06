import React from 'react';
import {
  DescriptionSection,
  DescriptionSlogan,
  LinkStyled,
  DescriptionImage,
} from './DescriptionStyles';

function Description() {
  return (
    
    <DescriptionSection>
      <DescriptionSlogan>
        JM Telefonia es una empresa familiar desde 2001 y siempre nos hemos
        preocupado por la seguridad de tu pantalla con distintos articulos de
        primera calidad como lo son nuestros vidrios templados con tecnologia 9D,
        los cuales mezclados con estilos unicos y modernos de TPU le damos un aspecto
        unico a tu celular, con amplia variedad de modelos, colores y hasta algunos diseños personalizados
        junto con otros accesorios utiles para vos y principalmente el
        cuidado y seguridad optima para tu celu
        <LinkStyled to='/'>
          HOME
        </LinkStyled>
      </DescriptionSlogan>

      <DescriptionImage src='./images/logo.png' alt='Logo react' />
    </DescriptionSection>
  );
}

export default Description;
