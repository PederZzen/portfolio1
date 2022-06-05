// Hide and show menu

const menuBtn = document.querySelector("#hamburger");
const menuBtnClose = document.querySelector("#close-menu");
const menu = document.querySelector("nav");

function showMenu () {
    menu.classList.add("show-menu");
    menuBtn.style.display = "none";
    menuBtnClose.style.display = "block";
}

function hideMenu () {
    menu.classList.remove("show-menu");
    menuBtn.style.display = "block";
    menuBtnClose.style.display = "none";
}

menuBtn.addEventListener("click", () => {
    showMenu()
})

menuBtnClose.addEventListener("click", () => {
    hideMenu()
})


// Navigation

const aboutBtn = document.getElementById("about__btn");
const workBtn = document.getElementById("work__btn");
const logo = document.querySelector(".logo");

const about = document.getElementById("about");
const work = document.getElementById("my-work__watermark");

aboutBtn.addEventListener("click", () => {
    about.scrollIntoView({ behavior: "smooth" })
    hideMenu()
})

workBtn.addEventListener("click", () => {
    work.scrollIntoView({ behavior: "smooth" })
    hideMenu()
})

logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    })
})