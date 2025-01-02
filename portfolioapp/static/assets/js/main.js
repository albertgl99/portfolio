// Exponer las funciones al ámbito global inmediatamente
window.scrollToTop = function () {
  gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.inOut" });
};

window.$scroll = function (id) {
  const element = document.querySelector(id);
  if (element) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: element, offsetY: 50 },
      ease: "power2.inOut",
    });
  } else {
    console.error(`No se encontró el elemento con el ID: ${id}`);
  }
};

// Ejecutar el resto del código una vez que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar/Ocultar botón "Scroll to Top"
  window.addEventListener("scroll", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
      gsap.set(scrollTopBtn, { display: window.scrollY > 300 ? "flex" : "none" });
      gsap.to(scrollTopBtn, { duration: 0.3, opacity: window.scrollY > 300 ? 1 : 0 });
    }
  });
});
