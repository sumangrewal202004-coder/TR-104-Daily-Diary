const menuToggle = document.querySelector(".menuToggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  alert("Your query is sent successfully.");
});
