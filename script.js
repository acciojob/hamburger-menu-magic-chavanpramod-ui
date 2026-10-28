//your JS code here. If required.
const hamburger = document.getElementById("hamburger");
const navSub = document.getElementById("navSub");

hamburger.addEventListener("click", () => {
    navSub.classList.toggle("active");
});