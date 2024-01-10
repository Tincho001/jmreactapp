import React, { useState } from 'react';
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
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { formatPrice } from '../../../utils';
import { useDisclosure } from '@chakra-ui/react';
import { TfiShoppingCart, TfiShoppingCartFull } from 'react-icons/tfi';
import ModalChakraCard from './ModalChakraCard';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../../redux/cart/cartSlice';

const ModalChakra = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  const toast = useToast();

  const btnRef = React.useRef();

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  const handleCompra = () => {
    if (cartItems.length > 0) {
      setIsAlertDialogOpen(true);
    }
  };

  const handleConfirmCompra = () => {
    dispatch(clearCart());

    toast({
      title: 'GRACIAS POR TU COMPRA',
      description: 'VUELVE PRONTO!',
      status: 'info',
      duration: 5000,
      isClosable: true,
    });

    onClose();
    setIsAlertDialogOpen(false);
  };

  const handleCancelCompra = () => {
    setIsAlertDialogOpen(false);
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <TfiShoppingCart ref={btnRef} onClick={onOpen} />
      ) : (
        <TfiShoppingCartFull ref={btnRef} onClick={onOpen} />
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
              <Text>Suma productos!! Aun no tenes ninguno =( </Text>
            )}
          </DrawerBody>
          <Divider />

          <DrawerFooter direction='column-reverse' p={'1'}>
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

          <Button
            colorScheme='blue'
            onClick={handleCompra}
            isDisabled={cartItems.length === 0}
          >
            Comprar
          </Button>
        </DrawerContent>
      </Drawer>

      <AlertDialog
        isOpen={isAlertDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={handleCancelCompra}
      >
        <AlertDialogOverlay >
          <AlertDialogContent bg='brand.400'  >
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Confirmar Compra
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Estás seguro de que deseas confirmar tu compra?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleCancelCompra}>
                Cancelar
              </Button>
              <Button colorScheme='blue' onClick={handleConfirmCompra} ml={3}>
                Confirmar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ModalChakra;
