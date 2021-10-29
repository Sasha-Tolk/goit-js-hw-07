import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector(".gallery");

function createCard() {
    return galleryItems.map((preview, original, description) => {
        return '<img class = "gallery__image">  src = `${preview}` alt = `${description}` </img>'
    }).join("");  
}

const cards = createCard(galleryItems);
galleryDiv.append(cards);
