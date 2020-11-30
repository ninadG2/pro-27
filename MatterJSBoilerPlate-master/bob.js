 class bob
 {
     constructor(x,y,radius)
     {
       var  options = {
                       'restitution':0.8,
                       'density':1.0,
                       
                      }              

       this.body = Bodies.circle(x,y,radius,options)    
       var bobDiameter =  this.radius ;
       World.add(world, this.body);                             
     }

     show()
     {
       var bobpos =  this.body.postion ;
         push();
              //translate(bobpos.x, bobpos.y);
               rectMode(CENTER);
               fill("red");
               ellipse(400,350,bobDiameter);
         pop();
     }
 }