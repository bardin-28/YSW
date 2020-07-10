import React from 'react';
import './FilmBlock.scss';
import { withRouter } from 'react-router-dom'


const FilmBlock = film => {
    return (
        <a className="filmBlock" onClick={() => {
            film.history.push(film.title)
        }}>
            <div className="filmCaption">
                <h3>{film.title}</h3>
                <div>
                    <p>
                        {film.director}
                    </p>
                    <p>
                        {film.release}
                    </p>
                </div>
            </div>
        </a >
    )

}
export default withRouter(FilmBlock)