const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

const wkeys = ['a','s','d','f','g','h','j'];
const bkeys = ['w','e','r','t','y'];

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = wkeys.indexOf(key)
    const blackKeyIndex = bkeys.indexOf(key)
  
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
    
  })


keys.forEach(key =>{
    key.addEventListener('click', () => playNote(key))
})



function playNote(key){
    const nAudio = document.getElementById(key.dataset.note);
    nAudio.play();
}


