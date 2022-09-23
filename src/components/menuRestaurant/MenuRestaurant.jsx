import React from 'react'
import '../../style.css'

import EatPicto from "../../assets/picto/burger.svg"

const MenuRestaurant = () => {
    return (

        <section className="menu">
            <div className="menu__title">
                <h2>Notre Carte</h2>
            </div>

            <div className="menu__container">

            <div className="menu__list" id="menu-restaurant">
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

                <li className="menu__list__item">Formules midi :</li>
                <li className="menu__list__item --price"></li>
                <li className="menu__list__item --list-point">Viande + accompagnement + dessert ou boisson</li>
                <li className="menu__list__item --price">15 €</li>
                <li className="menu__list__item --list-point">Viande + accompagnement + dessert + boisson</li>
                <li className="menu__list__item --price">17 €</li>
                <li className="menu__list__item">À la carte :</li>
                <li className="menu__list__item --price"></li>
                <li className="menu__list__item --list-point">Cheeseburgers</li>
                <li className="menu__list__item --price">14 €</li>
                <li className="menu__list__item --list-point">Viandes avec accompagnement</li>
                <li className="menu__list__item --price">14 €</li>
                <li className="menu__list__item --list-point">Salades</li>
                <li className="menu__list__item --price">11 €</li>

            </div>


            <a href="#menu-bar" className="menu__list__btn" id="menu-switch-btn">carte des boissons</a>



            <div className="menu__picto">
                <img src={EatPicto} alt="Burger Picto"/>
            </div>

            <div className="menu__picto --left-picto">
                <img src={EatPicto} alt="Burger Picto"/>
            </div>

        </div>
            <div className="switch__btn">
                <div className="switch__btn__link">
                    <a href="#menu-bar">Petite Soif ? Découvrez nos boissons !</a>
                </div>
            </div>
        </section>

    )
}

export default MenuRestaurant