import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button'


function Search({ setHeroData, setLoading }) {
    
    const [searchInput, setSearchInput] = useState('captain america')
    const [query, setQuery] = useState('')
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };    

    useEffect(() => {
        // setLoading(true);

        
           fetch(`https://gateway.marvel.com/v1/public/characters?ts=1626733053105&apikey=4371a2cae22c2af54b8aa31a00bc59f7&hash=c23153c39c8ecbe5db034516d96ff51e&name=${searchInput}`, requestOptions)
                .then(response => response.json())
                .then(response => {
                    setHeroData(response)
                    console.log('fetched')
                })
                .then(setLoading(false))
                .catch(err =>
                    console.log('error', err))
        
        
        
    }, [searchInput]);
    
    return (
        <Form >
            <Form.Group className="mb-3" >
                <Form.Label>Search For A Comic</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter A Name"
                    value={query}
                    onChange={event => setQuery((event.target.value))} />
                
                <Button onClick={() => (setSearchInput(query))}>Submit</Button>
            </Form.Group>
        </Form>
    )
}

export default Search;