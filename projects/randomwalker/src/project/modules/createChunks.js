class createArea {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.graphic = new PIXI.Graphics();
    this.create();
  }
  create() {
    this.graphic.lineStyle(2, 0, 1);
    this.graphic.beginFill("0xFFFFFF");
    this.graphic.tint = "0x684E32";
    this.graphic.drawRect(0, 0, 20, 20);
    this.graphic.x = this.x;
    this.graphic.y = this.y;
    this.graphic.endFill();
    this.graphic.alpha = 1;
    this.graphic.interactive = true;
    this.graphic.purpose = "dirt";
    this.graphic.buttonMode = true;
    this.graphic
      .on("mousedown", leftDown)
      .on("rightdown", rightDown)
      .on("mouseup", leftUp)
      .on("rightup", rightUp)
      .on("pointerover", chunkHover)
      .on("pointerout", chuckUnHover);
    app.stage.addChild(this.graphic);
  }
}

function chunkHover() {
  this.alpha = 0.5;
  if (isLeftDown) {
    if (this.purpose != "water") {
      this.purpose = "grass";
      this.tint = "0x16C172";
    }
  } else if (isRightDown) {
    if (this.purpose != "water") {
      this.purpose = "dirt";
      this.tint = "0x684E32";
    }
  }
}
function chuckUnHover() {
  this.alpha = 1;
}

function leftDown() {
  isLeftDown = true;
  if (isLeftDown) {
    if (this.purpose != "water") {
      this.purpose = "grass";
      this.tint = "0x16C172";
    }
  }
}

function leftUp() {
  isLeftDown = false;
}

function rightDown() {
  isRightDown = true;
  if (isRightDown) {
    if (this.purpose != "water") {
      this.purpose = "dirt";
      this.tint = "0x684E32";
    }
  }
}

function rightUp() {
  isRightDown = false;
}
