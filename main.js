
function disableMouseScroll() {
    return false;
}
const navshow = () =>{
    document.getElementById("nav-list").classList.add("show")
    document.getElementById("nav-overlay").classList.add("active")
    document.body.style = "visibility:visable;height:100vh;width:100vw;overflow:hidden"
}
const navclose = () =>{
    document.getElementById("nav-list").classList.remove("show")
    document.getElementById("nav-overlay").classList.remove("active")
    document.body.style = "visibility:visable;height:initial;width:100%;overflow-x:hidden"
}
const menuitem = (name) =>{
    document.getElementById("menu-item-wrapper").innerHTML = name;
    document.getElementById("menu-item-wrapper").style.color = "#66fcf1"
}
const menuitemleave = () =>{
    document.getElementById("menu-item-wrapper").style.color = "#0b0c10"
    document.getElementById("menu-item-wrapper").innerHTML = "aaaa"
}
const servicesshow = () =>{
    document.getElementById("about-item-show").classList.add("showservices");
}
const servicesclose = () =>{
    document.getElementById("about-item-show").classList.remove("showservices");
}