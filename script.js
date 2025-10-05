const buttons = document.querySelectorAll(".filter-btn");
const sections = document.querySelectorAll(".competition-year");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const year = button.dataset.year;
    sections.forEach(section => {
      if (year === "all" || section.dataset.year === year) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });
});

const slides = document.querySelectorAll('.header-slideshow img');
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

// 每 2 秒切換
setInterval(showNextSlide, 2000);

// 一開始就顯示第一張圖片
slides[0].classList.add("active");