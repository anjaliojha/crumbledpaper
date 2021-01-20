class Dust{
constructor(x,y,width,height){
    var option={
        restitution:0.3,
          friction :0.5,
          density : 1.2,
          isStatic:false,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      strokeWeight(4);
      stroke("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
 

}

