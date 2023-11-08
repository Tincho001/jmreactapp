import React from 'react';

import {
  HomeContainer,
  HomeContent,
  HomeSlogan,
  HomeImage,
  LinkStyled,
  RecomendadosWrapper,
} from '../Home/HomeStyles';
import CardsRecomendacion from '../../components/Recomendados/CardsRecomendacion';


// import { Button, Card } from '@mui/material';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

// import { CardActionArea } from '@mui/material';

const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeSlogan>
          LA MAXIMA PROTECCION PARA TU TELEFONO
          <LinkStyled to='/description'>¿Quienes somos?</LinkStyled>
        </HomeSlogan>

        <HomeImage src='./images/logo.png' />
      </HomeContent>
<RecomendadosWrapper>
  <h2>HOY TE RECOMENDAMOS</h2>
<CardsRecomendacion/>
</RecomendadosWrapper>


      {/* <Card sx={{ maxWidth: 415 }}>
        {' '}
        
          <CardMedia
            component='img'
            height='140'
            image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
            alt=''
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActionArea>
            <Button size="small">ir a Tienda</Button>
  
        </CardActionArea>
      </Card> */}
    </HomeContainer>
  );
};

export default Home;
