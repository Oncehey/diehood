window.onload = function() {
    const audioVideo = document.getElementById("background-video-audio");
    const visualVideo = document.getElementById("background-video-visual");
    const playButton = document.getElementById("playButton");

    // Function to start audio and video
    function startMedia() {
        playButton.style.display = 'none'; // Hide the button once clicked
        
        // Try to play the audio/video (muted first to bypass autoplay restrictions)
        audioVideo.play().then(() => {
            console.log("Audio (via video) is playing!");
            audioVideo.muted = false;  // Unmute after it starts playing
        }).catch((error) => {
            console.log("Audio (via video) failed to autoplay:", error);
            // Retry playback after delay
            setTimeout(() => {
                audioVideo.play();
            }, 500);
        });

        // Try to play the visual video as well
        visualVideo.play().then(() => {
            console.log("Visual video is playing!");
            visualVideo.muted = false;  // Unmute visual video
        }).catch((error) => {
            console.log("Visual video failed to autoplay:", error);
        });
    }

    // Attempt to play the media automatically when the page is loaded
    startMedia();

    // Add a fallback for mobile or browsers that block autoplay
    playButton.addEventListener('click', () => {
        startMedia();
    });
};
