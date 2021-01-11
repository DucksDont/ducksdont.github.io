let chunks = [];
let walker;
let isLeftDown = false;
let isRightDown = false;

const app = new PIXI.Application({
  antialias: true,
  resizeTo: window,
});
document.body.appendChild(app.view);

for (let y = 0; y < window.innerHeight; y += 20) {
  for (let x = 0; x < window.innerWidth; x += 20) {
    chunks.push(new createArea(x, y));
  }
}

walker = new createWalker();
