import React from 'react'
import '../../style.css'
import Aligot from "../../assets/images/aligot.jpg";
const Share = () => {
    return (
        <div className='Share'>
            <div className='Share__content'>
                <div className='Share__text'>
                    <h2>Partager un bon moment entre amis...</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, 
                        tempora praesentium veritatis hic blanditiis accusamus dolor cum velit sequi illo.</p>
                </div>
                <div className='Share__image'>
                    <img src={Aligot} alt="Bar with friends"/>
                </div>
            </div>
        </div>
    )
}

export default Share