import React from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import MenuRestaurant from "./components/menuRestaurant/MenuRestaurant";
import MenuBar from "./components/menuBar/MenuBar";


const App = () => {
    return (
        <>
            <Header />
            <MenuRestaurant/>
            <MenuBar/>
        </>
    )
}

export default App