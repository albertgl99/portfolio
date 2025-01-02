document.addEventListener("DOMContentLoaded", () => {
  // Función para desplazarse al inicio
  function scrollToTop() {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.inOut" });
  }

  // Función para desplazarse a secciones específicas
  function $scroll(id) {
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
  }

  // Mostrar/Ocultar botón "Scroll to Top"
  window.addEventListener("scroll", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
      gsap.set(scrollTopBtn, { display: window.scrollY > 300 ? "flex" : "none" });
      gsap.to(scrollTopBtn, { duration: 0.3, opacity: window.scrollY > 300 ? 1 : 0 });
    }
  });

  // Registrar eventos de click en los elementos del menú
  document.getElementById("about-link").addEventListener("click", () => $scroll("#about"));
  document.getElementById("portfolio-link").addEventListener("click", () => $scroll("#portfolio"));
  document.getElementById("work-link").addEventListener("click", () => $scroll("#work"));

  // Exponer las funciones globalmente (si es necesario para otros scripts)
  window.scrollToTop = scrollToTop;
  window.$scroll = $scroll;
});
