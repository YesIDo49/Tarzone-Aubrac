import React from 'react'
import '../../style.css'
import DrinkBeer from "../../assets/images/drink-beer.png"
const Drink = () => {
    return (
        <div className='Drink Drink__flex'>
            <div className='Drink__image'>
                <img src={DrinkBeer} alt="Bar with friends"/>
            </div>
            <div className='Drink__text'>
                <h2>Trinquez après une dure journée</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, 
                    tempora praesentium veritatis hic blanditiis accusamus dolor cum velit sequi illo.</p>
            </div>
        </div>
    )
}

export default Drink