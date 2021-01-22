class Plinko {
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 1
        }
        r=10;
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        
        push();
        fill("white");
        strokeWeight(5);
        stroke("yellow");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}