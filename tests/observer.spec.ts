import { Publisher, SubscriberA, SubscriberB } from "../src/observer/index";
import { test, spyOn, expect } from "bun:test";

test("should be able to subscribe to a Publisher and get updates when setData is fired", () => {
	const p = new Publisher();
	const s1 = new SubscriberA("toto");
	const s2 = new SubscriberA("titi");
	const spy1 = spyOn(s1, "update");
	const spy2 = spyOn(s2, "update");
	p.subscribe(s1);
	p.subscribe(s2);
	p.setData("hello");
	expect(spy1.mock.calls).toEqual([["hello"]]);
	expect(spy2.mock.calls).toEqual([["hello"]]);
});
