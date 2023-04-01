import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
// console.log(galleryList);

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

// console.log(markup);
galleryList.insertAdjacentHTML("afterbegin", markup);

galleryList.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  console.log(evt.target);
}
