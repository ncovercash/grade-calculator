import Debug from "debug";
import localstore from "store2";
const debug = Debug("grade-calculator:store");

export enum ScoreCalculationTypes {
	AVERAGE = 0,
	DROPS = 1,
	REPLACES = 2,
	POINTS = 3,
}

export type ScoreCalculation = {
	id: string;
	label: string;
	weight: number;
	type: ScoreCalculationTypes;
	numDrops: number;
	totalPoints: number;
};

export type Grade = {
	id: string;
	label: string;
	known: boolean;
	points: number;
	maxPoints: number;
	minPossiblePoints: number;
	maxPossiblePoints: number;
};

export type Course = {
	id: string;
	label: string;
	totalWeight: number;
	classifications: Record<string, ScoreCalculation>;
	grades: Grade[];
};

export type StoreData = {
	courses: Record<string, Course>;
};

export default class Store {
	static callbacks: (() => void)[] = [];

	static data: StoreData;

	constructor() {
		debug("Initializing data store");

		// all lives in session, this just handles navbar
		window.addEventListener("storage", (e) => {
			if (e.key === "data") {
				debug("Storage changed in a different tab");
				Store.fireCallbacks();
			}
		});

		localstore.set("data", { courses: {} }, false);

		const data = localstore.get("data") as StoreData;

		Store.data = new Proxy(data, { get: Store.proxyHandlerGet, set: Store.proxyHandlerSet });
	}

	/* eslint-disable */
	static proxyHandlerGet(target: any, key: string): any {
		if (typeof target[key] === "object" && target[key] !== null) {
			return new Proxy(target[key], { get: Store.proxyHandlerGet, set: Store.proxyHandlerSet });
		} else {
			return target[key];
		}
	}

	static proxyHandlerSet(target: any, key: string, value: any): boolean {
		debug(`Proxied a change to some ${key}`);
		target[key] = value;
		localstore.set("data", Store.data);
		Store.fireCallbacks();
		return true;
	}
	/* eslint-enable */

	static registerCallback(callback: () => void): void {
		Store.callbacks.push(callback);
	}

	static fireCallbacks(): void {
		debug(`Firing ${Store.callbacks.length} callbacks`);
		Store.callbacks.map((callback) => callback());
	}
}
