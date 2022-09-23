import '../../style.css'
import PlancheSteak from "../../assets/images/planche-steak.jpg"
import Plat from "../../assets/images/plat.jpg"
import Burger from "../../assets/images/burger.jpg"
const Restaurant = () => {
    return(
        <>
            <section className="restaurant">
                <article className="restaurant__intro">
                    <img src={PlancheSteak}></img>
                    <span className="restaurant__intro__text">Venez prendre un bon repas</span>
                </article>
                <article className="restaurant__seconde">
                    <span className="restaurant__seconde__text">Partager un bon moment entre amis...</span>
                    <div class="restaurant__seconde__img">
                        <img src={Plat}></img>
                    </div>
                </article>
                <article className="restaurant__troisieme">
                    <img src={Burger}></img>
                    <div className="restaurant__troisieme__text">Dégustez nos spécialités</div>
                </article>
            </section>
        </>
    )
}

export default Restaurant