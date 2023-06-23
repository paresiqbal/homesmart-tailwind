import "./style.css";

const navBtn = document.querySelector("#menu");
const menuBtn = document.querySelector('[role="menubar"]');

navBtn.addEventListener("click", () => {
  const isClick = JSON.parse(navBtn.getAttribute("aria-expanded"));
  navBtn.setAttribute("aria-expanded", !isClick);
  menuBtn.classList.toggle("hidden");
  menuBtn.classList.toggle("flex");
});
