

function Card({ heroData }) {
    const hero = heroData.data;
    console.log(heroData)
    return (
        <>
            {hero.results.map((d) => {
                return (
                    <div>
                        <p>{d.name} </p>
                        <p>{d.description}</p>
                    </div>)
            })}
            
        </>
    )
}

export default Card;