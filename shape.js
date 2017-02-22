var birds = [];
function Bird () {
      this.x = random(0, width);
      this.y = random(0, height);
      this.display = function() {

        stroke(255);
        noFill();
      triangle(30, 75, 58, 20, 86, 75);
      };
      this.move = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }
function setup() {
  createCanvas(600, 400);
  //object definition in setup
  for (var i = 0; i < 200; i++) {
     birds[i] = new Bird();
  }
}
function draw() {
  background(0);
  for (var i = 0; i < birds.length; i++) {
    birds[i].move();
    birds[i].display();
  }
}
