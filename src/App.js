import { useEffect, useState } from 'react';

import Cards from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search';
import Container from 'react-bootstrap/Container'


function App() {


  const [heroData, setHeroData] = useState([])
  const [loading, setLoading] = useState(false)
  // console.log(heroData)
 
  return (
    
    <Container>
      
      <Search setHeroData={setHeroData} setLoading={setLoading}/>
      {!loading ? <Cards heroData={heroData} loading={loading}/> : 'waiting'}

    </Container>
    
  );
}

export default App;
