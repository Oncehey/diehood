window.onload = function() {
    const video = document.getElementById("background-video");
    const videoVisual = document.getElementById("background-video-visual");

    // Ensure the video for audio starts automatically
    video.play().then(() => {
        console.log("Audio (via video) is playing!");
        video.muted = false;  // Unmute audio after it starts playing
    }).catch((error) => {
        console.log("Audio (via video) failed to autoplay:", error);
        // Fallback: Retry playing after a delay
        setTimeout(() => {
            video.play();  // Retry to play after 500ms
        }, 500);
    });

    // Ensure the visual video starts automatically
    videoVisual.play().then(() => {
        console.log("Visual video is playing!");
        videoVisual.muted = false;  // Unmute visual video
    }).catch((error) => {
        console.log("Visual video failed to autoplay:", error);
    });
};
