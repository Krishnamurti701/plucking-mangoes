class Stone{
    constructor(x,y,diameter,options){
        var options={
            isStatic:true,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;
        this.image= loadImage("Images/stone.png");
        World.add(world, this.body);
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER)
        image(this.image,0,0,this.diameter);
        pop();
    }
    }