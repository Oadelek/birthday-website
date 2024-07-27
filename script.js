let currentSong = 0;
let audio = null;

document.addEventListener('DOMContentLoaded', () => {
    const celebrateBtn = document.getElementById('celebrateBtn');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    celebrateBtn.addEventListener('click', () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        playBirthdaySong();
    });

    // Image modal functionality
    imageModal.addEventListener('show.bs.modal', function (event) {
        const img = event.relatedTarget;
        const imgSrc = img.getAttribute('data-img');
        modalImage.src = imgSrc;
    });
});

function playBirthdaySong() {
    // Stop the current song if it's playing
    if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }

    const songs = ['uche_birthday_song_shine_bright.mp3', 'uche_birthday_song_celebration.mp3'];
    audio = new Audio(songs[currentSong]);
    audio.play();

    // Switch to the other song for next time
    currentSong = 1 - currentSong;
}