/**
 * Inicializa un modal para visualizar imágenes de una galería.
 *
 * Esta función agrega eventos de clic a todas las imágenes con la clase `gallery-img` en la página.
 * Cuando se hace clic en una imagen, se abre un modal mostrando la imagen seleccionada.
 * El modal puede cerrarse haciendo clic en el botón de cerrar.
 *
 * @function
 */
export function initModal() {
  const images = document.querySelectorAll(".gallery-img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-image");
  const closeBtn = document.querySelector(".close");

  // Agrega un evento de clic a cada imagen de la galería para abrir el modal con la imagen seleccionada
  images.forEach((image) => {
    image.addEventListener("click", () => {
      openModal(image.src, image.alt);
    });
  });

  // Agrega un evento de clic al botón de cerrar para cerrar el modal
  closeBtn.addEventListener("click", closeModal);

  /**
   * Abre el modal y muestra la imagen seleccionada.
   *
   * @param {string} imageSrc - La URL de la imagen a mostrar en el modal.
   * @param {string} imageAlt - El texto alternativo de la imagen a mostrar en el modal.
   */
  function openModal(imageSrc, imageAlt) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalImg.alt = imageAlt;
  }

  /**
   * Cierra el modal.
   */
  function closeModal() {
    modal.style.display = "none";
  }
}
