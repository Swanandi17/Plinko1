class Particle{
    constructor(x,y,radius){
     var option={
        restitution:0.4             
        }

        this.body = Bodies.circle(x,y,radius/2,option);
        this.radius=radius;
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);
    }

    display(){
        var position = this.body.position;
        var angle = this.body.angle;

        push()
        translate(position.x,position.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();

    }
}