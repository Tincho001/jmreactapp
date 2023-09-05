import Categorias from './components/Categorias/Categorias';

import CardsProductos from './components/Productos/CardsProductos';

import Designs from './components/designs/Designs';
import { Main } from './components/globalComponents/GlobalComponents';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Hero />
        <Designs />
        <Categorias />
        <CardsProductos />
      </Main>
      {/* footer */}
    </>
  );
}

export default App;
