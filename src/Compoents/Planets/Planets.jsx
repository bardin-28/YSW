import React, { useState, useEffect } from 'react';

const Planets = ({ data }) => {
    const planetData = []
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        const starData = data.map((e, i) => {
            const getPlanets = async () => {
                const response = await fetch(e).then(res => res.json()).then((data) => { planetData.push(data) })
            };
            setPlanets(planetData)
            getPlanets()
        })
    }, [])
    const planetsData = () => {
        const data = planets.map((e, i) => (
            <div key={i}>
                {e.name}
            </div>
        ))
        return data
    }

    return (
        <>
            {planetsData()}
        </>
    )
}

export default Planets