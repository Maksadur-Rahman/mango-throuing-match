class Ground{

    constructor(x,y,width,height){
        var opctions={
            isStatic:false,
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,opctions);
        this.height=height;
        this.width=width;
        World.add(world,this.body);

    }
    display(){

        var pos=this.body.position;
        push()
        rectMode(CENTER);
        rect(this.body.x,this.body.y);
        translate(pos.x,pos.y)
        pop();
    }
}