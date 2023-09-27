import React from 'react';
import { FooterContainer, FooterIcons } from './FooterStyles';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterIcons>
      <FaFacebook style={{ marginRight: '3rem' }}/>
      <FaGithub style={{ marginRight: '3rem' }}/>
      <FaLinkedin style={{ marginRight: '1rem' }}/>
      
      </FooterIcons>
      <p>&copy; 2023 JM TELEFONIA</p>
    </FooterContainer>
  );
};

export default Footer;
