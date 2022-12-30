


  function playHarder() {

    const harderAudio = new Audio("./sounds/HARDER.wav");
    console.log(harderAudio);
    const harderButton = $('#harder-btn');
    harderButton.click(() => {
      harderAudio.play();
    });
  }
  

  function playBetter() {

    const betterAudio = new Audio("sounds/BETTER.wav");
    const betterButton = $('#better-btn');
    betterButton.click(() => {
  
      betterAudio.play();
    });
  }

  function playFaster() {

    const fasterAudio = new Audio("sounds/FASTER.wav");
    const fasterButton = $('#faster-btn');
    fasterButton.click(() => {
      fasterAudio.play();
    });
  }

  function playStronger() {

    const strongerAudio = new Audio("sounds/STRONGER.wav");
    const strongerButton = $('#stronger-btn');
    strongerButton.click(() => {
      strongerAudio.play();
    });
  }

  export function playSounds(){

    playHarder();
    playBetter();
    playFaster();
    playStronger();
  }
