window.addEventListener("scroll", function () {
      const scrollTopBtn = document.getElementById("scrollTopBtn");
      if (window.scrollY > 300) {
        scrollTopBtn.classList.remove("hidden");
        scrollTopBtn.classList.add("flex");
      } else {
        scrollTopBtn.classList.remove("flex");
        scrollTopBtn.classList.add("hidden");
      }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
 
function $scroll(id) {
  const element = document.querySelector(id);
  if (element) {
      element.scrollIntoView({ behavior: "smooth" });
  } else {
      console.error(`No se encontró el elemento con el ID: ${id}`);
  }
}
