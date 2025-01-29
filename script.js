// script.js

window.onload = () => {
    const video = document.getElementById("background-video");
    
    // Ensure the video plays first (to satisfy autoplay restrictions)
    video.play().then(() => {
        // Once the video is playing, unmute it
        video.muted = false;
    }).catch((error) => {
        console.error("Video playback failed:", error);
    });
};
