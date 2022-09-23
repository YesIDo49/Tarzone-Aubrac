import React from 'react'
import '../../style.css'

const OurProducts = () => {
    return (
        <section className="OurProduct products-section">
            <h2 className='section-title'>Nos Produits</h2>
            <div className='OurProduct__farmers-img'>
                <div className='OurProduct__position'>
                    <div className='OurProduct__floating-block'>
                        <p>Notre viande de boeuf vient directement de notre élevage en <span className='aubrac-name'>Aubrac</span> oú, le bien-être animal est notre priorité.</p>
                        <p>Elle est garantie filière Bleu Blanc Coeur. Nos animaux sont nourris au lin et au foin sans OGM ni antibiotiques préventifs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProducts