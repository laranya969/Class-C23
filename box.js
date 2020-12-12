class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    var pos =this.body.position;
    push();//captures the new settings
    translate(pos.x, pos.y);//change the origin of the graph
    rotate(angle)//rotating the object clockwise
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();//reverts to the old settings
  }
};
