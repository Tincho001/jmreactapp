import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  Button,
  Divider,
  Text,
  Box,
  Spacer,
} from '@chakra-ui/react';
import { formatPrice } from '../../../utils';
import { useDisclosure } from '@chakra-ui/react';
import { TfiShoppingCart, TfiShoppingCartFull } from "react-icons/tfi";
import ModalChakraCard from './ModalChakraCard';
import { useSelector } from 'react-redux';


const ModalChakra = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems } = useSelector(state => state.cart);

  const btnRef = React.useRef();

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <>
      {cartItems.length === 0 ? (
        <TfiShoppingCart ref={btnRef} onClick={onOpen} />
      ) : (
        <TfiShoppingCartFull ref={btnRef} onClick={onOpen}/>
      )}

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'
      >
        <DrawerOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        <DrawerContent bg='brand.300'>
          <DrawerCloseButton />
          <DrawerHeader>Tus Compras</DrawerHeader>

          <DrawerBody>
            {cartItems.length ? (
              cartItems.map(item => <ModalChakraCard key={item.id} {...item} />)
            ) : (
              <p>Suma productos y consiguelos!</p>
            )}
          </DrawerBody>
          <Divider />

          <DrawerFooter direction='column-reverse'>
            <Box p='4'>
              <Text fontSize='3xl' as='b'>
                TOTAL :
              </Text>
            </Box>
            <Spacer />
            <Box p='4'>
              <Text fontSize='3xl'>{formatPrice(totalPrice)}</Text>
            </Box>
          </DrawerFooter>

          <Button colorScheme='blue'>Comprar</Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ModalChakra;
