import {
  Box,
  Image,
  Stack,
  Card,
  CardBody,
  Heading,
  Divider,
  Center,
  Flex,
  ButtonGroup,
  Button,
  useDisclosure,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, MinusIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart/cartSlice';
import { removeFromCart, removeProductCart } from '../../../redux/cart/cartSlice';

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
    <Box>
      <Card
        display='flex'
        flexDirection='row'
        overflow='hidden'
        variant='outline'
        size='sm'
        bg='brand.800'
        h='auto'
      >
        <SmallCloseIcon
          onClick={handleRemoveItem}
          bgColor='var(--magenta)'
          cursor={'pointer'}
          boxSize={6}
        />

  <Image
    maxW={{ base: '100px', md: '150px' }} 
    src={img}
    borderRadius='full'
    boxSize={{ base: '60px', md: '100px' }} 
    ml={{ base: '0', md: '10px' }} 
  />



        <Stack w='auto' h='100%'>
          <CardBody>
            <Heading size='sm' mb='20px' isTruncated>
              {title}
            </Heading>

            <ButtonGroup size='sm' isAttached variant='outline'>
              <Button
                onClick={() => dispatch(removeFromCart(id))}
                disabled={quantity === 1}
                leftIcon={quantity === 1 ? <DeleteIcon /> : <MinusIcon />}
                variant='outline'
                colorScheme='whiteAlpha'
              ></Button>

              <Button
                isDisabled
               
                variant='outline'
             
                color='white'
                as='b'
                height={'8'}
              >
                {quantity}
              </Button>

              <Button
                onClick={() => dispatch(addToCart({ img, title, price, id }))}
                variant='outline'
                colorScheme='whiteAlpha'
                leftIcon={<AddIcon />}
              ></Button>
            </ButtonGroup>
          </CardBody>
        </Stack>
        <Flex align='center' w='auto' h='100%' fontSize='xl'>
          $ {price}
        </Flex>
      </Card>
      <Center height='20px'>
        <Divider orientation='vertical' />
      </Center>
      <Popover
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
    </Box>
  );
};

export default ModalChakraCard;


