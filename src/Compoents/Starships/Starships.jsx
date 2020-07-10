import React, { useState, useEffect } from 'react';

const Starships = ({ data }) => {
    const starsData = []
    const [starships, setStarships] = useState([])

    useEffect(() => {
        const starshipData = data.map((e, i) => {
            const getStarships = async () => {
                const response = await fetch(e).then(res => res.json()).then((data) => { starsData.push(data) })
            };
            setStarships(starsData)
            getStarships()
        })
    }, [])
    const starData = starships.map((e, i) => {
        return (
            <div key={i}>
                {e.name}
            </div>
        )

    })

    return (
        <>
            {starData}
        </>
    )
}
export default Starships