import React, { useState, useEffect } from 'react';
import './FilmDetail.scss';
import { withRouter } from 'react-router-dom';
import Starships from '../Starships/Starships.jsx';
import Planets from '../Planets/Planets.jsx';

const FilmDetail = props => {

    const swApiUrl = 'https://swapi.dev/api/films/';
    const [films, setFilms] = useState([])
    const filmsData = [];
    useEffect(() => {
        const getFilms = async () => {
            for (let i = 1; i <= 6; i++) {
                const response = await fetch(swApiUrl + i).then(res => res.json()).then((data) => { filmsData.push(data) })
            };
            setFilms(filmsData)
        }
        getFilms()
    }, []);
    let findCurrentFilm = films.filter((filmsItem, index) => {
        if (filmsItem.title === props.match.params.name) {
            return filmsItem
        }
    })
    const currentFilm = film => {
        return (
            <div className="currentFilm">
                <div className="about">
                    <img src={require('../../img/no-poster.jpg')} alt="no-poster" />
                    <h2>{film[0].title}</h2>
                    <p>Director: {film[0].director}</p>
                    <p>Producer: {film[0].producer}</p>
                </div>
                <div className="caption">
                    <div>
                        <h3>Корабли:</h3>
                        <Starships
                            data={film[0].starships}
                        />
                    </div>
                    <div>
                        <h3>Планеты:</h3>
                        <Planets
                            data={film[0].planets}
                        />
                    </div>
                </div>
            </div >
        )
    }

    return (
        <>
            {findCurrentFilm.length > 0 ? currentFilm(findCurrentFilm) : <div>Loading...</div>}
        </>
    )
}
export default withRouter(FilmDetail) 
