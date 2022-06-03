// Hide and show menu

const menuBtn = document.querySelector("#hamburger");
const menuBtnClose = document.querySelector("#close-menu");
const menu = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    menu.classList.add("show-menu");
    menuBtn.style.display = "none";
    menuBtnClose.style.display = "block";
})

menuBtnClose.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    menuBtn.style.display = "block";
    menuBtnClose.style.display = "none";
})
