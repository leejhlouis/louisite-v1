console.log('Load js')

const nav = document.getElementById('Navbar');

// window.onscroll = function(){
//     if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
//         nav.classList.add("nav-colored");
//         nav.classList.remove("nav-transparent");
//     } 
//     else {
//         nav.classList.remove("nav-colored");
//         nav.classList.add("nav-transparent");
//     }
// }

const btn = document.getElementById("btn-mobile")
const menu = document.getElementById("mobile-menu")
const content = document.getElementById("mobile-menu-content")
const expand = document.getElementById("icon-expand")
const collapse = document.getElementById("icon-collapse")

// add event listeners
btn.addEventListener("click", () => {
    // if contains transparent class then
    // if (nav.classList.contains("nav-transparent")){
    //     nav.classList.toggle("nav-colored-2")
    // }

    nav.classList.toggle("nav-colored-2")
    menu.classList.toggle("opacity-100");
    content.classList.toggle("hidden");
    expand.classList.toggle("hidden");
    collapse.classList.toggle("hidden");
});
