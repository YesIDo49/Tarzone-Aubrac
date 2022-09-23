const MenuSwitch = () => {
     // let menuSwitchBtn = document.querySelector("#menu-switch-btn")
     let menuBar = document.querySelector("#menu-bar")
     let menuRestaurant = document.querySelector("#menu-restaurant")

    let hasSwitch = false

    if (hasSwitch == true){
        menuRestaurant.style.left = "initial"
        menuRestaurant.style.top = "initial"
        menuRestaurant.style.opacity = "1"

        menuBar.style.left = "17%"
        menuBar.style.top = "-100%"
        menuBar.style.opacity = "0"

        hasSwitch = false

        console.log("le bouton est " + hasSwitch)
    }
    else{
        menuBar.style.left = "initial"
        menuBar.style.top = "initial"
        menuBar.style.opacity = "1"

        menuRestaurant.style.left = "17%"
        menuRestaurant.style.top = "-100%"
        menuRestaurant.style.opacity = "0"

        hasSwitch = true

        console.log("le bouton est " + hasSwitch)

    }





}

export default MenuSwitch