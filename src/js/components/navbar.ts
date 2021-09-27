import Debug from "debug";
import MainPage from "../MainPage";
import random from "../random";
import Data from "../Store";
const debug = Debug("grade-calculator:navbar");

export default function createNavbar(nav: HTMLElement, sidenav: HTMLElement): void {
	drawNavbar(nav, sidenav);

	document
		.getElementById("sidenav-trigger")
		.addEventListener("click", openSidebar.bind(this, sidenav.parentElement));
	document
		.getElementById("sidenav-overlay")
		.addEventListener("click", closeSidebar.bind(this, sidenav.parentElement));
	document
		.getElementById("sidenav-close")
		.addEventListener("click", closeSidebar.bind(this, sidenav.parentElement));

	Data.registerCallback(drawNavbar.bind(this, nav, sidenav));
}

export function drawNavbar(nav: HTMLElement, sidenav: HTMLElement): void {
	debug("Drawing navbar");

	const courses = Object.values(Data.data.courses).sort((a, b) => a.label.localeCompare(b.label));

	const navButtons: HTMLAnchorElement[] = [];
	const sidenavButtons: HTMLAnchorElement[] = [];

	courses.forEach((course) => {
		{
			const button = document.createElement("a");
			button.innerText = course.label;
			button.href = `#${course.id}`;
			if (MainPage.currentCourse === course.id) {
				button.classList.add("active");
			}
			button.addEventListener("click", () => {
				MainPage.setCourse(course.id);
				button.classList.add("active");
				return false;
			});
			navButtons.push(button);
		}
		{
			// clone with event listeners
			const button = document.createElement("a");
			button.innerText = course.label;
			button.href = `#${course.id}`;
			if (MainPage.currentCourse === course.id) {
				button.classList.add("active");
			}
			button.addEventListener("click", () => {
				MainPage.setCourse(course.id);
				button.classList.add("active");
				return false;
			});
			sidenavButtons.push(button);
		}
	});

	{
		const addClassBtn = document.createElement("a");
		addClassBtn.href = "#";
		addClassBtn.innerText = "Add Course";
		addClassBtn.addEventListener("click", addCourseHandler);
		navButtons.push(addClassBtn);
	}
	{
		const addClassBtn = document.createElement("a");
		addClassBtn.href = "#";
		addClassBtn.innerText = "Add Course";
		addClassBtn.addEventListener("click", addCourseHandler);
		sidenavButtons.push(addClassBtn);
	}

	nav.innerHTML = "";
	sidenav.innerHTML = "";

	nav.append(...navButtons);
	sidenav.append(...sidenavButtons);
}

function addCourseHandler(e: MouseEvent): false {
	e.preventDefault();

	const label = prompt("What would you like to label this course?");
	if (label) {
		let id = random(8);
		while (Object.hasOwnProperty.call(Data.data.courses, id)) {
			id = random(8);
		}
		Data.data.courses[id] = {
			id: id,
			label: label,
			totalWeight: 100,
			classifications: {},
			grades: [],
		};
	}

	return false;
}

function openSidebar(sidenavWrapper: HTMLElement): void {
	sidenavWrapper.classList.add("active");
}

function closeSidebar(sidenavWrapper: HTMLElement): void {
	sidenavWrapper.classList.remove("active");
}
