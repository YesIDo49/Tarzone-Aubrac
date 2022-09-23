import React from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import OurProducts from './components/products_section/OurProducts';


const App = () => {
    return (
        <>
            <Header />
            <OurProducts></OurProducts>
        </>
    )
}

export default App