class Sling{

    constructor(body,pointB){

        var opctions={
            bodyA:body,
            pointB:pointB,
            stiffness:0.4,
            length:15,
        }
       this.pointB=pointB;
       this.sling=Constraint.create(opctions);
       World.add(world,this.sling);

    }
    fly(){

        this.sling.bodyA=null;

    }
    attack(){

     this.sling.bodyA=body;   

    }
    display(){

        if(this.sling.bodyA){

            strokeWeight(4);
            stroke(255);
            line(this.launcher.bodyA.position.x, this.launcher.bodyA.position.y, this.pointB.x, this.pointB.y);


        }

    }
}