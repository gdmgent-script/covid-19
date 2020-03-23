// declare media element (video)
const media = document.querySelector('video');

// declare every button
const buttons = document.querySelectorAll('button'); // alle knoppen
const btnWash = document.querySelector('#wasjehanden');
const btnFace = document.querySelector('#gezichtnietaanraken');
const btnContact = document.querySelector('#vermijdcontact');
const btnHome = document.querySelector('#blijfinuwkot');
const btnWalk = document.querySelector('#loopweg');

// declare an object (timeline) with key and value
const timeline = {
    washHands: 0,
    dontTouchFace: 8,
    avoidContact: 14,
    stayHome: 21,
    walkAway: 24    
};

// event listeners on each button (click event)
btnWash.addEventListener('click', (e) => {
    media.currentTime = timeline.washHands;
    playMedia();
});

btnFace.addEventListener('click', (e) => {
    media.currentTime = timeline.dontTouchFace;
    playMedia();
});

btnContact.addEventListener('click', (e) => {
    media.currentTime = timeline.avoidContact;
    playMedia();
});

btnHome.addEventListener('click', (e) => {
    media.currentTime = timeline.stayHome;
    playMedia();
});


btnWalk.addEventListener('click', (e) => {
    media.currentTime = timeline.walkAway;
    playMedia();
});

// play the video and disable every button
function playMedia() {
    // play video
    media.play();

    // iterate through every button to disable it (temporary)
    for(button of buttons) {
        button.disabled = true;
    }
}

// event listener on play, to pause automatically after 3 seconds
media.addEventListener('play', (e) => {
    
    // wait 3 seconds
    setTimeout(function() {
        // pause video
        media.pause();

        // iterate through every button and enable buttons again
        for(button of buttons) {
            button.disabled = false;
        }
    }, 3000);
});