
import Card from 'react-bootstrap/Card'

function Cards({ heroData, loading }) {
    
    const hero = heroData.data?.results[0];
    console.log(hero);
    
    return (
        // <p>yes</p>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={hero?.thumbnail.path +"."+hero?.thumbnail.extension} />
            <Card.Body>
                
                <Card.Title>{hero?.name}</Card.Title>
                
                <Card.Text>
                    {hero?.description}
                </Card.Text>
                
                <Card.Text>
                    {hero?.events.collectionURI}
                </Card.Text>
            </Card.Body>
        </Card>
        // <>
        //     {hero.results.map((d) => {
        //         return (
        //             <div>
        //                 <p>{d.name} </p>
        //                 <p>{d.description}</p>
        //             </div>)
        //     })}
            
        // </>
    )
}

export default Cards;