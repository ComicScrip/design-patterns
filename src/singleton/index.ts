export class Singleton {
	private static instance: Singleton;

	#counter = 0;

	get counter() {
		return this.#counter;
	}

	set counter(val) {
		this.#counter = val;
	}

	private constructor() {}

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
			console.log("Singleton created");
		}
		return Singleton.instance;
	}
}
