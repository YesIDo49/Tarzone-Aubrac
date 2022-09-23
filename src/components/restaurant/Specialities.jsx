import React from 'react'
import '../../style.css'
import Burger from "../../assets/images/burger.png"
const Specialities = () => {
    return (
        <div className='Specialities Specialities__flex'>
            <div className='Specialities__image'>
                <img src={Burger} alt="Bar with friends"/>
            </div>
            <div className='Specialities__text'>
                <h2>Dégustez nos spécialités</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, 
                    tempora praesentium veritatis hic blanditiis accusamus dolor cum velit sequi illo.</p>
            </div>
        </div>
    )
}

export default Specialities