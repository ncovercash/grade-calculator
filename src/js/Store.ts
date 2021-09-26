import Debug from "debug";
import localstore from "store2";
const debug = Debug("grade-calculator:store");

export default class Store {
	static callbacks: (() => void)[] = [];
	static new = false;

	constructor() {
		// all lives in session, this just handles navbar
		window.addEventListener("storage", (e) => {
			if (e.key === "data") {
				debug("Storage changed in a different tab");
				Store.fireCallbacks();
			}
		});

		if (!localstore.has("data")) {
			Store.new = true;
		}
		localstore.set("data", { courses: {} }, false);
	}

	static registerCallback(callback: () => void): void {
		this.callbacks.push(callback);
	}

	static fireCallbacks(): void {
		debug("Firing ${this.callbacks.length} callbacks");
		this.callbacks.map((callback) => callback());
	}
}
