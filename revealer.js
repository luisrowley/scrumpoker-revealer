document.addEventListener('DOMContentLoaded', function () {
    const flipCards = document.querySelectorAll('.flip-card');
  
    flipCards.forEach(function (flipCard) {
      flipCard.classList.add('flip-card-transform');
    });
  });
  