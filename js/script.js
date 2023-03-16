// toggel class active
const navbarNav = document.querySelector(".navbar-nav")
// menu klik
document.querySelector("hamburger-menu").onclick(() =>{
    navbarNav.classList.toggle("active")
}) 

// klik diluar syber
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function(e){
 if( !hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    
 }
})