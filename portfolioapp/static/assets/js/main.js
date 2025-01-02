document.addEventListener("DOMContentLoaded", () => {
  // Mostrar/Ocultar botón "Scroll to Top"
  window.addEventListener("scroll", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
      gsap.set(scrollTopBtn, { display: window.scrollY > 300 ? "flex" : "none" });
      gsap.to(scrollTopBtn, { duration: 0.3, opacity: window.scrollY > 300 ? 1 : 0 });
    }
  });

  // Función para desplazarse al inicio
  function scrollToTop() {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.inOut" });
  }

  // Función para desplazarse a secciones
  function $scroll(id) {
    const element = document.querySelector(id);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 50 }, // offsetY ajusta para headers fijos
        ease: "power2.inOut",
      });
    } else {
      console.error(`No se encontró el elemento con el ID: ${id}`);
    }
  }

  // Exponer las funciones al ámbito global
  window.scrollToTop = scrollToTop;
  window.$scroll = $scroll;
});
