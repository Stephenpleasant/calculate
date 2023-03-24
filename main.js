function themeselector() {
    const header = document.queryselector("#header")
    const showcase = document.queryselector(".showcase")
    const selector = document.queryselector(".selector")
    const theme = document.queryselector(".theme")
    const sele = document.queryselector(".sele")
    const cal = document.queryselector(".cal")
    const button = document.querySelector("#button")
    const label = document.querySelector("#label")
    const section = document.querySelector(".section")
    const main = document.querySelector(".main")
    const section1 = document.querySelector(".section1")
    const section2 = document.querySelector(".section2")
    const section3= document.querySelector(".section3")
    const section4 = document.querySelector(".section4")
    const two= document.querySelector(".two")
    const colo= document.querySelector(".colo")
    const colo1= document.querySelector(".colo1")
    const up= document.querySelector(".up")
}

let option = "flex-start"
swipe.addEventListner("click", () => {
    switch  (option) {
        case "flex-start": {
            option = "center"
            theme2 ()
                break
            
        }
        case "center": {
            option = "flex-end"
            theme3 ()
            break
        
    }
    case "flex-end": {
        option = "flex-start"
        theme1 ()
        break
    }
    default: {
        console.error("This is an error")
    }
        
    }
    swipe.style.justifyContent = option
})
function theme1(){
body.style.background =
}
