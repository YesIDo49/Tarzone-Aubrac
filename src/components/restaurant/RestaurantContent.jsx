import React from 'react'
import '../../style.css'
import RestaurantPresentation from "../restaurant/RestaurantPresentation"
import Share from "../restaurant/Share";
import Specialities from "../restaurant/Specialities";

const RestaurantContent = () => {
    return (
        <>
            
            <RestaurantPresentation/>
            <Share/>
            <Specialities/>
        </>
        
    )
}

export default RestaurantContent