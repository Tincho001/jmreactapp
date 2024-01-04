import React from 'react';

import { Box, Text, Image } from '@chakra-ui/react';

const PageNotFound = () => {
  return (
    <Box
      flexDirection='column'
      justifyContent={'center'}
      alignItems={'center'}
      mt={'15vh'}
      mb='35vh'
      p={4}
      display={{ md: 'flex' }}
    >
      <Text fontSize='2xl'>Lo sentimos esta pagina no existe =(</Text>
      <Image src='./images/logo.png' alt='' color='red' filter='auto' blur='5px' />
    </Box>
  );
};

export default PageNotFound;
