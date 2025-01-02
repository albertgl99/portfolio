window.addEventListener("scroll", function () {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 300) {
    gsap.to(scrollTopBtn, { duration: 0.3, opacity: 1, display: "flex" });
  } else {
    gsap.to(scrollTopBtn, { duration: 0.3, opacity: 0, display: "none" });
  }
});

function scrollToTop() {
  gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.inOut" });
}

function $scroll(id) {
  const element = document.querySelector(id);
  if (element) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: element, offsetY: 50 }, // offsetY para ajustar con un menú fijo si lo tienes
      ease: "power2.inOut",
    });
  } else {
    console.error(`No se encontró el elemento con el ID: ${id}`);
  }
}
