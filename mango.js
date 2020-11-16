class Mango{

    constructor(x,y,radius){
        var opctions={

            isStatic:true,
            restitusion:0,
            friction:1,
            density:1.2,
        }
        this.body=Bodies.circle(this.x,this.y,this.radius,opctions);
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image=loadImage("sprites/mango.png");
        World.add(world,this.body);
        

    }

    display(){

        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.radius);
        pop()


    

    }
}
