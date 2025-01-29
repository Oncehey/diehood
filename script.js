// script.js - Optional JavaScript if you want to manipulate the video/audio
window.onload = () => {
    const video = document.getElementById("background-video");

    // Ensure the video plays and unmute it after a slight delay
    video.play().then(() => {
        video.muted = false;  // Unmute the video
    }).catch((error) => {
        console.error("Video playback failed:", error);
    });
};
