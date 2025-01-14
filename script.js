// JavaScript for scrolling and animations
document.addEventListener("DOMContentLoaded", () => {
  const menuBar = document.querySelector(".menu-bar");
  const buttons = document.querySelectorAll(".menu-bar button");

  // Show menu bar on scroll
  window.addEventListener("scroll", () => {
    const aboutUsSection = document
      .querySelector("#aboutMe")
      .getBoundingClientRect();
    if (aboutUsSection.top <= 0) {
      menuBar.classList.add("visible");
    } else {
      menuBar.classList.remove("visible");
    }
  });

  // Smooth scrolling
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-scroll-to");
      const target = document.querySelector(`#${targetId}`);
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// JavaScript for scrolling and animations
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".round-button");

  // Smooth scrolling
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-scroll-to");
      const target = document.querySelector(`#${targetId}`);
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
