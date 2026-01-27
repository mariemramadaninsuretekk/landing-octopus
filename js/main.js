 // Toggle video mute/unmute on voice icon click
 const voiceToggle = document.getElementById('voice-toggle');
 const heroVideo = document.getElementById('hero-video');
 const volumeOnIcon = document.getElementById('volume-on-icon');
 const volumeOffIcon = document.getElementById('volume-off-icon');

 voiceToggle.addEventListener('click', function() {
     if (heroVideo.muted) {
         // Unmute the video - show volume-high icon (sound is on)
         heroVideo.muted = false;
         volumeOffIcon.style.display = 'none';
         volumeOnIcon.style.display = 'inline-block';
     } else {
         // Mute the video - show volume-xmark icon (sound is muted)
         heroVideo.muted = true;
         volumeOnIcon.style.display = 'none';
         volumeOffIcon.style.display = 'inline-block';
     }
 });