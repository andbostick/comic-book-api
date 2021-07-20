import react from 'react'

function Card({ heroData }) {
    const hero = heroData.data;
    console.log(heroData.data)
    return (
        <>
            {/* {hero.results.map((d) => {
                return(
                <p>{d.name} </p>)
            })}
             */}
        </>
    )
}

export default Card;