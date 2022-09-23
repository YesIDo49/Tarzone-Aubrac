import React from 'react'
import '../../style.css'
import Meat from "../../assets/images/meat.png"
const RestaurantPresentation = () => {
    return (
        <div id="Restaurant" className='RestaurantPresentation'>
            <div className='RestaurantPresentation__title'>
                <h2><span className="flicker-long">Restaurant</span> Zone</h2>
            </div>
            <div className='RestaurantPresentation__flex'>
                <div className='RestaurantPresentation__image'>
                    <img src={Meat} alt="Bar with friends"/>
                </div>
                <div className='RestaurantPresentation__text'>
                    <h2>Venez prendre un bon repas</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, 
                        tempora praesentium veritatis hic blanditiis accusamus dolor cum velit sequi illo.</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantPresentation