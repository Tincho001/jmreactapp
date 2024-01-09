import React from 'react';
import { Box, Flex, Text, } from '@chakra-ui/react';

import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as='footer' bgColor=' #000000;' opacity='0.4' color='white' p={4} width="100%" >
      <Flex justify='space-between' align='center'>
        <Text>&copy; 2023 JM TELEFONIA</Text>
        <Flex align='center'>
          <FaFacebook style={{ marginRight: '3rem' }} />
          <FaGithub style={{ marginRight: '3rem' }} />{' '}
          <FaLinkedin style={{ marginRight: '1rem' }} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
