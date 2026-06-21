const container =
document.getElementById("particles");

for(let i=0;i<80;i++){

const p =
document.createElement("div");

p.className="particle";

p.style.left =
Math.random()*100+"%";

p.style.animationDuration =
(5+Math.random()*10)+"s";

container.appendChild(p);

}
