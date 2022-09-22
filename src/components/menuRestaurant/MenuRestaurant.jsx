import React from 'react'
import '../../style.css'

import EatPicto from "../../assets/picto/burger.svg"

const MenuRestaurant = () => {
    return (

        <section className="menu">
            <div className="menu__title">
                <h2>Notre Carte</h2>
            </div>

            <div className="menu__list">
                <div className="menu__list__title">
                    <h3>Restauration</h3>
                </div>
                <div className="menu__list__title --price">
                    <h3>Tarifs</h3>
                </div>

                <li className="menu__list__item">Planche Mixte</li>
                <li className="menu__list__item --price">15 €</li>
                <li className="menu__list__item">Tapas Auvergnats</li>
                <li className="menu__list__item --price">7 €</li>
                <li className="menu__list__item">Aligot filant</li>
                <li className="menu__list__item --price">4 €</li>
                <li className="menu__list__item">Patates aux herbes</li>
                <li className="menu__list__item --price">4 €</li>

                <a href="" className="menu__list__btn">carte des boissons</a>
            </div>

            <div className="menu__picto">
                <img src={EatPicto} alt="Burger Picto"/>
            </div>

            <div className="menu__picto --left-picto">
                <img src={EatPicto} alt="Burger Picto"/>
            </div>
        </section>
    )
}

export default MenuRestaurant