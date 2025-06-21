import { toggleActiveClass } from "./scripts/radio-buttons.js";

function main() {
	const filters = document.querySelector('[data-component="filters"]');
	if (filters.childElementCount > 0) {
		toggleActiveClass(filters);
    }
}

document.addEventListener("DOMContentLoaded", () => {
	main();
});
