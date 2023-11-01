import React from 'react';


import {
  DescriptionSection,
  DescriptionSlogan,


  SloganImage,
} from './DescriptionStyles';

function Description() {
  return (
    
    <DescriptionSection>
      <DescriptionSlogan>
        JM Telefonía es una empresa familiar desde 2001 y siempre nos hemos
        preocupado por la seguridad de tu pantalla con distintos articulos de
        primera calidad como lo son nuestros vidrios templados con tecnologia 9D,
        los cuales mezclados con estilos unicos y modernos de TPU le damos un aspecto
        unico a tu celular, con amplia variedad de modelos, colores y hasta algunos diseños personalizados
        junto con otros accesorios utiles para vos y principalmente el
        cuidado y seguridad optima para tu celu.
        En JM no solo nos importa ofrecerte productos geniales, también queremos que tengas una experiencia de
        compra genial. 
        <p>Por eso, ofrecemos garantía en todos nuestros productos, devoluciones gratis y financiación para que puedas obtener 
        lo que necesitas sin preocuparte por el costo.
        Nos encanta lo que hacemos y esperamos que vos también disfrutes de nuestros productos tanto como nosotros. ¡Gracias por elegir JM!
        </p>
     

        
      </DescriptionSlogan>
    
      <SloganImage src='./images/security.png' alt =''/>


    </DescriptionSection>
  );
}

export default Description;
