export function initModal() {
  const images = document.querySelectorAll(".gallery-img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-image");
  const closeBtn = document.querySelector(".close");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      openModal(image.src, image.alt);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  function openModal(imageSrc, imageAlt) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalImg.alt = imageAlt;
  }

  function closeModal() {
    modal.style.display = "none";
  }
}
