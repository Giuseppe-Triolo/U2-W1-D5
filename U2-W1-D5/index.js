window.addEventListener("scroll", () => {
    let windowY = window.scrollY;
    let navbar = document.getElementById("navbar");
    let navButton = document.getElementById("navBtn");
    console.log(navButton)
    if (windowY >= 50) {
        navbar.style.backgroundColor = "white";
        navButton.style.backgroundColor = "#1a8917"
    } else {
        navbar.style.backgroundColor = "#ffc017";
        navButton.style.backgroundColor = "black"
    }
})