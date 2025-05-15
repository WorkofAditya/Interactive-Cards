document.querySelectorAll('.music-card').forEach((card, index) => {
    const playButton = card.querySelector('.play-button');
    const progressBar = card.querySelector('.progress-bar');
    
    
    const audio = new Audio();
    audio.src = index === 0 ? "https://github.com/workofaditya/Interactive-Cards/raw/refs/heads/main/mp3/husn.mp3"
               : index === 1 ? "https://github.com/workofaditya/Interactive-Cards/raw/refs/heads/main/mp3/no-surprises.mp3"
               : index === 2 ? "https://github.com/workofaditya/Interactive-Cards/raw/refs/heads/main/mp3/one-love.mp3"
               : "https://github.com/workofaditya/Interactive-Cards/raw/refs/heads/main/mp3/tu-hain-kahan.mp3"; 
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
