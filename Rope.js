class Sling {
	constructor(bodyAInput, pointBInput) {
		var options = {
			bodyA: bodyAInput,
			pointB: pointBInput,
			stiffness: 1,
			angularStiffness: 1,
			length: 220
		};
		//console.log(options);
		this.sling = Constraint.create(options);
		World.add(userWorld, this.sling);
		this.pointX = bodyAInput.x;
		this.pointY = bodyAInput.y;
		this.pointB = pointBInput;
	}

	display() {
        if(this.sling.bodyA){
			var pointA = this.sling.bodyA.position;
			var pointB = this.pointB;

			push();
			strokeWeight(3.5);
			stroke("#fff");
			line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
		}
	}

}