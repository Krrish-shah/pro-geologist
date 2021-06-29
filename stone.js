class Stone{
	constructor(x,y,r)
	{
		var options = {
			'restitution':0.8,
			'friction':0.9,
			'density':12
				}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			ellipseMode(0,0, this.r);
			pop()
	}

}