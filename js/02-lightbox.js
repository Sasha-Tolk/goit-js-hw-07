import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector(".gallery");

function createCard (galleryItems) {   
return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>`;
    }).join('');
};

const cards = createCard(galleryItems);
galleryDiv.insertAdjacentHTML('beforeend', cards);

galleryDiv.addEventListener('click', (event) => {
    event.preventDefault();
});

galleryDiv.addEventListener('click', openModal);
const img = document.querySelector('.gallery__image');

function openModal(event){
    const isModalOpenImg = event.target.classList.contains('gallery__image');

    if(isModalOpenImg){
        const lightbox = new SimpleLightbox('.gallery__item', 
        {'captionsData': "alt",
        'captionPosition': "bottom", 
        'captionDelay': 250})
    };
}
