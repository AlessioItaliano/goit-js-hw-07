import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryItemMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", galleryItemMarkup);

galleryList.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  } else {
    let gallery = new SimpleLightbox(".gallery__link", {
      captionsData: "alt",
      captionPosition: "bottom",
      captionDelay: 250,
    });
    gallery.on("show.simplelightbox", function () {});
  }
}
