import React from 'react'
import '../../style.css'
import TopTriangle from "../../assets/images/top-triangle.svg"
import Billard from "../../assets/images/billard-with-friends.png";
const Games = () => {
    return (
        <div className='Games'>
            <div className='Games__content'>
                <div className='Games__text'>
                    <h2>Amusez-vous entre amis</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, 
                        tempora praesentium veritatis hic blanditiis accusamus dolor cum velit sequi illo.</p>
                </div>
                <div className='Games__image'>
                    <img src={Billard} alt="Bar with friends"/>
                </div>
            </div>
        </div>
    )
}

export default Games