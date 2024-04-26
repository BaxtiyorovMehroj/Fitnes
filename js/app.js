let header = document.querySelector("header");


window.addEventListener("scroll", () => {
    if (scrollY > 0) {
        header.classList.add("header-shrink")
    } else {
        header.classList.remove("header-shrink")
    }
})