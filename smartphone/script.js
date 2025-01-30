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

function toggleDetails(button) {
  const row = button.closest("tr");
  const nextRow = row.nextElementSibling;

  if (nextRow && nextRow.classList.contains("details")) {
    if (nextRow.style.display === "none" || nextRow.style.display === "") {
      nextRow.style.display = "table-row";
      button.textContent = "閉じる";
    } else {
      nextRow.style.display = "none";
      button.textContent = "詳細";
    }
  }
}

// 初期化：すべての詳細行を非表示にする
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".details").forEach((detailRow) => {
    detailRow.style.display = "none";
  });
});
