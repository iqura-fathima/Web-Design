const openButton = document.querySelector('.openPopup');
const popupContainers = document.querySelectorAll('.popupContainer');
const closeButton = document.querySelector('.closePopup');

openButton.addEventListener('click', function() {
  const popupContainer = this.nextElementSibling;
  popupContainer.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  const popupContainer = this.closest('.popupContainer');
  popupContainer.style.display = 'none';
});

window.addEventListener('click', function(event) {
  popupContainers.forEach(container => {
    if (event.target === container) {
      container.style.display = 'none';
    }
  });
});
