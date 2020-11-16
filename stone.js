class Stone
{

    constructor(x,y,radius){

    var options={
        isStatic:false,
        retitustion:0,
        density:1.2,
        friction:1,
    }

    this.x=x;
    this.y=y;
    this.body=Bodies.circle(this.x,this.y,this.radius,options);
    this.radius=radius;
    this.image("sprites/stone.png")
    World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;

        push()
        transalate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(RADIUS);
        image(this.image, 0, 0, this.width*2, this.height*2);
        pop()

    }
}