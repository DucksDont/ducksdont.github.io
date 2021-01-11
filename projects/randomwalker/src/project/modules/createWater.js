class createWater {
  constructor(chunk) {
    this.chunk = chunk;
    this.create();
  }
  create() {
    app.stage.children[this.chunk].purpose = "water";
  }
}
