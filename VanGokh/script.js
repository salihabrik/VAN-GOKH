function addMorePaintings() {
    const gallerySection = document.getElementById('gallery');
  
    additionalPaintings.forEach(painting => {
      const newPainting = document.createElement('section');
      newPainting.classList.add('painting');
      newPainting.innerHTML = `
        <h2>${painting.title}</h2>
        <img src="${painting.image}" alt="${painting.title} by Vincent van Gogh">
        <p>Description: ${painting.description}</p>
      `;
      gallerySection.appendChild(newPainting);
    });
  }