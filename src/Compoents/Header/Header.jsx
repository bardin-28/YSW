import React from 'react';
import './Header.scss';

const Header = () => {
    const search = () => {
        const searchIco = document.getElementsByClassName('hat__search-ico');
        const searchInput = document.getElementsByClassName('hat__search-input');
        console.log('поиск отработал', { searchIco });
        searchIco[0].classList.add('d-none');
        searchInput[0].classList.remove('d-none');
    }
    return (
        <div className="header">
            <div className="container">
                <div className="hat">
                    <div className="hat__logo">
                        <h1>
                            Star
                            <span>Wars</span>
                        </h1>
                    </div>
                    <div className="hat__search">
                        <i className="fas fa-search hat__search-ico" onClick={search}></i>
                        <input type="text" className="hat__search-input d-none" placeholder="Поиск" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header; 