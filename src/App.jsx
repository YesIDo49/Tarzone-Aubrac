import React from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import MenuRestaurant from "./components/menuRestaurant/MenuRestaurant";


const App = () => {
    return (
        <>
            <Header />
            <MenuRestaurant/>
        </>
    )
}

export default App