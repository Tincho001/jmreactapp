import React from 'react';
import { IncreaseStyled } from './IncreaseStyles';

const Increase = ({
  children,
  onClick = e => e.preventDefault(),
}) => {
  return (
    <IncreaseStyled whileTap={{ scale: 0.88 }} onClick={onClick}>
      {children}
    </IncreaseStyled>
  );
};

export default Increase;
