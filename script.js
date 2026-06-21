/* ==========================
   KITARYO WEBSITE SCRIPT
========================== */

const particlesContainer =
document.getElementById("particles");

/* PARTICLES */

for(let i=0;i<150;i++){

const particle =
document.createElement("div");

particle.classList.add("particle");

particle.style.left =
Math.random()*100+"%";

particle.style.top =
Math.random()*100+"%";

particle.style.animationDuration =
(5 + Math.random()*10) + "s";

particle.style.animationDelay =
Math.random()*5 + "s";

particle.style.opacity =
Math.random();

particlesContainer.appendChild(particle);

}

/* LIGHTNING EFFECT */

const lightning =
document.querySelector(".lightning");

function flashLightning(){

if(Math.random() > 0.75){

lightning.style.opacity = "0.4";

setTimeout(()=>{

lightning.style.opacity = "0";

},100);

}

}

setInterval(flashLightning,3000);

/* PARALLAX EFFECT */

document.addEventListener("mousemove",(e)=>{

const moon =
document.querySelector(".moon");

const x =
(e.clientX / window.innerWidth - 0.5) * 30;

const y =
(e.clientY / window.innerHeight - 0.5) * 30;

moon.style.transform =
`translateX(-50%) translate(${x}px,${y}px)`;

});

/* TITLE GLOW RANDOMIZER */

const title =
document.querySelector(".title");

setInterval(()=>{

const glow =
20 + Math.random()*40;

title.style.textShadow =
`0 0 ${glow}px #ff008c`;

},1500);

/* BUTTON HOVER SOUND PLACEHOLDER */

const buttons =
document.querySelectorAll(".buttons a");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform =
"translateY(-5px) scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform =
"translateY(0) scale(1)";

});

});

/* STATS GLOW */

const stats =
document.querySelectorAll(".stats span");

setInterval(()=>{

stats.forEach(stat=>{

stat.style.boxShadow =
`0 0 ${10+Math.random()*20}px #ff008c`;

});

},2000);

/* LOADER REMOVE */

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader =
document.getElementById("loader");

loader.style.display = "none";

},3000);

});

/* RANDOM BODY GLOW */

setInterval(()=>{

document.body.style.filter =
`brightness(${0.95 + Math.random()*0.08})`;

},2500);

console.log("KITARYO WEBSITE LOADED 🔥");
