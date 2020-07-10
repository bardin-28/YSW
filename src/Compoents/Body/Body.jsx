import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import FilmItem from '../FilmItem/FilmItem';
import './Body.scss'
import FilmDetail from '../FilmDetail/FilmDetail';

const Body = () => {
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

    return (
        <div className="Body">
            <div className="container">
                <div className="filmsWrapper">
                    <Route exact path="/" render={
                        () => films.length > 0 ? <FilmItem films={films} /> :
                            <div className="body-loading">Loading...</div>
                    } />
                    <Route exact path="/:name" render={
                        () => <FilmDetail />
                    } />
                </div>
            </div>
        </div>
    )
}
export default Body