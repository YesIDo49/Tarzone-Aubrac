import React from 'react'
import Header from "./components/header/Header";
import BarContent from "./components/bar/BarContent";
import RestaurantContent from "./components/restaurant/RestaurantContent";
import Footer from "./components/footer/Footer";


const App = () => {
    return (
        <>
            <Header/>
            <BarContent/>
            <RestaurantContent/>
        </>
    )
}

export default App