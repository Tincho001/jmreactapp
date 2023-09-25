import React from 'react';
import { FooterContainer, FooterIcons } from './FooterStyles';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterIcons>
      <FaFacebook style={{ marginRight: '1rem' }}/>
      <FaGithub style={{ marginRight: '1rem' }}/>
      <FaLinkedin style={{ marginRight: '1rem' }}/>
      
      </FooterIcons>
      <p>&copy; 2023 JM TELEFONIA</p>
    </FooterContainer>
  );
};

export default Footer;
