import React from 'react'
import '../../style.css'

import DrinkPicto from "../../assets/picto/drink.svg"

const MenuBar = () => {
    return (

        <section className="menu">
            <div className="menu__title">
                <h2>Notre Carte</h2>
            </div>

            <div className="menu__container">


            <div className="menu__list" id="menu-bar">
                <div className="menu__list__title">
                    <h3>Boissons</h3>
                </div>
                <div className="menu__list__title">
                    <h3></h3>
                </div>

                <li className="menu__list__item">Pinte de blonde</li>
                <li className="menu__list__item">Bière de bouteille</li>
                <li className="menu__list__item">Verre de vin</li>
                <li className="menu__list__item">Bouteille de vin</li>
                <li className="menu__list__item">Cocktail</li>
                <li className="menu__list__item">Cidre</li>
                <li className="menu__list__item">Demi de blonde</li>
                <li className="menu__list__item">Soft</li>
                <li className="menu__list__item">Pinte de Chouffe</li>
                <li className="menu__list__item">Bouteille de Champagne</li>
                <li className="menu__list__item">Demi de Chouffe</li>


            </div>

            <a href="#menu-restaurant" className="menu__list__btn" id="menu-switch-btn">carte des repas</a>



            <div className="menu__picto --drink">
                <img src={DrinkPicto} alt="Drink Picto"/>
            </div>

            <div className="menu__picto --left-drink">
                <img src={DrinkPicto} alt="Drink Picto"/>
            </div>

        </div>
            <div className="switch__btn">
                <div className="switch__btn__link">
                    <a href="#menu-restaurant">Petite Faim ? Découvrez nos formules midi !</a>
                </div>
            </div>
        </section>

    )
}

export default MenuBar