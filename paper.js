class Paper {
    constructor(x, y, width, height) {
      var options = {
          restitution:1,
          friction:0.5,
          density:1.2,
          isStatic:false,
      }
      
      this.width = width;
      this.height = height;
      this.body = Bodies.circle(50,50,40,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill(255);
      strokeWeight(4);
    
      stroke("green");
      ellipse(pos.x, pos.y, 40, 40);
            pop();
    }
  };
  