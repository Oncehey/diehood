window.onload = function() {
    const audioVideo = document.getElementById("background-video-audio");
    const visualVideo = document.getElementById("background-video-visual");

    // Attempt to autoplay the audio and video with initial mute to bypass restrictions
    function playMedia() {
        // Try to play audio (treated as video)
        audioVideo.play().then(() => {
            console.log("Audio (via video) is playing!");
            audioVideo.muted = false;  // Unmute after it starts playing
        }).catch((error) => {
            console.log("Audio (via video) failed to autoplay:", error);
            // Fallback: Retry after a short delay
            setTimeout(() => {
                audioVideo.play();  // Retry to play after 500ms
            }, 500);
        });

        // Try to play the visual video
        visualVideo.play().then(() => {
            console.log("Visual video is playing!");
            visualVideo.muted = false;  // Unmute the visual video
        }).catch((error) => {
            console.log("Visual video failed to autoplay:", error);
        });
    }

    // First attempt to autoplay both media when page loads
    playMedia();

    // Retry autoplay on user interaction as a last resort
    document.body.addEventListener('click', () => {
        playMedia();
    });
};
