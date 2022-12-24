
let alternateStyle = document.querySelectorAll(".alternate-style")

function setActiveStyle(color){ 
    alternateStyle.forEach(style=>{
        if(color == style.getAttribute("title")){
            
            style.removeAttribute ("disabled")
            document.querySelector(".body").classList.remove("colorChange")
            
        }
        else{
            document.querySelector(".color-theme").classList.remove("theme-2")
            style.setAttribute("disabled","true")
        }
    })
}

function setActive(color){
    alternateStyle.forEach((style)=>{
        if(color == style.getAttribute("tilte")){
            style.removeAttribute("disabled")
        }else{
            document.querySelector(".body").classList.add("colorChange")
            style.setAttribute("disabled","true")
            
        }
    })
}