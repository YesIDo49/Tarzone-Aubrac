import React from 'react'
import '../../style.css'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="" alt="logo Aubrac Corner"/>
                <span className="subtitle">
                    "de la bière, de la viande et des copains"
                </span>
            </div>

            <div className="navbar__menu">
                <ul className="navbar__menu__links">
                    <li>Notre carte</li>
                    <li>Horaires</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav