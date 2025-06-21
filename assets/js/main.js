import { toggleActiveClass } from "./scripts/radio-buttons.js";

function main() {
	const filters = document.querySelector('[data-component="filters"]');
	toggleActiveClass(filters);
}

document.addEventListener("DOMContentLoaded", () => {
	main();
});
