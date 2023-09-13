// document.addEventListener("DOMContentLoaded", function () {
//     const scrollContent = document.querySelector(".scroll-content");
//     const scrollItems = document.querySelectorAll(".scroll-item");
//     const itemWidth = scrollItems[0].offsetWidth + 10; // Ancho de cada elemento + margen-right
//     let currentIndex = 0;
//     let isTransitioning = false;
  
//     function showItem(index) {
//       const offset = -index * itemWidth;
//       scrollContent.style.transition = "transform 0.5s ease-in-out";
//       scrollContent.style.transform = `translateX(${offset}px)`;
//     }
  
//     function autoSlide() {
//       if (!isTransitioning) {
//         currentIndex = (currentIndex + 1) % scrollItems.length;
//         isTransitioning = true;
//         showItem(currentIndex);
  
//         // Detecta cuando llega al último elemento
//         if (currentIndex === scrollItems.length - 1) {
//           // Después de la transición, salta al primer elemento sin animación
//           setTimeout(() => {
//             scrollContent.style.transition = "none";
//             currentIndex = 0;
//             showItem(currentIndex);
//             // Espera un momento antes de volver a habilitar la transición
//             setTimeout(() => {
//               scrollContent.style.transition = "transform 0.5s ease-in-out";
//             }, 0);
//           }, 500); // La duración de la transición debe coincidir con el valor en CSS
//         }
//       }
//     }
  
//     setInterval(autoSlide, 3000); // Cambio de elemento automáticamente cada 3 segundos
//   });
  