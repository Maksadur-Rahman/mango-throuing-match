class Tree{

    constructor(x,y,height,width){
        var opctions={
         
            isStatic:true,

        }
        this.body=Bodies.rectangel(this.x,this.y,this.height,this.weight,opctions);
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.image("sprites/tree.png");
        World.add(world,this.body);


    }
    display(){

        push()
        fill(0);
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.height,this.width);
        pop()
    }
}
