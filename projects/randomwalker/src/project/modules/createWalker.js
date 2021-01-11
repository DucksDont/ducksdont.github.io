class createWalker {
  constructor() {
    this.selectedChunk = Math.floor(Math.random() * app.stage.children.length);
    this.x = app.stage.children[this.selectedChunk].x;
    this.y = app.stage.children[this.selectedChunk].y;
    this.create();
  }
  create() {
    app.stage.children[this.selectedChunk].purpose = "head";
    app.stage.children[this.selectedChunk].beginFill("0xFFFFFF");
    app.stage.children[this.selectedChunk].tint = "0x1E96FC";
    this.moveRandom();
  }
  moveRandom() {
    let oldX = this.x;
    let oldY = this.y;
    // 0 LEFT
    // 1 RIGHT
    // 2 UP
    // 3 DOWN
    let direction = Math.floor(Math.random() * 4);
    if (direction === 0) this.x -= 20;
    if (direction === 1) this.x += 20;
    if (direction === 2) this.y += 20;
    if (direction === 3) this.y -= 20;
    // Prevents from running off of edge
    if (
      0 > this.x ||
      window.innerWidth < this.x ||
      0 > this.y ||
      window.innerHeight < this.y
    ) {
      this.x = oldX;
      this.y = oldY;
      this.moveRandom();
    } else {
      // Creates trail
      new createWater(this.selectedChunk);
      for (let i = 0; i < app.stage.children.length; i++) {
        let chunk = app.stage.children[i];
        if (chunk.x === this.x && chunk.y === this.y) {
          if (chunk.purpose === "grass") {
            this.x = oldX;
            this.y = oldY;
            this.moveRandom();
            break;
          } else {
            this.selectedChunk = i;
            setTimeout(() => {
              this.create();
              app.stage.children[this.selectedChunk].tint = "0x7F0799";
            }, 50); // Speed
          }
        }
      }
    }
  }
}
