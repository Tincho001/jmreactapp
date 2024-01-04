// import { Formik } from 'formik';
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   FormHelperText,
//   InputGroup,
//   InputLeftElement,
//   Button,
//   Textarea,
// } from '@chakra-ui/react';
// import { formInitialValues } from '../../formik/initialValues';
// import { validationSchema } from '../../formik/validationSchema';
// import { PhoneIcon } from '@chakra-ui/icons';
// import React from 'react';

// const Contacto = () => {
//   return (
//     <Box
//       maxW='sm'
//       borderWidth='1px'
//       borderRadius='lg'
//       overflow='hidden'
//       mt={'20vh'}
//       mb='45vh'
//       p={6}
//       display={{ md: 'flex' }}
//     >
//       <Formik
//         initialValues={formInitialValues}
//         validationSchema={validationSchema}
//         onSubmit={(values, { resetForm }) => {
//           console.log(values);
//           resetForm();
//         }}
//       >
//         <FormControl>
//           <FormLabel>Nombre</FormLabel>
//           <Input name='name' label='Nombre' type='text' />
//           <FormHelperText mb='1vh'> Ingresa tu nombre</FormHelperText>
//           <FormLabel>E-Mail</FormLabel>
//           <Input type='email' label='Correo Electronico' />
//           <FormHelperText mb='1vh'>Ingresa tu mail</FormHelperText>

//           <InputGroup>
//             <InputLeftElement pointerEvents='none'>
//               <PhoneIcon color='gray.300' />
//             </InputLeftElement>
//             <Input type='cellphone' mb='2vh' />
//           </InputGroup>
//           <FormLabel>Dejanos tu mensaje</FormLabel>
//           <Textarea type='text' />

//           <Button mt={4} colorScheme='teal' type='submit'>
//             Contactar
//           </Button>
//         </FormControl>
//       </Formik>
//     </Box>
//   );
// };

// export default Contacto;

import { useFormik } from 'formik';
import {
  Box,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

export default function Contacto() {
  const navigate = useNavigate(); // Obtiene la función navigate

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Formato de correo electrónico no válido')
      .required('Campo requerido'),
    name: Yup.string()
      .min(5, 'El nombre debe tener al menos 5 caracteres')
      .max(10, 'El nombre no debe exceder los 10 caracteres')
      .required('Campo requerido'),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, 'El número de teléfono debe tener 10 dígitos')
      .required('Campo requerido'),
    textarea: Yup.string()
      .max(120, 'El texto no debe exceder los 120 caracteres')
      .required('Campo requerido'),
  });

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phoneNumber: '',
      textarea: '',
    },
    onSubmit: values => {
      validationSchema
        .validate(values)
        .then(() => {
          toast({
            title: 'Muchas Gracias ',
            description: 'Ya recibimos tu mensaje de contacto',
            status: 'info',
            duration: 5000,
            isClosable: false,
            
            
          });

          setTimeout(() => {
            navigate('/');
          }, 5000);

          formik.resetForm();
        })
        .catch(errors => {
          formik.setErrors(errors);
        });
    },
    validationSchema,
  });

  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      mt={'20vh'}
      mb='45vh'
      p={10}
      display={{ md: 'flex' }}
    >
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          isInvalid={formik.touched.name && formik.errors.name}
          mb='2vh'
        >
          <FormLabel htmlFor='name'>Nombre</FormLabel>
          <Input
            id='name'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={formik.touched.email && formik.errors.email}
          mb='2vh'
        >
          <FormLabel htmlFor='email'>Correo Electrónico</FormLabel>
          <Input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
          mb='2vh'
        >
          <FormLabel htmlFor='phoneNumber'>Número de Teléfono</FormLabel>
          <Input
            id='phoneNumber'
            name='phoneNumber'
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={formik.touched.textarea && formik.errors.textarea}
        >
          <FormLabel htmlFor='textarea'>Deja aquí tu comentario</FormLabel>
          <Textarea
            id='textarea'
            name='textarea'
            onChange={formik.handleChange}
            value={formik.values.textarea}
          />
          <FormErrorMessage>{formik.errors.textarea}</FormErrorMessage>
        </FormControl>

        <Button mt={4} type='submit' variant='outline' colorScheme='whiteAlpha'>
          Enviar
        </Button>
      </form>
    </Box>
  );
}
