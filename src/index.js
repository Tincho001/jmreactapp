import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { MenuProvider } from './context/Context';
import { extendTheme } from '@chakra-ui/react';

// index.js (o cualquier otro archivo donde necesitas importar store y persistor)
import { persistor, store } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from './styles/GlobalStyles';

const theme = extendTheme({
  fonts: {
    heading: `'Gruppo', sans-serif`,
    body: `'Gruppo', sans-serif`,
    Box: `'Gruppo', sans-serif`,
  },
  colors: {
    brand: {
      100: '#f7fafc',
      200: '#5988FF',
      300: 'var(--bg-img), var(--black)',
      400: '#4A5568',
      500: '#2B6CB0',
      900: '#1a202c',
      800: 'var(--bg-cards)',
      600: '#0000ff',
      700: 'var(--bg-desc)',
      
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <Fonts />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MenuProvider>
          <App />
        </MenuProvider>
      </PersistGate>
    </Provider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
