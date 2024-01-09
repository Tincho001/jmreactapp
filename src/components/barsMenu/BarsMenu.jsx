import React, { useContext } from 'react';
import { Box, IconButton, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MenuContext } from '../../context/Context';

const BarsMenu = () => {
  const ctx = useContext(MenuContext);
  const iconColor = useColorModeValue('white', 'gray.800');

  return (
    <Box display={{ base: 'flex', md: 'none' }}>
      <IconButton
        icon={ctx.isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={ctx.toggleMenu}
        color={iconColor}
        variant='ghost'
        aria-label={ctx.isMenuOpen ? 'Close menu' : 'Open menu'}
      />
    </Box>
  );
};

export default BarsMenu;

// import React, { useContext } from 'react';
// import { MenuContext } from '../../context/Context';
// import { HambugerContainer, Icon } from './BarsMenuStyles';

// const BarsMenu = () => {
//   const ctx = useContext(MenuContext);

//   return (
//     <HambugerContainer onClick={ctx.toggleMenu}>
//       <Icon clicked={ctx.isMenuOpen}></Icon>
//     </HambugerContainer>
//   );
// };

// export default BarsMenu;
