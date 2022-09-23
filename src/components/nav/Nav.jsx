import React from 'react'
import '../../style.css'
import Logo from '../../assets/logo/logo-full.png'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                {/* <img src={Logo} alt="logo Aubrac Corner"/> */}
                <h1 navbar__h1>AUBRAC CORNER</h1>
                <h3 className="subtitle --navbar__subtitle">
                    "de
                    <span className="flicker-long">la bière</span>,
                    <span className="flicker-fast">la viande</span>
                    <span className="flicker-long">et des</span>
                    copains"
                </h3>
            </div>

            <div className="navbar__menu">
                <ul className="navbar__menu__links">
                    <li><a href="#Restaurant">Restaurant</a></li>
                    <li><a href="#Bar">Bar</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav