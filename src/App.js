
import Footer from './components/Footer/Footer';
import { Main } from './components/globalComponents/GlobalComponents';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Routes from './routes/Routes';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
    <Routes/>
      <GlobalStyles />
      <Header />
      <Main>
        <Hero />
    
      </Main>
    <Footer/>
    </>
  );
}

export default App;
