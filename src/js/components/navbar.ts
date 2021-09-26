export default function createNavbar(nav: HTMLElement, sidenav: HTMLElement): void {
	const html: string[] = [];
	const navOnly: string[] = [];
	const sidenavOnly: string[] = [];

	html.concat(navOnly).forEach((el) => nav.append(el));

	html.concat(sidenavOnly).forEach((el) => sidenav.append(el));

	document
		.getElementById("sidenav-trigger")
		.addEventListener("click", openSidebar.bind(this, sidenav.parentElement));
	document
		.getElementById("sidenav-overlay")
		.addEventListener("click", closeSidebar.bind(this, sidenav.parentElement));
	document
		.getElementById("sidenav-close")
		.addEventListener("click", closeSidebar.bind(this, sidenav.parentElement));
}

function openSidebar(sidenavWrapper: HTMLElement) {
	sidenavWrapper.classList.add("active");
}

function closeSidebar(sidenavWrapper: HTMLElement) {
	sidenavWrapper.classList.remove("active");
}
