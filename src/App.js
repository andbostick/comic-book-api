import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/card';


function App() {

const [heroData, setHeroData] = useState([])

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://gateway.marvel.com/v1/public/characters?ts=1626733053105&apikey=4371a2cae22c2af54b8aa31a00bc59f7&hash=c23153c39c8ecbe5db034516d96ff51e',
      headers: { 
        'Content-Type': 'application/json'
      }
    };

    axios(config)
      .then(function (response) {
      setHeroData(response.data)
      // console.log(heroData.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }, []);
  return (
    <div className="App">
      <div>
        <Card heroData={heroData}/>
      </div>
    </div>
  );
}

export default App;
