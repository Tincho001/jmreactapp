import React from 'react';
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Center,
  Divider,
  Flex,
  ButtonGroup,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { addToCart } from '../../../redux/cart/cartSlice';
import {
  SmallCloseIcon,
  MinusIcon,
  AddIcon,
  DeleteIcon,
} from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  removeProductCart,
} from '../../../redux/cart/cartSlice';
import Increase from '../../UI/Increase/Increase';
import Count from '../../UI/Count/Count';

const ModalChakraCard = ({ img, title, id, price, quantity }) => {
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRemoveItem = () => {
    onOpen();
  };

  const handleConfirmation = () => {
    dispatch(removeProductCart({ id }));

    onClose();
  };

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        size='sm'
        bg='brand.800'
        h='135px'
      >
        <SmallCloseIcon
          onClick={handleRemoveItem}
          bgColor='var(--magenta)'
          cursor={'pointer'}
          boxSize={6}
        />
        <Flex align='center' w='300px' h='100%'>
          <Image
            maxW={{ sm: '150px' }}
            src={img}
            borderRadius='full'
            boxSize='100px'
            ml='10px'
          />
        </Flex>

        <Stack w='500px' h='100%'>
          <CardBody>
            <Heading size='sm' mb='20px'>
              {title}
            </Heading>

            <ButtonGroup size='sm' isAttached variant='outline'>
              <Increase onClick={() => dispatch(removeFromCart(id))}>
                {quantity === 1 ? <DeleteIcon /> : <MinusIcon />}
              </Increase>

              <Count>{quantity}</Count>

              <Increase
                onClick={() => dispatch(addToCart({ img, title, price, id }))}
              >
                <AddIcon />
              </Increase>
            </ButtonGroup>
          </CardBody>
        </Stack>
        <Flex align='center' w='90%' h='100%' fontSize='xl'>
          $ {price}
        </Flex>
      </Card>
      <Center height='20px'>
        <Divider orientation='vertical' />
      </Center>

      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverContent bg='brand.300'>
          <PopoverHeader fontWeight='semibold'>Confirmacion</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            ¿Estás seguro de que deseas quitar este producto del carrito?
          </PopoverBody>
          <PopoverFooter display='flex' justifyContent='flex-end'>
            <ButtonGroup size='sm'>
              <Button
                variant='outline'
                colorScheme='whiteAlpha'
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={handleConfirmation}>
                Quitar
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ModalChakraCard;
