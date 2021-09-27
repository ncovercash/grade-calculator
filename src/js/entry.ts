import "core-js/stable";
import Debug from "debug";
import "regenerator-runtime/runtime";
import whenDomReady from "when-dom-ready";
import "../css/global/base/entry";
import "../css/global/components/entry";
import "../css/global/utilities/entry";
import drawFooter from "./components/footer";
import createNavbar from "./components/navbar";
import MainPage from "./MainPage";
import Store from "./Store";

const debug = Debug("grade-calculator:onload");

if (localStorage.getItem("dark") === "true") {
	document.body.classList.add("dark");
} else if (localStorage.getItem("dark") === "false") {
	// light mode
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	document.body.classList.add("dark");
}

whenDomReady().then((): void => {
	debug("Document onload fired!");

	new Store();

	if (document.querySelector("nav")) {
		createNavbar(...(Array.from(document.querySelectorAll("nav")) as [HTMLElement, HTMLElement]));
	}
	if (document.querySelector("footer")) {
		drawFooter(document.querySelector("footer"));
	}

	new MainPage();
});
