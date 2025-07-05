import { toggleActiveClass } from "./scripts/radio-buttons.js";
import { renderCards } from "./components/extensions-card.js";
import { getCardListContainer } from "./utils/dom.js";
import { populateParentElement } from "./utils/fetch.js";

async function main() {
	// Init components
	await populateParentElement(
		"../../data.json",
		getCardListContainer,
		renderCards
	);

	// Init scripts
	const filters = document.querySelector('[data-component="filters"]');
	if (filters.childElementCount > 0) {
		toggleActiveClass(filters);
	}
}

document.addEventListener("DOMContentLoaded", main);
