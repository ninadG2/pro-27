class rope
{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = { bodyA :body1,
            bodyB : body2,
            stiffness : 1,
            length :100
                            }

         this.ropea = constraint.create(options)
         World.add(world, this.ropea)
    }

    display()
    {
        var bobopos = this.ropea.bodyA.position;
        var staticopos = this.ropea.bodyB.position;
    
        line(bobopos.x,bobopos.y,staticopos.x,staticopos.y)
    }
}