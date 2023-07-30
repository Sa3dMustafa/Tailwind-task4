let btnOpen = document.getElementById("open");
let btnClose = document.getElementById("close");
let navbar = document.getElementById("navbar");

btnClose.onclick = function () {
    navbar.classList.add("hidden");
    this.classList.add("hidden");
    btnOpen.classList.remove("hidden");
};

btnOpen.onclick = function () {
    this.classList.add("hidden");
    navbar.classList.remove("hidden");
    btnClose.classList.remove("hidden");
};

const optionElement = document.querySelector(".option");
const menuElement = optionElement.querySelector(".menu");
const upArrow = optionElement.querySelector(".up");
const downArrow = optionElement.querySelector(".down");

function showMenu() {
    menuElement.classList.remove("hidde");
    upArrow.classList.remove("hidde");
    downArrow.classList.add("hidde");
}

function hideMenu() {
    menuElement.classList.add("hidde");
    upArrow.classList.add("hidde");
    downArrow.classList.remove("hidde");
}

upArrow.onclick = hideMenu;
downArrow.onclick = showMenu;
