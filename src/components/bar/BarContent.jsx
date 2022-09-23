import React from 'react'
import '../../style.css'
import Presentation from "../bar/Presentation"
import Games from "../bar/Games";
import Drink from "../bar/Drink";

const BarContent = () => {
    return (
        <>
            <Presentation/>
            <Games/>
            <Drink/>
        </>
        
    )
}

export default BarContent