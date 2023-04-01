import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", markup);

galleryList.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  } else {
    const instance = basicLightbox.create(
      `<img src="${evt.target.dataset.source}" />`
    );
    instance.show();

    galleryList.addEventListener("keydown", onkeyDownClose);

    function onkeyDownClose(evt) {
      if (evt.code === "Escape") {
        instance.close();
      }
    }
  }
}
