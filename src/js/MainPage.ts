import Debug from "debug";
import Data from "./Store";
const debug = Debug("grade-calculator:main");

export default class MainPage {
	static currentCourse: string = null;
	static main: HTMLElement;

	constructor() {
		MainPage.main = document.querySelector("main");

		MainPage.setCourse(null);

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
		if (courseId === null) {
			debug("Showing main/landing page");
			MainPage.showLanding();
			return;
		}
		if (!Object.hasOwnProperty.call(Data.data.courses, courseId)) {
			debug(`Invalid course ID ${courseId} provided; going to main`);
			MainPage.showLanding();
			return;
		}
		if (courseId === MainPage.currentCourse) {
			debug("setCourse requested with current course.  No change.");

			return;
		}
		MainPage.currentCourse = courseId;
		MainPage.main.innerHTML = courseId;
		debug(`Setting currentCourse = ${MainPage.currentCourse}`);

		const course = Data.data.courses[courseId];

		debug(`Doing inital rendering of ${course.label} (${course.id})`);

		MainPage.main.innerHTML = `
			<div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto lg:mx-0 text-center lg:text-left mt-6 lg:mt-12">
				<h1>${course.label}</h1>
			</div>
			<div class="flex flex-col lg:flex-row">
				<div class="flex-1 lg:h-24 bg-primary-600"><h1>test</h1></div>
				<div class="flex-1 lg:h-24 bg-primary-300"><h1>test</h1></div>
			</div>
		`;

		Data.fireCallbacks();
	}

	static showLanding(): void {
		debug("Showing landing page (currentCourse = null)");
		MainPage.currentCourse = null;

		MainPage.main.innerHTML = `
			<div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto mt-12 text-center">
				<h1>Welcome!</h1>
			</div>
			<div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto mt-12 text-center">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		`;

		Data.fireCallbacks();
	}
}
