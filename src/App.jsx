import React from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import MenuRestaurant from "./components/menuRestaurant/MenuRestaurant";
import MenuBar from "./components/menuBar/MenuBar";
import Restaurant from "./components/restaurant/Restaurant";
import OurProducts from './components/products_section/OurProducts';



const App = () => {
    return (
        <>
            <Header />
            <OurProducts></OurProducts>
            <Restaurant/>
            <MenuRestaurant/>
            <MenuBar/>
        </>
    )
}

export default App