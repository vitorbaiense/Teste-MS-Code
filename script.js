var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigation_header");
var tittles = document.getElementById("tittles");
var questions = document.getElementById("questions");
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = "-10vw";
        navigationHeader.style.animationName = "showSidebar";
        tittles.style.filter = "blur(2px)";
        questions.style.filter = "blur(2px)";
    } else {
        navigationHeader.style.marginLeft = "-100vw";
        navigationHeader.style.animationName = "";
        tittles.style.filter = "";
        questions.style.filter = "";
    }
}

function closeSideBar() {
    if (showSidebar) {
        toggleSidebar();
    }
}

window.addEventListener("resize", function (event) {
    if (this.window.innerWidth > 768 && showSidebar) {
        toggleSidebar();
    }
})

const slideValue = document.querySelector("span");
const inputSlider = document.getElementById("inivel");

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    slideValue.textContent = value;
    slideValue.style.left = (value * 2) + "%";
    slideValue.classList.add("show");
});
inputSlider.onblur = (() => {
    slideValue.classList.remove("show");
});