// script.js

window.onload = function() {
    const audio = document.getElementById("background-audio");
    const video = document.getElementById("background-video");

    // Try to play the audio
    audio.play().then(() => {
        // If autoplay succeeds, unmute the audio after a short delay
        audio.muted = false; // Unmute audio after it's played
    }).catch((error) => {
        // Handle errors (e.g., autoplay restriction)
        console.log("Audio failed to autoplay:", error);
        // Optionally, you can notify users that they need to interact
        audio.muted = false;  // Make sure it's unmuted
        audio.play(); // Attempt to play the audio after unmuting
    });

    // Handle the video as well for autoplay
    video.play().then(() => {
        video.muted = false; // Unmute the video
    }).catch((error) => {
        console.log("Video failed to autoplay:", error);
    });

    // Optional: Detect user interaction to trigger autoplay (click or touch)
    document.body.addEventListener('click', () => {
        audio.play();  // Play the audio after user interaction
        video.play();  // Play the video after user interaction
    });
};
