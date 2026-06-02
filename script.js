function openMenu() {
  document.querySelector(".tray").style.width = "100%";
}

function closeMenu() {
  document.querySelector(".tray").style.width = "0";
}

const menuLinks = document.querySelectorAll(".menu-link");
const tray = document.querySelector(".tray");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    tray.style.width = "0";
  });
});
