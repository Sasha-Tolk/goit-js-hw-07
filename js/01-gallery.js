import {galleryItems}  from './gallery-items.js';
// Change code below this line



const galleryDiv = document.querySelector(".gallery");

function createCard (galleryItems) {   
return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src=${preview}
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join('');
};

const cards = createCard(galleryItems);
galleryDiv.insertAdjacentHTML('beforeend', cards);

galleryDiv.addEventListener('click', (event) => {
    event.preventDefault();
});

galleryDiv.addEventListener('click', openModal);


function openModal(event){
    const isModalOpenImg = event.target.classList.contains('gallery__image');
    
    if(isModalOpenImg){
        const bigImg = event.target.getAttribute("data-source");
        
        const instance = basicLightbox.create(`
        <img src="${bigImg}" 
        width="800" height="600">`)
    
    instance.show()
     
    window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
      instance.close()
    };
  });
    }
    
}


