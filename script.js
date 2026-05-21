const canvas =
document.getElementById("confetti");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let confetti = [];

for(let i=0;i<200;i++){

  confetti.push({

    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,

    r:Math.random()*6+2,

    d:Math.random()*200

  });

}

function drawConfetti(){

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle = "#ffffff";

  confetti.forEach((c)=>{

    ctx.beginPath();

    ctx.arc(
      c.x,
      c.y,
      c.r,
      0,
      Math.PI*2
    );

    ctx.fill();

  });

  updateConfetti();

}

function updateConfetti(){

  confetti.forEach((c)=>{

    c.y += 2;

    if(c.y > canvas.height){

      c.y = -10;

    }

  });

}

setInterval(drawConfetti,20);

// BUTTON EFFECT


// AUTO PLAY MUSIC


const song =
document.getElementById("birthdaySong");

window.addEventListener("click", () => {

  song.volume = 0.5;

  song.play();

}, { once:true });