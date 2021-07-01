class ground{
    constructor(x,y,w,h){

        var  ground_options={
        isStatic:true

        }
        
            this.body = Bodies.rectangle(x,y,w,h,ground_options);
            this.w=w;
            this.h=h;
            World.add(world, this.body);
            
        
    }
display(){
      fill("#85C1E9");
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.w,this.h);
      
}

};