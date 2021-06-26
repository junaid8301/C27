class Chain{
    constructor(b1,b2){
        var op = {
            bodyA:b1,
            bodyB:b2
        }
       this.ch = Matter.Constraint.create(op)
       World.add(world, this.ch);
    }
    display(){
        line(this.ch.bodyA.position.x,this.ch.bodyA.position.y,
            this.ch.bodyB.position.x,this.ch.bodyB.position.y,)
    }
}