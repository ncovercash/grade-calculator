export default function draw(footer: HTMLElement): void {
	footer.innerHTML = `
		<div class="container mx-auto px-8">
			<div class="flex flex-row justify-between">
				<p class="copyright flex-initial">
					&copy;${new Date().getFullYear()} Noah Overcash
					<br>
					View the source code on <a href="https://github.com/ncovercash/grade-calculator">GitHub</a>
				</p>
				<button class="flex-initial">
					<svg class="moon w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
						<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						/>
					</svg>
					<svg class="sun w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
						<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				</button>
			</div>
		</div>
	`;

	footer.querySelector("button").addEventListener("click", () => {
		if (document.body.classList.contains("dark")) {
			document.body.classList.remove("dark");
			localStorage.dark = "false";
		} else {
			document.body.classList.add("dark");
			localStorage.dark = "true";
		}
	});
}
