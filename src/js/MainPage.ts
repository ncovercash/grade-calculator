import Debug from "debug";
import Data from "./Store";
const debug = Debug("grade-calculator:main");

export default class MainPage {
	static currentCourse: string = null;
	static main: HTMLElement;

	constructor() {
		MainPage.main = document.querySelector("main");

		MainPage.main.innerHTML = `
			<div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto mt-12 text-center">
				<h1>Welcome!</h1>
			</div>
		`;

		if (window.location.hash) {
			MainPage.setCourse(window.location.hash.substr(1));
		}

		window.addEventListener(
			"hashchange",
			() => {
				MainPage.setCourse(window.location.hash.substr(1));
			},
			{ passive: false },
		);
	}

	static setCourse(courseId: string): void {
		if (!Object.hasOwnProperty.call(Data.data.courses, courseId)) {
			debug(`Invalid course ID ${courseId} provided`);
			return;
		}
		// const course = Data.data.courses[courseId];
		MainPage.currentCourse = courseId;
		MainPage.main.innerHTML = courseId;
		debug(`currentCourse = ${MainPage.currentCourse}`);
		Data.fireCallbacks();
	}
}
