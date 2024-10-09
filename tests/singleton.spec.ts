import { expect, test, it } from "bun:test";
import { Singleton } from "../src/singleton/index";

test("should always return the same instance", () => {
	const s1 = Singleton.getInstance();
	const s2 = Singleton.getInstance();
	expect(s1).toBe(s2);
});

test("should hold the same data", () => {
	const s1 = Singleton.getInstance();
	const s2 = Singleton.getInstance();
	s1.counter = 4;
	expect(s2.counter).toBe(4);
	s2.counter = 5;
	expect(s1.counter).toBe(5);
});

/*
test("should not be able to call the constructor directly", () => {
	const fail = new Singleton() // TS will complain about this
});
*/
