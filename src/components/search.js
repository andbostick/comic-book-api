import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button'


function Search({ setHeroData }) {
    
    const [searchInput, setSearchInput] = useState('hulk')
    const [query,setQuery] = useState(' ')
    useEffect(() => {
    
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
           
          fetch(`https://gateway.marvel.com/v1/public/characters?ts=1626733053105&apikey=4371a2cae22c2af54b8aa31a00bc59f7&hash=c23153c39c8ecbe5db034516d96ff51e&name=${searchInput}`, requestOptions)
            .then(response => response.json())
            .then(response => {
              // console.log(response)
              setHeroData(response)
            })
            .catch(err =>
            console.log('error', err))
          
      
    
    }, [searchInput]);

    function handleSubmit(e)  {
        e.preventDefault();
       
        console.log(searchInput);
        
    }

    function handleChange(e) {
        setSearchInput(e.target.value)
       
    }
    
    return (
        <Form >
            <Form.Group className="mb-3" >
                <Form.Label>Search For A Comic</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter A Name"
                    value={query}
                    onChange={event => setQuery((event.target.value))} />
                
                <Button onClick={() => setSearchInput(query)}>Submit</Button>
            </Form.Group>
        </Form>
    )
}

export default Search;