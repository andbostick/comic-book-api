import Comics from './comics';
import Card from 'react-bootstrap/Card'

function Cards({ heroData, loading }) {
    const apikey = '?ts=1626733053105&apikey=4371a2cae22c2af54b8aa31a00bc59f7&hash=c23153c39c8ecbe5db034516d96ff51e';
    const hero = heroData.data?.results[0];
    const comicData = hero?.comics.collectionURI + apikey;
    console.log(hero);
    // console.log(hero?.comics.collectionURI + apikey)

    return (
        <>
            <Card>
                <Card.Img variant="top" src={hero?.thumbnail.path +"."+hero?.thumbnail.extension} style={{ width: '100%', height:'60vh' }}/>
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
            <Comics comicData={comicData} />
        </>
    )
}

export default Cards;