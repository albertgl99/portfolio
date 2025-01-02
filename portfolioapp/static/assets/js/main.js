document.addEventListener("DOMContentLoaded", () => {
  // Función para desplazarse al inicio
  window.scrollToTop = function () {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.inOut" });
  };

  // Función para desplazarse a secciones específicas
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

  // Mostrar/Ocultar botón "Scroll to Top"
  window.addEventListener("scroll", () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
      if (window.scrollY > 300) {
        gsap.set(scrollTopBtn, { display: "flex" });
        gsap.to(scrollTopBtn, { duration: 0.3, opacity: 1 });
      } else {
        gsap.to(scrollTopBtn, { duration: 0.3, opacity: 0, onComplete: () => {
          gsap.set(scrollTopBtn, { display: "none" });
        }});
      }
    }
  });

  // Registrar eventos en los enlaces del menú
  document.getElementById("about-link")?.addEventListener("click", () => $scroll("#about"));
  document.getElementById("portfolio-link")?.addEventListener("click", () => $scroll("#portfolio"));
  document.getElementById("work-link")?.addEventListener("click", () => $scroll("#work"));
});
