const mainMenu = document.querySelector(".mainMenu");
const menuItems = document.querySelectorAll(".menuItem");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const cartIcon = document.querySelector("cart")
const nav = document.getElementById("navbar")
// const menuIcon = document.querySelector(".menuIcon");

function openMenuHelper() {
    mainMenu.style.flexDirection = "column";
    mainMenu.style.alignItems = "start";
    mainMenu.style.marginLeft = "24px";
    nav.style.height = "100%";
    mainMenu.style.height = "100%";
    mainMenu.style.justifyContent = "space-around";
    menuItems.forEach(
        function (menuItem) {
            menuItem.style.display = "block";
        }
    )
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
}

function closeMenuHelper() {
    mainMenu.style.flexDirection = "row";
    nav.style.height = "fit-content";
    menuItems.forEach(
        function (menuItem) {
            menuItem.style.display = "none";
        }
    )
    openMenu.style.display = "flex";
    closeMenu.style.display = "none";
}

function cartOpenHelper() {

}

openMenu.addEventListener("click", openMenuHelper);
closeMenu.addEventListener("click", closeMenuHelper);