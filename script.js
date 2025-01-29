// When the page loads, we attempt to play the audio automatically
window.onload = function() {
    const audio = document.getElementById("background-audio");

    // Try to play the audio (muted first to bypass autoplay restrictions if necessary)
    audio.play().then(() => {
        console.log("Audio is playing!");
    }).catch((error) => {
        console.log("Autoplay failed:", error);
    });
};
