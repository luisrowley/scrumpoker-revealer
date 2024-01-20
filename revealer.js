function addClassToFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card');

    if (flipCards.length > 0) {
      flipCards.forEach(function (flipCard) {
        flipCard.className += ' flip-card-transform';
      });
    } else {
      console.log('No flip cards found.');
    }
  }
  
  // Wait for the Angular application to be fully loaded
function waitForAngular() {
    const intervalId = setInterval(function () {
      if (document.readyState === 'complete' && typeof angular !== 'undefined') {
        clearInterval(intervalId);
        addClassToFlipCards();
      }
    }, 1000);
}
  
  // Execute the code when the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
    // If Angular is already loaded, add the class immediately
    if (typeof angular !== 'undefined') {
      addClassToFlipCards();
    } else {
      // Otherwise, wait for Angular to load
      waitForAngular();
    }
  
    const observer = new MutationObserver(addClassToFlipCards);
    observer.observe(document.body, { subtree: true, childList: true });
});
