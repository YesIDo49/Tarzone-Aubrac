import React from 'react'
import '../../style.css'
import Logo from '../../assets/logo/logo-full.png'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={Logo} alt="logo Aubrac Corner"/>
                <h3 className="subtitle">
                    "de la bière, de la viande et des copains"
                </h3>
            </div>

            <div className="navbar__menu">
                <ul className="navbar__menu__links">
                    <li><a href="">Notre carte</a></li>
                    <li><a href="">Horaires</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav