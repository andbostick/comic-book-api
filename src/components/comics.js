import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Comics({ comicData }) {
    const [comicList, setComicList] = useState([])

    // console.log(comicData)
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    useEffect(() => {
        fetch(comicData, requestOptions)
        .then(response => response.json())
        .then(response => {
            setComicList(response)
            console.log('fetched')
            
        })
        .catch(err =>
            console.log('error', err))


    },[comicData])
    console.log(comicList)
    
    return (
        <Row xs={1} md={2} className="g-4">
            {comicList.data?.results.map(d => {
                return (
                    <Col>
                        <Card className={d.id}>
                            <Card.Img variant="top" src={d.thumbnail.path + '.' + d.thumbnail.extension} style={{ height: '450px' }}/>
                        <Card.Body>
                                <Card.Title>{d.title}</Card.Title>
                                <Card.Text>
                            Description: 
                            {d.description}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                )
        })}
        </Row>
    )
}

export default Comics;