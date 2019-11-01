const toggleBtn = document.getElementById("toggle-btn");
const nav = document.getElementById("primary-nav");

toggleBtn.addEventListener("click", toggleMenu);

nav.style.display = "none";
console.log(nav);

function toggleMenu() {
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

window.addEventListener("resize", function() {
  if (window.innerWidth > 600) {
    nav.style.display = "";
  } else {
    nav.style.display = "none";
  }
});
