const photos = [
    "images/cat.jpeg", 
    "images/tower.jpeg",
    "images/robo.jpeg",
    "images/hotair.jpeg",
    "images/man.jpg",
    "images/map.png"
    
  ];
  
  const galleryGrid = document.querySelector('.gallery-grid');
  const lightboxModal = document.querySelector('.lightbox-modal');
  const lightboxImage = document.querySelector('.lightbox-image');
  const closeButton = document.querySelector('.close-btn');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  
  let currentPhotoIndex = 0;
  
  function showLightbox(imageUrl) {
    lightboxImage.src = imageUrl; 
    lightboxModal.classList.add('active');
  }
  nextButton.addEventListener('click', () => {
    currentPhotoIndex++; 
    if (currentPhotoIndex >= photos.length) currentPhotoIndex = 0;
    showLightbox(photos[currentPhotoIndex]); 
  });
  prevButton.addEventListener('click', () => {
    currentPhotoIndex--; 
    if (currentPhotoIndex < 0) currentPhotoIndex = photos.length - 1; 
    showLightbox(photos[currentPhotoIndex]); 
  });
  
 
  
  
  