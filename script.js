window.onload = function() {
    const audio = document.getElementById("background-audio");
    const video = document.getElementById("background-video");

    // This function ensures that both the audio and video play automatically
    function tryPlayMedia() {
        // Try to play the video first
        video.play().then(() => {
            video.muted = false; // Unmute video after play
        }).catch(error => {
            console.log("Video failed to autoplay:", error);
            // Fallback for video autoplay
            video.muted = false;
            video.play();  // Retry playing after failure
        });

        // Try to play the audio
        audio.play().then(() => {
            audio.muted = false; // Unmute audio after play
        }).catch((error) => {
            console.log("Audio failed to autoplay:", error);
            // Fallback for audio autoplay
            audio.muted = false;
            audio.play();  // Retry playing after failure
        });
    }

    // Start by attempting to play media (video + audio)
    tryPlayMedia();

    // Add a user interaction listener (click or touch) to start both media
    document.body.addEventListener('click', () => {
        tryPlayMedia();  // Trigger media play on user interaction
    });

    // Add a second fallback using a setTimeout to ensure media starts after a delay
    setTimeout(() => {
        if (audio.paused) {
            audio.play(); // Play audio after a brief delay (fallback for browser blocking)
        }
        if (video.paused) {
            video.play(); // Play video after a brief delay
        }
    }, 500);
};
