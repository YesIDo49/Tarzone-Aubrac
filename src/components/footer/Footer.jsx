import React from 'react'
import '../../style.css'
import FooterImg from "../../assets/images/Group 9.png"
import Instagram from "../../assets/images/Vector.png"
import Facebook from "../../assets/images/Vector (1).png"

const Footer = () => {
    return (
        <footer id="Contact">
            <div class="footer_contact">
        <h3>Contact</h3>
      
        <div class="footer_contact_barre">
        
        <div className="footer_contact_barre_text">
       <div class='footer_contact_barre_numéro'>
        <p>01 43 33 48 59</p><br /><br />
        <p>36 bd Pésaro 92000 NANTERRE</p>
     
        </div>
       <div class="footer_contact_barre_ouverture">
        <p>Ouvert tous les jours sauf le dimanche de 11h-14h30 et de 17h à 22h</p>
       </div>
       </div>
       </div>
       </div>
        
        </footer>


    )
}

export default Footer
