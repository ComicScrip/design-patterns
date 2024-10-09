import { Adapter, CartesianCoords, Segment } from "../src/adapter";
import { test, expect } from "bun:test";

test("should be able to convert polar coords to cartesian coords", () => {
	const cartesianPoint1 = new CartesianCoords(3, 0);
	const cartesianPoint2 = new CartesianCoords(7, 0);

	expect(new Segment(cartesianPoint1, cartesianPoint2).length).toBe(4);

	const polarPoint1 = { angle: 0, radius: 3 };
	const polarPoint2 = { angle: 0, radius: 7 };
	expect(
		new Segment(new Adapter(polarPoint1), new Adapter(polarPoint2)).length,
	).toBe(4);

	expect(
		new Segment(
			new CartesianCoords(1, 1),
			new CartesianCoords(3, 3),
		).length.toFixed(2),
	).toBe(
		new Segment(
			new Adapter({ angle: Math.PI / 4, radius: Math.sqrt(1 ** 2 + 1 ** 2) }),
			new Adapter({ angle: Math.PI / 4, radius: Math.sqrt(3 ** 2 + 3 ** 2) }),
		).length.toFixed(2),
	);
});
