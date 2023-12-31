import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  InputGroup,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  InputRightElement,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Icon,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';

const ModalRegister = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <>
      <FaUserAlt onClick={onOpen}>Open Modal</FaUserAlt>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
       
      >
        <ModalOverlay    bg='blackAlpha.500'
        backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent bg='brand.900'    
      >
          <ModalHeader>Crea tu cuenta</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input ref={initialRef} placeholder='Nombre' />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder='Ej: jmtelefonia@email.com' />
            </FormControl>

            <FormControl>
              <FormLabel>Pasword</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Crea una clave'
                  errorBorderColor='red.300'
                />

                <InputRightElement>
                  <Icon
                    as={ViewIcon}
                    color='green.400'
                    onClick={handleClick}
                    cursor='pointer'
                  >
                    {show ? 'Hide' : 'Show'}
                  </Icon>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalRegister;
