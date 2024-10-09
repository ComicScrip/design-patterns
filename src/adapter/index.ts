export interface PolarCoords {
	radius: number;
	angle: number;
}

export class CartesianCoords {
	#x: number;
	#y: number;

	constructor(x = 0, y = 0) {
		this.#x = x;
		this.#y = y;
	}

	get x() {
		return this.#x;
	}
	get y() {
		return this.#y;
	}
}

export class Adapter extends CartesianCoords {
	// see https://en.wikipedia.org/wiki/Polar_coordinate_system#/media/File:Polar_to_cartesian.svg
	#adaptee: PolarCoords;

	constructor(adaptee: PolarCoords) {
		/* "eager" conversion : 
    const x = adaptee.radius * Math.cos(adaptee.angle) 
    const y = adaptee.radius * Math.sin(adaptee.angle) 
		super(x, y);
    */
		super();
		this.#adaptee = adaptee;
	}

	get x() {
		return this.#adaptee.radius * Math.cos(this.#adaptee.angle);
	}
	get y() {
		return this.#adaptee.radius * Math.sin(this.#adaptee.angle);
	}
}

export class Segment {
	#pointA: CartesianCoords;
	#pointB: CartesianCoords;

	constructor(a: CartesianCoords, b: CartesianCoords) {
		this.#pointA = a;
		this.#pointB = b;
	}

	get length() {
		return Math.sqrt(
			(this.#pointB.x - this.#pointA.x) ** 2 +
				(this.#pointB.y - this.#pointA.y) ** 2,
		);
	}
}
