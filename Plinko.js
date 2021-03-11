  class Plinko{
    constructor(x,y,radius){
        var options = {
            restitution: 0,
            friction: 0,
            isStatic:true

        }
       
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);

    }

        display(){
        var position = this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x,position.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}