document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  const modalClose = document.getElementById("modalClose");

  const galleryItems = document.querySelectorAll(".gallery__item img");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalCaption.innerText =
        this.parentElement.getAttribute("data-description");
    });
  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
