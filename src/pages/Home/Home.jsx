import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import CardsRecomendacion from '../../components/Recomendados/CardsRecomendacion';
import {
  Box,
  Heading,
  Highlight,
  Image,
  Flex,
  Button,
  Divider,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <Box
      justifyContent={'center'}
      alignItems={'center'}
      mt={'20vh'}
      marginY='10vh'
      marginX='1vh'
      
    >
      <Flex marginY='10vh' p={4} display={{ md: "flex" }}>
        <Heading
          as='h1'
          size='3xl'
          noOfLines={1}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          mt={{ base: 4, md: 0 }} ml={{ md: 6 }}
    
        >
          MAXIMA PROTECCION PARA TU TELEFONO
          <ChakraLink as={ReactRouterLink} to='/description'>
            <Button
              variant='outline'
              colorScheme='whiteAlpha'
              size='md'
              height='48px'
              width='300px'
              border='2px'
            >
              ¿Quienes somos?
            </Button>
          </ChakraLink>
        </Heading>

        <Image  maxW={{ base: '100%', sm: '500px' }} src='./images/logo.png' />
      </Flex>
      <Box
        
        flexDirection='column'
        justifyContent={'center'}
        alignItems={'center'}
        display={{ md: "flex" }}
      >
        <Divider orientation='horizontal' width={'30%'} />
        <Heading lineHeight='tall' marginY='30px'>
          <Highlight
            query={['RECOMENDACION']}
            styles={{ px: '5', py: '3', rounded: 'full', bg: 'brand.400' }}
            
          >
            NUESTRA RECOMENDACION
          </Highlight>
        </Heading>

        <CardsRecomendacion />
      </Box>
    </Box>
  );
};

export default Home;
