const scrollElement = document.querySelector(".scroll-btn");

window.addEventListener("scroll", () => {
    scrollElement.classList.toggle("active", window.scrollY > 200);
});

const scrollToTheTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollElement.addEventListener("click", scrollToTheTop);