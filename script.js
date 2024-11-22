document.querySelectorAll('.music-card').forEach((card, index) => {
    const playButton = card.querySelector('.play-button');
    const progressBar = card.querySelector('.progress-bar');
    
    
    const audio = new Audio();
    audio.src = index === 0 ? "https://audio.jukehost.co.uk/C3c0GJ1tzShmS3fH1DnF9acpXGXa8DHt"
               : index === 1 ? "https://audio.jukehost.co.uk/RAnMJI8e8dq7XzShoreYz8CxJijpq3Ib"
               : index === 2 ? "https://audio.jukehost.co.uk/DSR8bVFx3dST8nw8nUdFuefFyZon1vZ8"
               : "https://audio.jukehost.co.uk/qNGtTnPxKYKWRFAeyNXZCDEi8fj58toY"; 
    let isPlaying = false;

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = "Play";
        } else {
            audio.play();
            playButton.textContent = "Pause";
        }
        isPlaying = !isPlaying;
    });

    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + "%";
    });

    audio.addEventListener('ended', () => {
        playButton.textContent = "Play";
        isPlaying = false;
    });
});
