class Box4
{
  constructor(x, y, width, height) {
    var options = {
        'isStatic':false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 30, 50, options);
    this.width = 30;
    this.height = 50;
    World.add(world, this.body);
  }
  display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      strokeWeight(2);
      stroke("black")
      fill(128,128,128);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
  }
  }