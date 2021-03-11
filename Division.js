class Division{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){

        var position=this.body.position;
        
        push();
        fill("white");
        rectMode(CENTER);
        rect(position.x,position.y,this.width,this.height)
        pop();
    }
}