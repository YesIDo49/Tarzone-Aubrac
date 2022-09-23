import React from 'react'
import '../../style.css'
import BarFriends from "../../assets/images/bar-friends.png"
const Presentation = () => {
    return (
        <div className='Presentation'>
           <div className='Presentation__title'>
                <h2 className='flicker-long'>Bar Zone</h2>
           </div>
           <div className='Presentation__flex'>
                <div className='Presentation__image'>
                        <img src={BarFriends} alt="Bar with friends"/>
                    </div>
                    <div className='Presentation__text'>
                        <h2>Venez pour un afterwork</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, 
                            tempora praesentium veritatis hic blanditiis accusamus dolor cum velit sequi illo.</p>
                    </div>
           </div>
        </div>
    )
}

export default Presentation