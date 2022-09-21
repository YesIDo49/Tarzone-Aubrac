import React from 'react'
import '../../style.css'
import Nav from "../nav/Nav";
import FooterHeader from "../../assets/images/wave-footer.svg"
import DrinkPicto from "../../assets/picto/drink.svg"
import EatPicto from "../../assets/picto/burger.svg"

const Header = () => {
    return (

        <header className="header">
            <Nav/>

            <div className="header__title">
                <h2 className="subtitle">Choisis ta vibe</h2>
            </div>

            <div className="header__choice">
                <a href="" className="header__choice__item">
                    <div className="choice__title">
                        <span className="subtitle">
                            time to
                        </span>
                        <h4>drink !</h4>
                    </div>
                    <div className="choice__picto">
                        <img src={DrinkPicto} alt=""/>
                    </div>
                </a>
                <div className="separator"></div>
                <a href="" className="header__choice__item">
                    <div className="choice__title">
                        <span className="subtitle">
                            time to
                        </span>
                        <h4>eat !</h4>
                    </div>
                    <div className="choice__picto">
                        <img src={EatPicto} alt=""/>
                    </div>
                </a>
            </div>
            <div className="header__footer">
                <img src={FooterHeader} alt="footer header"/>
            </div>
        </header>
    )
}

export default Header