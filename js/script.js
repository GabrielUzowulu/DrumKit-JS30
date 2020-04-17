function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // Stops function
    audio.currentTime = 0; // Rewinds to the start of audio
    audio.play();
    key.classList.add('playing'); // Adds a class "playing" to the Css file once the key is played 
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip if it's not a transform
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);