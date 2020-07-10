import React, { useState } from 'react';
import FilmBlock from '../FilmBlock/FilmBlock.jsx';
import './FilmItem.scss';

const FilmItem = ({ films }) => {
    const sortedDate = () => {
        const sortByDate = films.sort((a, b) => {
            let dateA = new Date(a.release_date), dateB = new Date(b.release_date);
            return dateA - dateB
        });
        const film = sortByDate.filter((filmsItem, index) => index < 9).map((filmsItem, index) => (
            <FilmBlock
                key={index}
                title={filmsItem.title}
                director={filmsItem.director}
                release={filmsItem.release_date}
            />
        ))
        return film
    }
    const sortedName = () => {
        const sortByName = films.sort((a, b) => {
            let filmA = a.title.toLowerCase(), filmB = b.title.toLowerCase();
            if (filmA < filmB) {
                return -1
            } else if (filmA > filmB) {
                return 1
            }
            return 0
        });
        const film = sortByName.filter((filmsItem, index) => index < 9).map((filmsItem, index) => (
            <FilmBlock
                key={index}
                title={filmsItem.title}
                director={filmsItem.director}
                release={filmsItem.release_date}
            />
        ))
        return film
    }
    const [filter, setFilter] = useState(1)

    const handleChange = ({ target: { id, value } }) => {
        setFilter(value)
    }
    
    return (
        <>
            <div className="film-filter">
                <select id="film-sort" value={filter} onChange={handleChange}>
                    <option value="1">By year</option>
                    <option value="2">By name</option>
                </select>
            </div>

            <div className="wrapperFilm">
                {filter == 2 ? sortedDate() : sortedName()}
            </div>
        </>
    )

}
export default FilmItem