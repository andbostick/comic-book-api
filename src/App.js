import { useEffect, useState } from 'react';

import Card from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search';
import Container from 'react-bootstrap/Container'


function App() {


const [heroData, setHeroData] = useState([])

 
  return (
    
    <Container>
      
      <Search setHeroData={setHeroData} />
      <Card heroData={heroData} />

    </Container>
    
  );
}

export default App;
