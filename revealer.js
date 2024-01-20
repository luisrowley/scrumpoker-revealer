console.log('Extension loaded');

function run() {
    var intervalID = setInterval(function() {
        const flipCards = document.querySelectorAll('.flip-card');
        if (flipCards.length > 0) {
            console.log('flipCards loaded '+ flipCards);
            flipCards.forEach(function (flipCard) {
                flipCard.classList.add('flip-card-transform');
            });
            clearInterval(intervalID);
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", run);
