export interface Subscriber {
	update(data: string): void;
}

export class SubscriberA implements Subscriber {
	private name: string;
	constructor(name: string) {
		this.name = name;
	}

	update(data: string) {
		console.log(
			`sub A "${this.name}" got notified with the following value : `,
			data,
		);
	}
}

export class SubscriberB implements Subscriber {
	private static count = 0;
	#number: number;

	constructor() {
		this.#number = ++SubscriberB.count;
	}

	update(data: string) {
		console.log(
			`subB n°${this.#number} got updated with the following value : `,
			data,
		);
	}
}

export class Publisher {
	#subscribers: Subscriber[] = [];
	#data = "";

	setData(data: string) {
		this.#data = data;
		this.notifySubscribers();
	}

	notifySubscribers() {
		for (const subscriber of this.#subscribers) {
			subscriber.update(this.#data);
		}
	}

	subscribe(subscriber: Subscriber): void {
		this.#subscribers.push(subscriber);
	}

	unsubscribe(subscriber: Subscriber): void {
		const index = this.#subscribers.indexOf(subscriber);
		if (index > -1) {
			this.#subscribers.splice(index, 1);
		}
	}
}
