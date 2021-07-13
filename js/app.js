const headerElement = document.querySelector(".main-header");
const menuElement = document.querySelector(".main-header__menu");
const overlayElement = document.querySelector(".main-header__overlay");
const checkboxToggleElement = document.querySelector('input[name="theme"]');
const htmlRootElement = document.documentElement; // root node

const toggleNavigation = () => {
    menuElement.classList.toggle("open");
    headerElement.classList.toggle("open");
    overlayElement.classList.toggle("open");
}

const smoothTransition = () => {
    htmlRootElement.classList.add("transition");
    window.setTimeout(() => {
        htmlRootElement.classList.remove("transition");
    }, 1000);
}

const setDarkTheme = () => {
    htmlRootElement.setAttribute("data-theme", "dark");
}

const setLightTheme = () => {
    htmlRootElement.setAttribute("data-theme", "light");
}

checkboxToggleElement.addEventListener("change", () => {
    if(checkboxToggleElement.checked){
        setDarkTheme();
        smoothTransition();
    } else {
        setLightTheme();
        smoothTransition();
    }
});


menuElement.addEventListener("click", toggleNavigation);


