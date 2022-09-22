import React from 'react'
import '../../style.css'
import FooterImg from "../../assets/images/Group 9.png"
import Instagram from "../../assets/images/Vector.png"
import Facebook from "../../assets/images/Vector (1).png"

const Footer = () => {
    return (
        <footer>
        <div>
            <img class="footer_img" src={FooterImg} alt=""  />
        </div>
        <div class="footer_text">
            <div class="footer_text_informations">
                <h3>Nos informations</h3>
                <p>36 boulevard de Pesaro, 92000</p><br />
                <p>NANTERRE</p><br />
                <p>01 40 72 70 00, aubrac@mail.com</p>
            </div>
            <div className="footer_text_ouvert">
                <h3>Ouvert</h3>
                <p>Lundi au Dimanche: 12h à 14h30 - 19h30 à 23h</p>
            </div>
            <div className="footer_text_reseaux">
                <h3>Suivez nous sur</h3>
               <a href=""><img src={Instagram} alt=""  /></a>
               <a href=""><img src={Facebook} alt=""  /></a>
            </div>
        </div>
        </footer>


    )
}

export default Footer
